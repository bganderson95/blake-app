import React, { Component } from "react";
import Aux from "../Aux/Aux";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import NavigationItems from "../../Components/Navigation/NavigationItems/NavigationItems";
import LivePost from "../../Components/LivePost/LivePost";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <SideDrawer />
        <NavigationItems />
        <main>{this.props.children}</main>
        <LivePost />
      </Aux>
    );
  }
}

export default Layout;
