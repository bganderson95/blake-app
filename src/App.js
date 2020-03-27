//Client ID: fe759877d178489e98e0856714dd04c5
import React, { Component } from "react";
import hash from "./hash";
import { authEndpoint, clientId, redirectUri, scopes } from "./Config";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import LoginButton from "./Components/UI/Buttons/LoginButton/LoginButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null
    };
  }

  componentDidMount() {
    let _token = hash.access_token;

    if (_token) {
      this.setState({ token: _token });
    }
  }

  render() {
    return (
      <div className="App">
        {/* <p>{JSON.stringify(this.state)}</p> */}
        {!this.state.token && (
          <LoginButton
            endpoint={authEndpoint}
            clientId={clientId}
            redirectUri={redirectUri}
            scopes={scopes}
          />
        )}
        {this.state.token && (
          <div>
            <MainPage token={this.state.token} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
