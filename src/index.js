import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="dev--em2j0m3.eu.auth0.com"
  clientId="rPWm9x4IUat2Pjde8knKf2DdxSIpfZhm"
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);