import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../Components/Header/Header";
import MakePost from "../MakePost/MakePost";
import PostsList from "../../Components/PostsList/PostsList";
import classes from "./GroupPage.css";

class GroupPage extends Component {
  render() {
    let GroupContent = (
      <div>
        <Header>Select a group to start</Header>
      </div>
    );

    if (this.props.selectedGroup) {
      //DON'T LIKE HOW THIS WORKS RN
      const selected = this.props.selectedGroup;
      const activeGroup = this.props.groups.filter(
        group => group.id === selected
      );
      GroupContent = (
        <div>
          <Header>{activeGroup[0].Name}</Header>
          <p>{activeGroup[0].Description}</p>
          {/* <h4>Members</h4>
          <ul>
            {activeGroup[0].Members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul> */}
          <PostsList />
          <MakePost />
        </div>
      );
    }

    return <div className={classes.GroupPage}>{GroupContent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedGroup: state.groups.selectedGroup,
    groups: state.groups.groups
  };
};

export default connect(mapStateToProps)(GroupPage);
