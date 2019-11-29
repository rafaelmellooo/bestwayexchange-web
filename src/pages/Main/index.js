import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import M from 'materialize-css';
import Exchange from '../../components/Exchange';
import api from '../../services/api';
import './styles.css';
import paris from '../../assets/paris.jpg';

function Main() {
  const [loading, setLoading] = useState(true);
  const [ranking, setRanking] = useState([]);

  const loadRanking = async () => {
    setLoading(true);
    const { data } = await api.get('/ranking?limit=3');
    setRanking(data);
    setLoading(false);
  };

  useEffect(() => {
    // Auto initialize all the things!
    M.AutoInit();

    loadRanking();
  }, []);

  return (
    <>
      <div className="parallax-container">
        <div className="parallax"><img src={paris} alt="" width="50%;" /></div>
      </div>

      <div>
        <h5 className="title center" style={{ fontSize: '22px', marginTop: 0 }}>Ranking</h5>
      </div>

      <div className="flex" style={{ display: 'flex', justifyContent: 'center' }}>
        <div id="ranking">
          {
            loading ? (
              <BounceLoader
                color="#673ab7"
                sizeUnit="px"
                size="100"
              />
            ) : (
              ranking.map(({ exchangeId, exchanges }) => (
                <Exchange
                  key={exchangeId}
                  id={exchangeId}
                  name={exchanges.name}
                  filename={exchanges.filename}
                  exchangeType={exchanges.exchangeType.name}
                  country={exchanges.city.country.name}
                  city={exchanges.city.name}
                />
              ))
            )
          }
        </div>
      </div>

      <div>
        <h5 className="title center" style={{ fontSize: '22px' }}>Viva um intercâmbio</h5>
      </div>

      <div className="principal_div_filter">
        <div className="sub_filter">
          <div className="filter">
            <div
              className="flip-container"
            >
              <div className="flipper">
                <div className="front p_div_filter exchange" style={{ backgroundImage: `url(${require('../../assets/thumbnails/1.jpg')})` }}>
                  <p>Estudo de Idiomas</p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Estudo de Idiomas</b>
                      <br />
                      Essa modalidade de intercâmbio tem como
                      objetivo o aprendizado de uma nova língua.
                      Tanto pode ser feia por pessoas que têm um
                      nível inicial na língua estrangeira quanto por
                      pessoas que já possuem um nível mais avançados
                      e desejam evoluir ainda mais.
                    </p>
                  </div>
                  <div className="flex botao">
                    <Link to="/search?exchangeType=1" className="waves-effect waves-light btn">Eu quero</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter">
            <div
              className="flip-container"
            >
              <div className="flipper">
                <div className="front p_div_filter exchange" style={{ backgroundImage: `url(${require('../../assets/thumbnails/2.jpg')})` }}>
                  <p>Au Pair</p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Au Pair</b>
                      <br />
                      Cuidar de crianças, ser pago por isso e se
                      manter nos Estados Unidos com o que recebe da
                      família contratante é o objetivo de quem deseja
                      fazer intercâmbio do tipo Au Pair. Com esse tipo
                      de programa é possível passar cerca de uma ano
                      nos Estados Unidos. Além da remuneração, a
                      família contratante ainda paga um curso para a
                      babá.
                    </p>
                  </div>
                  <div className="flex botao">
                    <Link to="/search?exchangeType=2" clLinkssName="waves-effect waves-light btn">Eu quero</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub_filter">
          <div className="filter">
            <div
              className="flip-container"
            >
              <div className="flipper">
                <div className="front p_div_filter exchange" style={{ backgroundImage: `url(${require('../../assets/thumbnails/3.jpg')})` }}>
                  <p>Graduação</p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Graduação</b>
                      <br />
                      O estudante pode tanto cursar a graduação
                      inteira em instituições estrangeiras quanto
                      um semestre ou período específico.
                    </p>
                  </div>
                  <div className="flex botao">
                    <Link to="/search?exchangeType=3" className="waves-effect waves-light btn">Eu quero</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter">
            <div
              className="flip-container"
            >
              <div className="flipper">
                <div className="front p_div_filter exchange" style={{ backgroundImage: `url(${require('../../assets/thumbnails/4.jpg')})` }}>
                  <p>Especialização profissional</p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Especialização profissional</b>
                      <br />
                      É possível fazer uma especialização
                      profissional fora do país, como um mestrado,
                      doutorado ou algum curso que ofereça capacitação
                      específica para um aspecto da área de conhecimento
                      estudada.
                    </p>
                  </div>
                  <div className="flex botao">
                    <Link to="/search?exchangeType=4" className="waves-effect waves-light btn">Eu quero</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub_filter">
          <div className="filter">
            <div
              className="flip-container"
            >
              <div className="flipper">
                <div className="front p_div_filter exchange" style={{ backgroundImage: `url(${require('../../assets/thumbnails/5.jpg')})` }}>
                  <p>Work and Travel</p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Work and Travel</b>
                      <br />
                      Estudar e trabalhar também é um dos tipos de
                      intercâmbio possíveis. Nesse caso, não necessariamente
                      a viagem estará vinculada à uma instituição de ensino.
                      A pessoa irá para outro país através de programas de
                      trabalho que trarão mais experiência para o currículo,
                      aprendizado da língua estrangeira e nova vivências interpessoais.
                    </p>
                  </div>
                  <div className="flex botao">
                    <Link href="/search?exchangeType=5" className="waves-effect waves-light btn">Eu quero</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter">
            <div
              className="flip-container"
            >
              <div className="flipper">
                <div className="front p_div_filter exchange" style={{ backgroundImage: `url(${require('../../assets/thumbnails/6.jpg')})` }}>
                  <p>Voluntariado</p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Voluntariado</b>
                      <br />
                      O voluntariado é considerado uma das formas mais
                      generosas de intercâmbio. Nessa modalidade a pessoa
                      viajar para trabalhar voluntariamente em uma ONG ou
                      outro tipo de organização que realiza trabalhos
                      sociais. A partir das vivências vem o aprendizado,
                      assim como no Work and travel, a melhora nas
                      habilidades de fala e compreensão da língua é
                      desenvolvida através do contato com outras pessoas.
                    </p>
                  </div>
                  <div className="flex botao">
                    <Link to="/search?exchangeType=6" className="waves-effect waves-light btn">Eu quero</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
