import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NewAgency from './pages/NewAgency';
import NewExchange from './pages/NewExchange';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import Search from './pages/Search';
import Chat from './pages/Chat';
import NewRate from './pages/NewRate';
import AgencyDashboard from './pages/AgencyDashboard';
import ExchangeDashboard from './pages/ExchangeDashboard';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/agencies/new" component={NewAgency} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/search" component={Search} />
      <Route path="/exchanges/new" component={NewExchange} />
      <Route path="/chats/:id" component={Chat} />
      <Route path="/rates/new" component={NewRate} />
      <Route path="/agencies/:id/dashboard" component={AgencyDashboard} />
      <Route path="/exchanges/:id/dashboard" component={ExchangeDashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
