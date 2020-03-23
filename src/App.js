import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
//import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import GroupPage from "./Containers/GroupPage/GroupPage";
import asyncComponent from "./hoc/AsyncComponent/asyncComponent";

const asyncCreateGroup = asyncComponent(() => {
  return import("./Containers/CreateGroup/CreateGroup");
});

const asyncSettings = asyncComponent(() => {
  return import("./Containers/Settings/Settings");
});

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/createGroup" component={asyncCreateGroup} />
        <Route path="/settings" component={asyncSettings} />
        <Route path="/" component={GroupPage} />
      </Switch>
    );

    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default withRouter(App);
