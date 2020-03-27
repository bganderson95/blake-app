import React from "react";
import "./LoginButton.css";

const LoginButton = props => (
  <a
    className="LoginButton"
    href={`${props.endpoint}?client_id=${props.clientId}&redirect_uri=${
      props.redirectUri
    }&scope=${props.scopes.join("%20")}&response_type=token&show_dialog=true`}
  >
    Login to Spotify
  </a>
);

export default LoginButton;
