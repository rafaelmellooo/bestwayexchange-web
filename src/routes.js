import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';

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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        history.push('/login')
      ))}
  />
);

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route history={history} exact path="/" component={Main} />
      <PrivateRoute history={history} path="/agencies/new" component={NewAgency} />
      <Route history={history} path="/login" component={Login} />
      <Route history={history} path="/register" component={Register} />
      <Route history={history} path="/search" component={Search} />
      <PrivateRoute history={history} path="/exchanges/new" component={NewExchange} />
      <PrivateRoute history={history} path="/chats/:id" component={Chat} />
      <PrivateRoute history={history} path="/rates/new" component={NewRate} />
      <Route history={history} path="/agencies/:id/dashboard" component={AgencyDashboard} />
      <Route history={history} path="/exchanges/:id/dashboard" component={ExchangeDashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
