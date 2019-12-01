import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import Exchange from '../../../components/Exchange';
import api from '../../../services/api';

import './styles.css';

function Favorite() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadExchanges = async () => {
    setLoading(true);
    const { data } = await api.get('/favorites');
    setExchanges(data);
    setLoading(false);
  };

  useEffect(() => {
    loadExchanges();
  }, []);

  return loading ? (
    <BounceLoader
      color="#673ab7"
      sizeUnit="px"
      size="100"
    />
  ) : (
    <article id="exchanges">
      {
        exchanges.map(({ exchange }) => (
          <Exchange
            key={exchange.id}
            id={exchange.id}
            name={exchange.name}
            time={exchange.time}
            exchangeType={exchange.exchangeType.name}
            filename={exchange.filename}
            city={exchange.city.name}
            country={exchange.city.country.name}
          />
        ))
      }
    </article>
  );
}

export default Favorite;
