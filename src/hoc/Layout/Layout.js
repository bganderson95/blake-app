import React, { Component } from "react";
import Aux from "../Aux/Aux";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import NavigationItems from "../../Components/Navigation/NavigationItems/NavigationItems";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <SideDrawer />
        <NavigationItems />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
