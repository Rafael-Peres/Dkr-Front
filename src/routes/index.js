import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp/Recruiter";
import Option from "../pages/Auth/SignUp/Option";
import RegisterCandidates from "../pages/Auth/SignUp/Candidate";
import RegisterRecruiters from "../pages/Auth/SignUp/Recruiter";
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
      <Route exact path="/signup/option" component={Option} />
      <Route exact path="/signup/candidate" component={RegisterCandidates} />
      <Route exact path="/signup/recruiter" component={RegisterRecruiters} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/password" component={ChangePassword} />
      <Route path="/profile" component={Profile} />
      <Route exact path="/jobs/register" component={RegisterJobs} />
      <Route exact path="/jobs/detail" component={DetailJobs} />
      <Route path="/jobs" component={ListJobs} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
