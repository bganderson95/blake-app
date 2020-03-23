import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.css";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/settings">
      <SettingsIcon />
    </NavigationItem>
  </ul>
);

export default navigationItems;
