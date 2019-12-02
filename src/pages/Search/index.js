import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import queryString from 'query-string';
import { BounceLoader } from 'react-spinners';
import Exchange from '../../components/Exchange';
import api from '../../services/api';
import './styles.css';

const orders = [
  {
    value: 'price',
    label: 'Menor preço',
  },
  {
    value: 'createdAt',
    label: 'Mais recentes',
  },
  {
    value: 'time',
    label: 'Menor duração',
  },
];

function Search({ location }) {
  const [exchanges, setExchanges] = useState([]);
  const [exchangeTypes, setExchangeTypes] = useState([]);
  const [housingTypes, setHousingTypes] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedExchangeTypes, setSelectedExchangeTypes] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedHousingTypes, setSelectedHousingTypes] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(orders[0].value);

  const loadExchanges = async () => {
    setLoading(true);
    const { data } = await api.get('/exchanges', {
      params: {
        page,
        languages: selectedLanguages.join(','),
        exchangeTypes: selectedExchangeTypes.join(','),
        cities: selectedCities.join(','),
        housingTypes: selectedHousingTypes.join(','),
        order: selectedOrder,
      },
    });
    setExchanges(data.docs);
    setLoading(false);
  };

  const loadExchangeTypes = async () => {
    const { data } = await api.get('/exchange_types');

    setExchangeTypes(data.map(({ id, name }) => ({ value: id, label: name })));
  };

  const loadHousingTypes = async () => {
    const { data } = await api.get('/housing_types');

    setHousingTypes(data.map(({ id, name }) => ({ value: id, label: name })));
  };

  const loadLanguages = async () => {
    const { data } = await api.get('/languages');

    setLanguages(data.map(({ id, name }) => ({ value: id, label: name })));
  };

  const loadCountries = async () => {
    const { data } = await api.get('/countries');

    setCountries(data.map(({ id, name }) => ({ value: id, label: name })));
  };

  const loadCities = async (value) => {
    const { data } = await api.get(`/countries/${value}/cities`);

    setCities(data.map(({ id, name }) => ({ value: id, label: name })));
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    loadExchanges();
    loadExchangeTypes();
    loadHousingTypes();
    loadLanguages();
    loadCountries();

    const { exchangeType } = queryString.parse(location.search);

    setSelectedExchangeTypes([...selectedExchangeTypes, exchangeType]);
  }, []);

  useEffect(() => {
    loadExchanges();
  }, [
    selectedLanguages,
    selectedExchangeTypes,
    selectedCities,
    selectedHousingTypes,
    selectedOrder,
    page,
  ]);

  return (
    <div>
      <h5
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        Filtrar Resultados
        <i style={{ marginLeft: '10px' }} className="small material-icons">filter_list</i>
      </h5>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: '20px',
          padding: '20px',
        }}
      >
        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Ordenar por</p>
          <Select
            isSearchable
            name="order"
            defaultValue={orders[0]}
            options={orders}
            onChange={({ value }) => setSelectedOrder(value)}
          />
        </div>

        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>País</p>
          <Select
            isSearchable
            name="country"
            isLoading={!countries}
            options={countries}
            onChange={({ value }) => loadCities(value)}
          />
        </div>

        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Cidade(s)</p>
          <Select
            isSearchable
            name="cities"
            isClearable
            isMulti
            isLoading={!cities}
            options={cities}
            onChange={(event) => setSelectedCities(event.map(({ value }) => value))}
          />
        </div>

        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Tipo de Intercâmbio</p>
          <Select
            isSearchable
            isClearable
            name="exchangeType"
            isLoading={!exchangeTypes}
            options={exchangeTypes}
            onChange={(event) => setSelectedExchangeTypes(event.map(({ value }) => value))}
          />
        </div>

        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Idioma(s)</p>
          <Select
            isSearchable
            isClearable
            isMulti
            name="languages"
            isLoading={!languages}
            options={languages}
            onChange={(event) => setSelectedLanguages(event.map(({ value }) => value))}
          />
        </div>

        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Tipos de Moradia</p>
          <Select
            isSearchable
            isClearable
            isMulti
            name="housingTypes"
            isLoading={!housingTypes}
            options={housingTypes}
            onChange={(event) => setSelectedHousingTypes(event.map(({ value }) => value))}
          />
        </div>
      </div>

      <h5
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        Resultados
      </h5>
      {
        loading ? (
          <BounceLoader
            color="#673ab7"
            sizeUnit="px"
            size="100"
            loading={loading}
            css={{ marginLeft: '10px', alignSelf: 'center' }}
          />
        ) : (
          <article id="exchanges">
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
        )
      }

      <article
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button style={{ backgroundColor: '#fc4503' }} onClick={prevPage} className="btn" type="button">Anterior</button>
        <button style={{ backgroundColor: '#18a81a' }} onClick={nextPage} className="btn" type="button">Próximo</button>
      </article>
    </div>
  );
}

export default Search;
