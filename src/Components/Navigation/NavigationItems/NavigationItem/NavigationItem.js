import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.css";
import Button from "@material-ui/core/Button";

const NavigationLink = props => {
  return (
    <NavLink to={props.link} exact className={classes.NavigationItem}>
      <Button>{props.children}</Button>
    </NavLink>
  );
};

export default NavigationLink;
