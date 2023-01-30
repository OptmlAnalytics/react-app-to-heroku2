import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SignInImg from "../../assets/images/SignIn.svg";
import styles from "./LogIn.module.css";
import Card from "../UI/Card";

import { Navigate } from "react-router-dom";
import Button from "../UI/Button";


const LogIn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return !isAuthenticated ? (
    <div>
      <div>
        <div className="lm-menu">
          <div className="lm-menu__left">
            <div className="lm-menu__left__inner"><a href="#" aria-current="page"
              className="lm-menu__item logo logo-header router-link-exact-active router-link-active"></a>
              <img className="imgfor" src="./ong.png"></img>

            </div>
          </div>
          <div className="lm-menu__right">
            <div className="lm-menu__right__inner">
              <Button
                onClick={() => {
                  loginWithRedirect({
                    appState: {
                      targetUrl: window.location.pathname + "/dashboard",
                    },
                  });
                }}
              >
                <h2>Log In</h2>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lm-hero">
          <div className="lm-hero__left">
            <h1 className="lm-hero__header">Develop analytics applications using our web application.</h1> <img
              src="./map-scale.png"
              alt="Scale Your Program" className="lm-hero__image"></img>
          </div>
        </div>
      </div>
      <div>
        <div className="lm-why">
          <p className="lm-why__header">Why OptmlAnalytics?</p>
          <p className="lm-why__subheader">OptmlAnalytics converts business data and the requirements into customized,
            visually informative and accurate dashboards containing charts, graphs and maps that can be updated
            in real-time.</p>
        </div>
      </div>
      <div class="lm-overview">
        <div class="lm-overview__left">
          <p class="lm-overview__tab selected">Workflow at a glance</p>
          <p class="lm-overview__tab">Data upload</p>
          <p class="lm-overview__tab">Data preview</p>
          <p class="lm-overview__tab">Data cleaning</p>
          <p class="lm-overview__tab">Data processing</p>
          <p class="lm-overview__tab">Dashboard generation</p>
          <p class="lm-overview__tab">Scenario analysis</p>
        </div>
        <div class="lm-overview__right"><video autoplay="autoplay" loop="loop" muted="muted"
          class="lm-overview__image">
          <source
            src="./410393.mp4"
            type="video/mp4"></source>
        </video>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/dashboard"} />
  );
};

export default LogIn;
