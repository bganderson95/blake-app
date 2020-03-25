import React, { Component } from "react";
import Aux from "../Aux/Aux";
import NavigationItems from "../../Components/Navigation/NavigationItems/NavigationItems";
import LivePost from "../../Components/LivePost/LivePost";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <NavigationItems />
        <main>
          {this.props.children}
          <LivePost />
        </main>
      </Aux>
    );
  }
}

export default Layout;
