import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import 'materialize-css/dist/css/materialize.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes />
    </div>
  );
}
