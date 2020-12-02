import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '../pages/Auth/SignIn';
import RegisterCandidates from '../pages/Auth/SignUp/Candidate';
import RegisterRecruiters from '../pages/Auth/SignUp/Recruiter';
import Forgot from '../pages/Auth/Forgot';
import ChangePassword from '../pages/User/ChangePassword';
import Profile from '../pages/User/Profile';
import Curriculum from '../pages/User/Curriculum';
import RegisterJobs from '../pages/Jobs/Register';
import ListJobs from '../pages/Jobs/List';
import DetailJobs from '../pages/Jobs/Detail';
import ListUsers from '../pages/User/List';

import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/signin" />} />
      <Route path="/signin" component={SignIn} />
      <Route exact path="/signup/candidate" component={RegisterCandidates} />
      <Route exact path="/signup/recruiter" component={RegisterRecruiters} />
      <Route exact path="/jobs/register" component={RegisterJobs} />
      <Route exact path="/jobs/detail" component={DetailJobs} />
      <Route path="/jobs" component={ListJobs} />
      <Route path="/candidates" component={ListUsers} />
      <Route path="/curriculum" component={Curriculum} />
      <Route path="/profile" component={Profile} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/password" component={ChangePassword} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
