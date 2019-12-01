import React from 'react';

import './styles.css';

function Address({
  city, state, zipCode, street, neighborhood, number, complement,
}) {
  return (
    <div className="address">
      <h4>{`${city} - ${state}`}</h4>
      <div>
        <p><i className="large material-icons">location_on</i></p>
        <div>
          <p>{`CEP: ${zipCode}`}</p>
          <p>{`Avenida/rua: ${street}`}</p>
          <p>{`Bairro: ${neighborhood}`}</p>
          <p>{`Número: ${number}`}</p>
          <p>{`Complemento: ${complement}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Address;
