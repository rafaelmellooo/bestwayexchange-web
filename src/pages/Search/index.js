import React, { useState, useEffect } from 'react';
import { Form, Choice } from '@rocketseat/unform';
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

    // data.map((language) => {
    //   setLanguages(language.push());
    // });

    // global.console.log(data);

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
          <Form
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
            <br />
            <p>Sua idade</p>
            <p>
              <label htmlFor="teenager">
                <input id="teenager" type="checkbox" className="filled-in" />
                <span>12-17</span>
              </label>
            </p>
            {/* <Choice
              name="languages"
              option={languages}
              multiple
            /> */}
            <p>
              <label htmlFor="adult">
                <input type="checkbox" className="filled-in" />
                <span>18+</span>
              </label>
            </p>
            <br />
            <p>Tipo de intercambio</p>
            <p>
              <label htmlFor="work-experience">
                <input id="work-experience" type="checkbox" className="filled-in" />
                <span>Work Experience</span>
              </label>
            </p>
            <p>
              <label htmlFor="idiom-courses">
                <input id="idiom-courses" type="checkbox" className="filled-in" />
                <span>Curso de idiomas</span>
              </label>
            </p>
            <p>
              <label htmlFor="teen-vacation">
                <input id="teen-vacation" type="checkbox" className="filled-in" />
                <span>Ferias teen</span>
              </label>
            </p>
            <p>
              <label htmlFor="tecnical-courses">
                <input id="tecnical-courses" type="checkbox" className="filled-in" />
                <span>Cursos técnicos</span>
              </label>
            </p>
            <p>
              <label htmlFor="study-and-internship">
                <input id="study-and-internship" type="checkbox" className="filled-in" />
                <span>Estudo&Estágio</span>
              </label>
            </p>
            <br />
            <p>Linguas faladas no país</p>
            <p>
              <label htmlFor="english">
                <input id="english" type="checkbox" className="filled-in" />
                <span>Inglês</span>
              </label>
            </p>
            <p>
              <label htmlFor="spanish">
                <input id="spanish" type="checkbox" className="filled-in" />
                <span>Espanhol</span>
              </label>
            </p>
            <p>
              <label htmlFor="french">
                <input id="french" type="checkbox" className="filled-in" />
                <span>Francês</span>
              </label>
            </p>
            <p>
              <label htmlFor="chinese">
                <input id="chinese" type="checkbox" className="filled-in" />
                <span>Chinês</span>
              </label>
            </p>
            <p>
              <label htmlFor="japanese">
                <input id="japanese" type="checkbox" className="filled-in" />
                <span>Japonês</span>
              </label>
            </p>
            <p>
              <label htmlFor="german">
                <input id="german" type="checkbox" className="filled-in" />
                <span>Alemão</span>
              </label>
            </p>
            <p>
              <label htmlFor="netherland">
                <input id="netherland" type="checkbox" className="filled-in" />
                <span>Holandês</span>
              </label>
            </p>
            <p>
              <label htmlFor="italian">
                <input id="italian" type="checkbox" className="filled-in" />
                <span>Italiano</span>
              </label>
            </p>
            <p>
              <label htmlFor="others">
                <input id="others" type="checkbox" className="filled-in" />
                <span>Outros</span>
              </label>
            </p>
            <br />
            <p>Moradia</p>
            <p>
              <label htmlFor="host-family">
                <input id="host-family" type="checkbox" className="filled-in" />
                <span>Host-Family</span>
              </label>
            </p>
            <p>
              <label htmlFor="student-residence">
                <input id="student-residence" type="checkbox" className="filled-in" />
                <span>Residência Estudantil</span>
              </label>
            </p>
            <p>
              <label htmlFor="hostel">
                <input id="hostel" type="checkbox" className="filled-in" />
                <span>Hostel</span>
              </label>
            </p>
            <br />
          </Form>

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
