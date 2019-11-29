import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect, withRouter,
} from 'react-router-dom';

import Header from './components/Header';

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
import SendEmail from './pages/SendEmail';
import Agency from './pages/Agency';

const HeaderWrapper = withRouter(Header);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      ))}
  />
);

const Routes = () => (
  <BrowserRouter>
    <HeaderWrapper />
    <Switch>
      <Route exact path="/" component={Main} />
      <PrivateRoute path="/agencies/new" component={NewAgency} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/search" component={Search} />
      <PrivateRoute path="/exchanges/new" component={NewExchange} />
      <PrivateRoute path="/chats/:id" component={Chat} />
      <PrivateRoute path="/rates/:id" component={NewRate} />
      <Route path="/agencies/:id/dashboard" component={AgencyDashboard} />
      <PrivateRoute path="/exchanges/:id/dashboard" component={ExchangeDashboard} />
      <Route path="/auth/send_email" component={SendEmail} />
      <Route path="/agencies/:id" component={Agency} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
