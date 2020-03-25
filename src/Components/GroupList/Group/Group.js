import React from "react";
import * as actions from "../../../store/actions/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GroupImage from "../../../assets/images/Red.jpg";
import classes from "./Group.css";

const Group = props => {
  let attachedClasses = [classes.Group];

  if (props.id === props.selectedGroup) {
    attachedClasses = [classes.Group, classes.Selected];
  }

  return (
    <li className={attachedClasses.join(" ")}>
      <Link to="/">
        <img src={GroupImage} alt="Group" />
        <div onClick={() => props.onSelectGroup(props.id)}>
          <h4>{props.name}</h4>
          <p>{props.description}</p>
        </div>
      </Link>
    </li>
  );
};

const mapStateToProps = state => {
  return {
    selectedGroup: state.groups.selectedGroup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectGroup: groupId => dispatch(actions.selectGroup(groupId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
