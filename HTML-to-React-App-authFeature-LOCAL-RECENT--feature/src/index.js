import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-zrp4hrwxuxb7di87.us.auth0.com"
    clientId="TMpimTn66j9bWrKuVebK6KNSVRnCZpi0"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
