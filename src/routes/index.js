import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Signin from 'pages/auth/Signin';
import Signup from 'pages/auth/Signup';
import Meetups from 'pages/meetups';
import MeetupDetails from 'pages/meetups/Details';
import MeetupForm from 'pages/meetups/Form';
import Profile from 'pages/profile';

import history from 'services/history';
import Route from './Route';

const AllRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/cadastre-se" component={Signup} />
      <Route isPrivate path="/perfil" component={Profile} />
      <Route isPrivate path="/meus-meetups" component={Meetups} />
      <Route exact isPrivate path="/meetups/cadastro" component={MeetupForm} />
      <Route exact isPrivate path="/meetups/:id" component={MeetupDetails} />
      <Route
        exact
        isPrivate
        path="/meetups/:id/editar"
        component={MeetupForm}
      />
    </Switch>
  </Router>
);

export default AllRoutes;
