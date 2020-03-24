import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.css";
import Button from "@material-ui/core/Button";

const NavigationLink = props => {
  return (
    <li>
      <NavLink
        to={props.link}
        exact
        className={classes.NavigationItem}
        activeStyle={{ backgroundColor: "red" }}
      >
        <Button>{props.children}</Button>
      </NavLink>
    </li>
  );
};

export default NavigationLink;
