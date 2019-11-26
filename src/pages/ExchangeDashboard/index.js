import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function ExchangeDashboard({ match }) {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '700px',
          backgroundImage: 'url()',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            backgroundColor: 'white', width: '80%', display: 'flex', justifyContent: 'center', position: 'relative', top: '100px', padding: '20px',
          }}
          >
            <div style={{
              backgroundColor: 'white', width: '60%', float: 'left', margin: '5px',
            }}
            >
              <p style={{ fontSize: '30px' }}> Inglês em San Diego + Tour Califórnia </p>
              <p>Intercâmbio Teen</p>

              <a href="/" style={{ fontSize: '17px' }}>
Entrada +
                {' '}
                <br />
                {' '}
12x de R$506,90
                {' '}
                <br />
                {' '}
Negociável
              </a>
              <a href="/" style={{ position: 'relative', top: '-12px' }} className="waves-effect waves-light btn right">
                <i className="material-icons left">star</i>
Salvar
              </a>
              <div style=" padding-top: 15px;">
                <p style="margin-top: 5px;">Duas semanas de curso de Inglês na escola Converse, com acomodação e refeições inclusas e passeios para San Diego Zoo, Fashion Valley, Shopping e muito mais.</p>
              </div>

              <h5 style="color:#64b5f6; font-family: 'Montserrat', sans-serif; ">Detalhes</h5>

              <div style="display: flex; justify-content: center;"><div style="height: 1px; width: 99.8%; background-color: #bdbdbd  " /></div>
              <div style="width: 100%; ">
                <div style="float: left; width: 50%; margin-top: 5px; margin-bottom: 5px;">Pais</div>
                <div style="float: left; width: 50%; margin-top: 5px; margin-bottom: 5px; display: flex; justify-content: flex-end;">Estados Unidos</div>
              </div>

              <div style="width: 100%; ">
                <div style="float: left; width: 50%;  margin-top: 5px; margin-bottom: 5px; ">Cidade</div>
                <div style="float: left; width: 50%;   margin-top: 5px; margin-bottom: 5px; display: flex; justify-content: flex-end;">Los Angeles</div>
              </div>

              <div style="width: 100%; background-color: blue;">
                <div style="float: left; width: 50%;  margin-top: 5px; margin-bottom: 5px;">Escola</div>
                <div style="float: left; width: 50%;  margin-top: 5px; margin-bottom: 5px; display: flex; justify-content: flex-end;">FLS</div>
              </div>

              <div style="width: 100%; background-color: green;">
                <div style="float: left; width: 50%;  margin-top: 5px; margin-bottom: 5px;">Duração</div>
                <div style="float: left; width: 50%;  margin-top: 5px; margin-bottom: 5px; display: flex; justify-content: flex-end;">3 Semanas</div>
              </div>

              <div style="width: 100%; background-color: purple;">
                <div style="float: left; width: 50%;  margin-top: 5px; margin-bottom: 5px;">Idioma</div>
                <div style="float: left; width: 50%;  margin-top: 5px; margin-bottom: 5px; display: flex; justify-content: flex-end;">Inglês</div>
              </div>

              <div style="width: 100%; background-color: grey;">
                <div style="float: left; width: 50%;  margin-top: 5px; margin-bottom: 5px;">Tipo</div>
                <div style="float: left; width: 50%;  margin-top: 5px; margin-bottom: 5px; display: flex; justify-content: flex-end;">Intercâmbio Teen</div>
              </div>

              <div style="width: 100%; background-color: aqua;">
                <div style="float: left; width: 50%;  margin-top: 5px; margin-bottom: 5px;">Acomodação</div>
                <div style="float: left; width: 50%; margin-top: 5px; margin-bottom: 5px; display: flex; justify-content: flex-end;">Casa de Familia</div>
              </div>
            </div>
            <div style="background-color: red; width: 50%; height: 100px; float: left; margin: 5px;">
              <div className="slider">
                <ul className="slides">
                  <li>
                    <img src="img/san1.jpg" />
                    <div className="caption center-align" />
                  </li>
                  <li>
                    <img src="img/san2.jpg" />
                    <div className="caption left-align" />
                  </li>
                  <li>
                    <img src="img/san3.jpg" />
                    <div className="caption right-align" />
                  </li>
                  <li>
                    <img src="img/san4.jpg" />
                    <div className="caption center-align" />
                  </li>
                </ul>
              </div>

              <div style="width: 100%; height: 100px;">
                <div style="display: flex; justify-content: center;">
                  {' '}
                  <a className="waves-effect waves-light btn">Entre em contato</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      {' '}
      <div style="clear: both;" />
      <div style="width: 100%;">

        <h4 style="display: flex; justify-content: center; color: #311b92; ">
                      Avaliações
        </h4>

        <div style="width: 100%; margin: 7px; display: flex; justify-content: center;">


          <div style="width: 300px; height: 150px; float: left; margin: 5px; padding: 10px; border-radius: 8px; border-style: solid; border-width: 1px; border-color: orange; font-family:  'Montserrat', sans-serif; color: grey ">
            <p style="color: orange !important;">
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star</i>
            </p>

            <p>Fiz um intercambio nessa agência, Amei!!!</p>

            <p><b>Vanessa Alves</b></p>

          </div>
          <div style="width: 300px; height: 150px; float: left;  margin: 5px; padding: 10px; border-radius: 8px; border-style: solid; border-width: 1px; border-color: orange; font-family:  'Montserrat', sans-serif; color: grey; ">
            <p style="color: orange !important;">
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star_border</i>
              {' '}
              <i className="material-icons">star_border</i>
              {' '}
              <i className="material-icons">star_border</i>
            </p>

            <p>Gostei do intercâmbio mas é meio sem graça!!</p>

            <p><b> Sabrina Silva</b></p>

          </div>
          <div style="width: 300px; height: 150px; float: left;  margin: 5px; padding: 10px; border-radius: 8px; border-style: solid; border-width: 1px; border-color: orange; font-family:  'Montserrat', sans-serif; color: grey;">

            <p style="color: orange !important;">
              <i className="material-icons">star_border</i>
              {' '}
              <i className="material-icons">star_border</i>
              {' '}
              <i className="material-icons">star_border</i>
              {' '}
              <i className="material-icons">star_border</i>
              {' '}
              <i className="material-icons">star_border</i>
            </p>

            <p>Odiei o intercambio, nunca mais faço por essa Agencia!!!</p>

            <p><b> Amanda Nunes</b></p>


          </div>
          <div style="width: 300px; height: 150px; float: left;  margin: 5px; padding: 10px; border-radius: 8px; border-style: solid; border-width: 1px; border-color: orange; font-family:  'Montserrat', sans-serif; color: grey; ">
            <p style="color: orange !important;">
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star_border</i>
            </p>

            <p>Amei muito o intercambio, menos o tipo de acomodação oferecido!</p>

            <p><b> Victor Santos</b></p>

          </div>
          <div style="width: 300px; height: 150px; float: left; margin-top: 5px; padding: 10px; border-radius: 8px; border-style: solid; border-width: 1px; border-color: orange; font-family:  'Montserrat', sans-serif; color: grey; ">


            <p style="color: orange !important;">
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star</i>
              {' '}
              <i className="material-icons">star_border</i>
              {' '}
              <i className="material-icons">star_border</i>
            </p>

            <p>Poderia ser melhor, mas gostei!</p>

            <p><b> Gustavo Santos</b></p>

          </div>
        </div>
        <div style="clear: both; margin-top: 20px;" />

      </div>

    </div>
  );
}

ExchangeDashboard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ExchangeDashboard;
