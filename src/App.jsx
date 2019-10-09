import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
// import Filter from './pages/Filter';
import Footer from './components/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Filter /> */}
      <Footer />
    </div>
  );
}
