import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateAgency from './pages/CreateAgency';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import Search from './pages/Search';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/search" component={Search} />
      <Route path="/create_agency" component={CreateAgency} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
