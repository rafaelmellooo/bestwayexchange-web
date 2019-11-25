import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import M from 'materialize-css';
import api from '../../services/api';
import './styles.css';
import unavailable from '../../assets/unavailable.png';

function Search() {
  const [exchanges, setExchanges] = useState([]);
  const [exchangeTypes, setExchangeTypes] = useState([]);
  const [housingTypes, setHousingTypes] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadExchanges = async () => {
    setLoading(true);
    const { data } = await api.get('/exchanges', {
      params: {
        page,
        languages: [1, 2, 3],
      },
    });
    setLoading(false);

    setExchanges(data.docs);
  };

  const loadExchangeTypes = async () => {
    const { data } = await api.get('/exchange_types');

    setExchangeTypes(data);
  };

  const loadHousingTypes = async () => {
    const { data } = await api.get('/housing_types');

    setHousingTypes(data);
  };

  const loadLanguages = async () => {
    const { data } = await api.get('/languages');

    setLanguages(data);
  };

  const loadCountries = async () => {
    const { data } = await api.get('/countries');

    setCountries(data);
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
            <p>País</p>
            <div className="input-field">
              <select>
                <option value="" disabled selected>Choose your option</option>
                {
                  countries.map((country) => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  ))
                }
              </select>
            </div>
            <p>Tipo(s) de intercâmbio</p>
            {
              exchangeTypes.map((exchangeType) => (
                <div className="row" key={exchangeType.id}>
                  <label htmlFor={`eT${exchangeType.id}`}>
                    <input
                      id={`eT${exchangeType.id}`}
                      name="exchangeTypeId"
                      value={exchangeType.id}
                      type="checkbox"
                      className="filled-in"
                    />
                    <span>{exchangeType.name}</span>
                  </label>
                </div>
              ))
            }
            <p>Idioma(s)</p>
            {
              languages.map((language) => (
                <div className="row" key={language.id}>
                  <label htmlFor={`l${language.id}`}>
                    <input id={`l${language.id}`} name="languagesId" value={language.id} type="checkbox" className="filled-in" />
                    <span>{language.name}</span>
                  </label>
                </div>
              ))
            }
            <p>Tipo(s) de moradia</p>
            {
              housingTypes.map((housingType) => (
                <div className="row" key={housingType.id}>
                  <label htmlFor={`hT${housingType.id}`}>
                    <input id={`hT${housingType.id}`} name="housingTypesId" value={housingType.id} type="checkbox" className="filled-in" />
                    <span>{housingType.name}</span>
                  </label>
                </div>
              ))
            }
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
                        <img src={exchange.image ? exchange.image : unavailable} alt={exchange.name} style={{ width: '95%', marginTop: '12px' }} />
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
