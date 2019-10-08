import React from 'react';
import './styles.css';

export default function Footer() {
  return (
    <div id="footer">
      <footer className="page-footer deep-purple darken-2">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <p className="grey-text text-lighten-4">Produzido por:</p>
                <p className="grey-text text-lighten-4">Alexandre Cavazine</p>
                <p className="grey-text text-lighten-4">Giovana Alves</p>
                <p className="grey-text text-lighten-4">Isabel Odizio</p>
                <p className="grey-text text-lighten-4">Larissa Aparecida</p>
                <p className="grey-text text-lighten-4">Matheus Barriento</p>
                <p className="grey-text text-lighten-4">Rafael de Mello </p>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright deep-purple darken-3">
          <div className="container">
          © 2014 Copyright Text
          </div>
        </div>
      </footer>
    </div>
  );
}
