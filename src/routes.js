import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NewAgency from './pages/NewAgency';
import NewExchange from './pages/NewExchange';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import Search from './pages/Search';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/agencies/new" component={NewAgency} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/search" component={Search} />
      <Route path="/exchanges/new" component={NewExchange} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
