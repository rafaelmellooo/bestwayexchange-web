import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import Exchange from '../../../components/Exchange';
import api from '../../../services/api';

import './styles.css';

function ExchangesSection({ id }) {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadExchanges = async () => {
    setLoading(true);
    const { data } = await api.get(`/agencies/${id}`);
    setExchanges(data.agency.exchanges);
    setLoading(false);
  };

  useEffect(() => {
    loadExchanges();
  }, [id]);

  return loading ? (
    <BounceLoader
      color="#673ab7"
      sizeUnit="px"
      size="100"
    />
  ) : (
    <article id="exchanges">
      <Link to="/exchanges/new" id="add">
        <p style={{ color: '#fff' }}>
          <i style={{ fontSize: '96px' }} className="material-icons">add</i>
        </p>
      </Link>
      {
        exchanges.map((exchange) => (
          <Exchange
            key={exchange.id}
            id={exchange.id}
            name={exchange.name}
            time={exchange.time}
            exchangeType={exchange.exchangeType.name}
            filename={exchange.filename}
            city={exchange.city.name}
            country={exchange.city.country.name}
            price={exchange.price}
            createdAt={exchange.createdAt}
          />
        ))
      }
    </article>
  );
}

export default ExchangesSection;
