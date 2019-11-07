import React from 'react';
import './styles.css';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <>
      <nav className="nav-extended deep-purple darken-2" style={{ height: '80px' }}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <img src={logo} alt="" className="logotipo" />
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <div style={{ marginTop: '10px'}}>
              <li className="tab">
                <a href="sass.html">
                  <i style={{ fontSize: '30px' }} className="large material-icons">search</i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i style={{ fontSize: '40px' }} className="large material-icons">account_circle</i>
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="nav-content" style={{ marginLeft: '600px', bottom: '50px' }}>
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#test1"><p className="letra mrgright">Faculdade</p></a></li>
            <li className="tab"><a href="#test2"><p className="letra mrgleft">Agências</p></a></li>
            <li className="tab"><a href="#test3"><p className="letra mrgleft">Trabalho</p></a></li>
          </ul>
        </div>
      </nav>


    </>
  );
}
