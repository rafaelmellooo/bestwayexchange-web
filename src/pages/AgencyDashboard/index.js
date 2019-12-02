import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import StarRatings from 'react-star-ratings';
import Exchange from '../../components/Exchange';
import Address from '../../components/Address';
import api from '../../services/api';

import './styles.css';

function Agency({ match }) {
  const [agencyInfo, setAgencyInfo] = useState({});
  const [addresses, setAddresses] = useState([]);
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAgencyInfo = async () => {
    const { data } = await api.get(`/agencies/${match.params.id}`);
    setAgencyInfo(data);
  };

  const loadAddresses = async () => {
    const { data } = await api.get(`/agencies/${match.params.id}/addresses`);
    setAddresses(data);
  };

  const loadRates = async () => {
    const { data } = await api.get(`/agencies/${match.params.id}/rates`);
    setRates(data);
  };

  useEffect(() => {
    setLoading(true);
    loadAgencyInfo()
      .then(() => loadAddresses()
        .then(() => loadRates()
          .then(() => setLoading(false))));
  }, [match.params.id]);

  return loading ? (
    <BounceLoader
      color="#673ab7"
      sizeUnit="px"
      size="100"
    />
  ) : (
    <div>
      <div className="img" style={{ backgroundImage: `url(http://localhost:3333/files/${agencyInfo.agency.background})` }}>
        <div className="desc_agencia">
          <h3>{agencyInfo.agency.name}</h3>
          <p>{agencyInfo.agency.description}</p>
        </div>
      </div>
      <h5 style={{ marginTop: 0 }} className="center">Intercâmbios</h5>
      <div id="ranking">
        {
          agencyInfo.agency.exchanges.map((exchange) => (
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
      </div>

      <h5 className="center">Avaliações</h5>
      <div id="rates">
        {
          rates.map((rate) => (
            <div key={rate.user.email}>
              <StarRatings
                rating={rate.grade.id}
                numberOfStars={5}
                starRatedColor="yellow"
                starDimension="30px"
              />
            </div>
          ))
        }
      </div>
      <h5 className="center">Endereços</h5>
      <div id="addresses">
        {
          addresses.map((address) => (
            <Address
              key={address.id}
              city={address.city}
              state={address.state}
              zipCode={address.zipCode}
              street={address.street}
              neighborhood={address.neighborhood}
              number={address.number}
              complement={address.complement}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Agency;
