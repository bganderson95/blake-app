import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import GroupList from "../../GroupList/GroupList";
import classes from "./SideDrawer.css";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.List}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <GroupList />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon fontSize="large" style={{ color: "#bbb" }} />
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
