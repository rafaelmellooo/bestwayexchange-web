import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Exchange({
  id, name, exchangeType, time, country, city, filename,
}) {
  return (
    <div key={id} style={{ marginLeft: '25px', marginRight: '25px' }}>
      <div className="card">
        <div className="card-image">
          <img className="card_img" alt={name} src={`http://localhost:3333/files/${filename}`} />
        </div>
        <div className="card-content" style={{ padding: 0 }}>
          <h5 style={{ marginTop: 0, fontSize: '20px' }}>{name}</h5>
          <ul className="attributes">
            <li>{`Tipo de intercâmbio: ${exchangeType}`}</li>
            <li>{`Duração: ${time} meses`}</li>
            <li>{`País: ${country}`}</li>
            <li>{`Cidade: ${city}`}</li>
          </ul>
          <Link to={`/exchanges/${id}/dashboard`} className="redirect">EU QUERO</Link>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
