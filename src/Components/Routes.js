import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Container/homePage/HomePage";
import Login from "./../Container/auth/Login";
import Signup from "./../Container/auth/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />

      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Signup} />
    </Switch>
  );
};

export default Routes;
