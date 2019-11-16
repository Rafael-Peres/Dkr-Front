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

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/signin" />} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/password" component={ChangePassword} />
      <Route path="/profile" component={Profile} />
      <Route path="/jobs" component={ListJobs} />
      <Route path="/jobs/register" component={RegisterJobs} />
      <Route path="/jobs/detail" component={DetailJobs} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
