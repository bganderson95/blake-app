import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/profile">
      <AccountCircleIcon />
    </NavigationItem>
    <NavigationItem link="/settings">
      <SettingsIcon />
    </NavigationItem>
  </ul>
);

export default navigationItems;
