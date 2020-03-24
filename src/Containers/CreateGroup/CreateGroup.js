import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import classes from "./CreateGroup.css";
import Spinner from "../../Components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Description: "",
      Members: null
    };

    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
    this.membersChangeHandler = this.membersChangeHandler.bind(this);
  }

  nameChangeHandler = event => {
    this.setState({ Name: event.target.value });
  };

  descriptionChangeHandler = event => {
    this.setState({ Description: event.target.value });
  };

  membersChangeHandler = event => {
    this.setState({ Members: event.target.value.split(",") });
  };

  createGroupSubmit = () => {
    const group = this.state;
    this.props.onCreateGroupSubmit(group);
  };

  render() {
    let btnDisabled = false;
    if (
      this.state.Name === "" ||
      this.state.Description === "" ||
      this.state.Members === null
    ) {
      btnDisabled = true;
    }

    let CreateGroupContent = (
      <div className={classes.CreateGroup}>
        <h2>Create Group</h2>
        <form>
          <input
            type="text"
            value={this.state.Name}
            placeholder="Group Name"
            onChange={this.nameChangeHandler}
          />
          <input
            type="text"
            placeholder="Enter a brief description"
            onChange={this.descriptionChangeHandler}
          />
          <input
            type="text"
            placeholder="Start typing to add members"
            onChange={this.membersChangeHandler}
          />
          <button
            disabled={btnDisabled}
            type="button"
            onClick={() => this.createGroupSubmit()}
          >
            SUBMIT
          </button>
        </form>
      </div>
    );

    if (this.props.loading) {
      CreateGroupContent = <Spinner />;
    }

    return <div>{CreateGroupContent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.groups.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateGroupSubmit: group => dispatch(actions.createGroup(group))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
