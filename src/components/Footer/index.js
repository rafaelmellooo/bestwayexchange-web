import React from 'react';
import './styles.css';

export default function Footer() {
  return (
    <footer className="page-footer deep-purple darken-2">
      <div className="container">
        <div className="row">
          <div className="col l6 s12" />
          <div className="col l4 offset-l2 s12">
            <p className="grey-text text-lighten-4 right">
              Desenvolvido por:
              <br />
              Alexandre Cavazine | Giovana Alves
              <br />
              Isabel Odizio | Larissa Aparecida
              <br />
              Matheus Barriento | Rafael de Mello
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright deep-purple darken-3">
        <div className="container">
        © 2014 Copyright Text
        </div>
      </div>
    </footer>
  );
}
