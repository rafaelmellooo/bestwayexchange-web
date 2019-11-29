import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import StarRatings from 'react-star-ratings';
import api from '../../services/api';

import './styles.css';

function ExchangeDashboard({ match, history }) {
  const [loading, setLoading] = useState(true);
  const [exchangeInfo, setExchangeInfo] = useState({});
  const [rates, setRates] = useState([]);

  const loadExchangeInfo = async () => {
    setLoading(true);
    const { data } = await api.get(`/exchanges/${match.params.id}`);
    setExchangeInfo(data);
    setLoading(false);
  };

  const loadRates = async () => {
    const { data } = await api.get(`/exchanges/${match.params.id}/rates`);
    setRates(data.docs);
  };

  const handleClick = async () => {
    const { data } = await api.post('/chats', {
      exchangeId: match.params.id,
    });

    history.push(`/chats/${data}`);
  };

  useEffect(() => {
    loadExchangeInfo();
    loadRates();
  }, [match.params.id]);

  return loading ? (
    <BounceLoader
      color="#673ab7"
      sizeUnit="px"
      size="100"
    />
  ) : (
    <div>
      <div className="bc">
        <div className="center2">
          <div className="cd">
            <h5 className="ef">{exchangeInfo.name}</h5>
            <div className="de">
              <p>{exchangeInfo.exchangeType.name}</p>

              <a href="/" className="fg">{exchangeInfo.price}</a>
              <a href="/" className=" gh waves-effect waves-light btn right">
                <i className="material-icons left">star</i>
                Salvar
              </a>
              <div className="hi">
                <p className="ij">{exchangeInfo.description}</p>
              </div>

              <h5
                style={{
                  color: '#fff',
                  marginTop: '10px',
                  marginBottom: '10px',
                  height: 'auto',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  backgroundColor: '#1565c0',
                }}
              >
Detalhes

              </h5>

              <div className="center"><div className="mae_detalhes" /></div>
              <div className="todo featured">
                <div className="ab">País</div>
                <div className="ab fim">{exchangeInfo.city.country.name}</div>
                <div className="limpar" />
              </div>

              <div className="todo featured">
                <div className="ab">Cidade</div>
                <div className="ab fim">{exchangeInfo.city.name}</div>
                <div className="limpar" />
              </div>

              <div className="todo featured">
                <div className="ab">Duração</div>
                <div className="ab fim">
                  {`${exchangeInfo.time} mês/meses`}
                </div>
                <div className="limpar" />
              </div>

              <div className="todo featured">
                <div className="ab">Idioma</div>
                <div className="ab fim">
                  {
                    exchangeInfo.languages.map((language) => (
                      <span key={language.id}>{language.name}</span>
                    ))
                  }
                </div>
                <div className="limpar" />
              </div>

              <div className="todo featured">
                <div className="ab">Tipo</div>
                <div className="ab fim">{exchangeInfo.exchangeType.name}</div>
                <div className="limpar" />
              </div>

              <div className="todo featured">
                <div className="ab">Acomodação</div>
                <div className="ab fim">
                  {
                    exchangeInfo.housingTypes.map((housingType) => (
                      <span key={housingType.id}>{housingType.name}</span>
                    ))
                  }
                </div>
                <div className="limpar" />
              </div>
            </div>

            <div style={{ float: 'left' }}>
              <div className="image">
                <img src={`http://localhost:3333/files/${exchangeInfo.filename}`} alt="" />
              </div>

              <div>
                <div style={{ marginTop: '10px' }} className="center contact">
                  <button onClick={handleClick} type="button">
                    <i className="small material-icons">message</i>
                    <span>ENTRAR EM CONTATO</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="limpar" />
            <div className="binder">
              <h5 className="explanation">
                {`Como é o ${exchangeInfo.city.country.name}?`}
              </h5>
              <p className="description">{exchangeInfo.city.country.description}</p>
            </div>

            <div className="binder">
              <h5 className="explanation">
                {`O que é o tipo de intercâmbio '${exchangeInfo.exchangeType.name}'?`}
              </h5>
              <p className="description">{exchangeInfo.exchangeType.description}</p>
            </div>

            {
              exchangeInfo.housingTypes.map((housingType) => (
                <div key={housingType.id} className="binder">
                  <h5 className="explanation">
                    {`O que é a moradia '${housingType.name}'?`}
                  </h5>
                  <p className="description">{housingType.description}</p>
                </div>
              ))
            }

            <h5>Avaliações</h5>

            {
              rates.map((rate) => (
                <div key={rate.id} className="rating">
                  <h6 className="rating-title">{rate.users.name}</h6>
                  <div style={{ marginLeft: '10px' }}>
                    <StarRatings
                      rating={rate.avg}
                      starRatedColor="yellow"
                      starDimension="30px"
                      numberOfStars={5}
                    />
                  </div>
                  <p className="rating-body">{rate.comment}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExchangeDashboard;
