import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/profile">
      <AccountCircleIcon fontSize="large" style={{ color: "#bbb" }} />
    </NavigationItem>
    <NavigationItem link="/settings">
      <SettingsIcon fontSize="large" style={{ color: "#bbb" }} />
    </NavigationItem>
  </ul>
);

export default navigationItems;
