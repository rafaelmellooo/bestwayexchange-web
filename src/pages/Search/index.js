import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { BounceLoader } from 'react-spinners';
import M from 'materialize-css';
import api from '../../services/api';
import './styles.css';

const orders = [
  {
    value: 'price',
    label: 'Menor preço'
  },
  {
    value: 'createdAt',
    label: 'Mais recentes'
  },
  {
    value: 'time',
    label: 'Menor duração'
  }
];

function Search() {
  const [exchanges, setExchanges] = useState([]);
  const [exchangeTypes, setExchangeTypes] = useState([]);
  const [housingTypes, setHousingTypes] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedExchangeType, setSelectedExchangeType] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedHousingTypes, setSelectedHousingTypes] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(orders[0].value);

  const loadExchanges = async () => {
    setLoading(true);
    const { data } = await api.get('/exchanges', {
      params: {
        page,
        languages: selectedLanguages.join(','),
        exchangeTypes: selectedExchangeType,
        city: selectedCities.join(','),
        housingTypes: selectedHousingTypes.join(','),
        order: selectedOrder
      },
    });
    setLoading(false);

    setExchanges(data.docs);
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
    // Auto initialize all the things!
    M.AutoInit();

    loadExchanges();
    loadExchangeTypes();
    loadHousingTypes();
    loadLanguages();
    loadCountries();
  }, []);

  useEffect(() => {
    loadExchanges();
  }, [selectedLanguages]);

  useEffect(() => {
    loadExchanges();
  }, [selectedExchangeType]);

  useEffect(() => {
    loadExchanges();
  }, [selectedCities]);

  useEffect(() => {
    loadExchanges();
  }, [selectedHousingTypes]);

  useEffect(() => {
    loadExchanges();
  }, [selectedOrder]);

  useEffect(() => {
    loadExchanges();
  }, [page]);

  return (
    <>
      <div style={{
        display: 'flex', justifyContent: 'center', backgroundColor: '#eeeeee', width: '100%',
      }}
      >
        <div style={{
          backgroundColor: '#eeeeee', width: '90%', paddingTop: '55px',
        }}
        >
          <div
            className="font_filters"
            style={{
              height: '100%', backgroundColor: '#eeeeee', width: '20%', float: 'left', paddingLeft: '2%',
            }}
          >
            <div style={{ padding: '1%' }}>
              <h5 style={{ height: 'auto' }}>
                Filtrar Resultados
                <i className="material-icons">filter_list</i>
              </h5>
            </div>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Ordenar por</p>
            <Select
              isSearchable
              name="order"
              defaultValue={orders[0]}
              options={orders}
              onChange={({ value }) => setSelectedOrder(value)}
            />
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>País</p>
            <Select
              isSearchable
              name="country"
              isLoading={!countries}
              options={countries}
              onChange={({ value }) => loadCities(value)}
            />
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
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Tipo de Intercâmbio</p>
            <Select
              isSearchable
              isClearable
              name="exchangeType"
              isLoading={!exchangeTypes}
              options={exchangeTypes}
              onChange={({ value }) => setSelectedExchangeType(value)}
            />
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

          <BounceLoader
            color="#673ab7"
            loading={loading}
            sizeUnit="px"
            size="100"
            css={{ marginLeft: '750px' }}
          />

          {
            exchanges.map((exchange) => (
              <div key={exchange.id} className="intercambios_bigdiv" style={{ marginTop: '20px' }}>
                <div style={{ borderRadius: '7px' }} className="intercambios">
                  <div style={{ width: '100%', height: '100%' }}>
                    <div style={{
                      width: '47%', height: '100%', float: 'left', padding: 0,
                    }}
                    >
                      <figure style={{ margin: 0, marginLeft: 0 }}>
                        <img src={exchange.filename ? `http://localhost:3333/files/${exchange.filename}` : ''} alt={exchange.name} style={{ width: '95%', marginTop: '12px' }} />
                      </figure>
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%', height: '100%',
                    }}
                    >
                      <div style={{
                        width: '100%', height: '100%', float: 'left', textAlign: 'center',
                      }}
                      >
                        <p style={{ fontFamily: "'Noto Sans KR', sansSerif", fontSize: '20px' }}>{exchange.name}</p>
                        <p style={{ fontSize: '18px', marginTop: '13px' }}>{exchange.description}</p>
                        <a href="/" className="waves-effect waves-light btn right">EU QUERO</a>
                        <div className="card-action">
                          <a
                            href="/"
                            style={{
                              textAlign: 'left', marginLeft: '5px',
                            }}
                            className="left"
                          >
                            {exchange.price}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

          <div style={{
            marginTop: '10px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'center',
          }}
          >
            <button onClick={prevPage} className="btn" type="button">Anterior</button>
            <button onClick={nextPage} style={{ marginLeft: '10px' }} className="btn" type="button">Próximo</button>
          </div>
        </div>
      </div>


    </>
  );
}

export default Search;
