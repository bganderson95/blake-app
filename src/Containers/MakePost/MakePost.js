import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import classes from "./MakePost.css";
import Spinner from "../../Components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

class MakePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
    };

    this.postChangeHandler = this.postChangeHandler.bind(this);
  }

  postChangeHandler = event => {
    this.setState({ post: event.target.value });
  };

  makePostSubmit = () => {
    const post = this.state;
    this.props.onMakePostSubmit(post, this.props.selectedGroup);
    this.setState({ post: "" });
  };

  render() {
    let btnDisabled = false;
    if (this.state.post === "") {
      btnDisabled = true;
    }

    let makePostContent = (
      <form>
        <input
          type="text"
          value={this.state.Name}
          placeholder="Add New Post"
          onChange={this.postChangeHandler}
        />
        <button
          disabled={btnDisabled}
          type="button"
          onClick={() => this.makePostSubmit()}
        >
          SUBMIT
        </button>
      </form>
    );

    if (this.props.loading) {
      makePostContent = <Spinner />;
    }

    return <div className={classes.MakePost}>{makePostContent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedGroup: state.groups.selectedGroup,
    loading: state.posts.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMakePostSubmit: (post, group) => dispatch(actions.makePost(post, group))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MakePost);
