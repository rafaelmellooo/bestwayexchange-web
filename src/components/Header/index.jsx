import React from 'react';
import './styles.css';

export default function Header() {
  return (
    <>
      <nav className="nav-extended deep-purple darken-2">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Logo</a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">
                <i style={{ fontSize: '50px' }} className="large material-icons">account_circle</i>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#test1">Faculdade</a></li>
            <li className="tab"><a href="#test2">Intercambio de idioma</a></li>
            <li className="tab"><a href="#test3">Trabalho</a></li>
            <li className="tab"><a href="#test4"><i className="large material-icons">search</i></a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </>
  );
}
