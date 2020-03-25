import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import classes from "./MakeComment.css";

class MakeComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
    this.commentChangeHandler = this.commentChangeHandler.bind(this);
  }

  commentChangeHandler = event => {
    this.setState({ comment: event.target.value });
  };

  makeCommentSubmit = () => {
    const comment = this.state;
    this.props.onMakeCommentSubmit(comment, this.props.post);
    // this.props.onFetchPosts(this.props.selectedGroup);
    this.setState({ comment: "" });
  };

  render() {
    let btnDisabled = false;
    if (this.state.comment === "") {
      btnDisabled = true;
    }

    return (
      <div className={classes.MakeComment}>
        <form>
          <input
            type="text"
            value={this.state.Name}
            placeholder="Add New Comment"
            onChange={this.commentChangeHandler}
          />
          <button
            disabled={btnDisabled}
            type="button"
            onClick={() => this.makeCommentSubmit()}
          >
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.comments.loading,
    selectedGroup: state.groups.selectedGroup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMakeCommentSubmit: (comment, post) =>
      dispatch(actions.makeComment(comment, post)),
    onFetchPosts: group => dispatch(actions.fetchPosts(group))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeComment);
