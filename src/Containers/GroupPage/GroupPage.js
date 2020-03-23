import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../Components/Header/Header";

import classes from "./GroupPage.css";

class GroupPage extends Component {
  render() {
    let GroupContent = <Header>Select a group to start</Header>;

    if (this.props.selectedGroup) {
      GroupContent = (
        <div>
          <Header>{this.props.selectedGroup.name}</Header>
          <p>{this.props.selectedGroup.time}</p>
          <p>{this.props.selectedGroup.id}</p>
          <h6>Members</h6>
          <ul>
            {this.props.selectedGroup.members.map(member => (
              <li>{member}</li>
            ))}
          </ul>
        </div>
      );
    }

    return <div className={classes.GroupPage}>{GroupContent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedGroup: state.selectedGroup
  };
};

export default connect(mapStateToProps)(GroupPage);
