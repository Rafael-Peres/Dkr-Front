import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Forgot from "../pages/Auth/Forgot";
import ChangePassword from "../pages/User/ChangePassword";
import Profile from "../pages/User/Profile";
import RegisterJobs from "../pages/Jobs/Register";
import ListJobs from "../pages/Jobs/List";
import DetailJobs from "../pages/Jobs/Detail";

import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/signin" />} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={Forgot} />
      <PrivateRoute path="/password" component={ChangePassword} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute exact path="/jobs/register" component={RegisterJobs} />
      <PrivateRoute exact path="/jobs/detail" component={DetailJobs} />
      <Route path="/jobs" component={ListJobs} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
