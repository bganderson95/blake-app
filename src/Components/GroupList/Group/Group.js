import React from "react";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import GroupLogo from "../../../assets/images/GroupLogo.png";
import classes from "./Group.css";

const Group = props => {
  return (
    <li className={classes.Group}>
      <img src={GroupLogo} alt={GroupLogo} />
      <div onClick={() => props.onSelectGroup(props.data)}>
        <h4>{props.data.name}</h4>
        <p>{props.data.time}</p>
      </div>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectGroup: group => dispatch(actions.selectGroup(group))
  };
};

export default connect(null, mapDispatchToProps)(Group);
