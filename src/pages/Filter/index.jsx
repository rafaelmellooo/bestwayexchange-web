import React, { useEffect } from 'react';
import './styles.css';
import M from 'materialize-css';
import newYork from '../../assets/countries/new_york.jpg';

export default function Filter() {
  useEffect(() => {
    // Auto initialize all the things!
    M.AutoInit();
  }, []);

  return (
    <>
      {/* <div>
        <div class="right">
        <p>Acesse ou crie sua conta</p>
      </div> */}

      <div style={{
        display: 'flex', justifyContent: 'center', backgroundColor: 'grey', height: '5000px', width: '100%',
      }}
      >
        <div style={{
          backgroundColor: 'purple', height: '5000px', width: '90%', paddingTop: '55px',
        }}
        >
          <div
            className="font_filters"
            style={{
              backgroundColor: 'white', width: '20%', float: 'left', paddingLeft: '2%',
            }}
          >
            <div style={{ padding: '1%' }}>
              <h5>
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
          </div>
          <div className="intercambios_bigdiv">
            <div style={{ marginTop: '55px' }} className="intercambios">
              <div style={{ width: '100%', height: '100%' }}>
                <div style={{
                  width: '47%', height: '100%', backgroundColor: 'black', float: 'left', padding: 0,
                }}
                >
                  <figure style={{ margin: 0, marginLeft: 0 }}>
                    <img src={newYork} alt="" style={{ width: '95%', marginTop: '12px' }} />
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
                    <p style={{ fontFamily: "'Noto Sans KR', sansSerif", fontSize: '20px' }}>Ingles em Nova York</p>
                    <p style={{ fontSize: '18px', marginTop: '13px' }}> Três semanas de curso de inglês na escola Rennert, com acomodação e refeições inclusas e passeios para a Estátua da Liberdade, Times Square e muito mais !</p>
                  </div>
                </div>
              </div>

              {/* <div style="float: left;">
                <img style="height: 210px; padding: 7px;" src="" />
              </div>
              <div style="float: left; width: 64.86%; display: flex; justify-content: center; ;">
              </div>
              <div style="background-color: white; font-family: sans-serif; font-size: 17px;">
                <div style="height: 40px;"></div>
              </div>
              <div style="clear: both;"></div>
              <a class="waves-effect waves-light btn left" style="margin: 7px;">Agência Y</a> */}

            </div>
          </div>
          <div className="intercambios_bigdiv">
            <div className="intercambios" />
          </div>

          <div style={{
            height: '5000px', width: '20%', float: 'left', backgroundColor: 'white', opacity: 0.0,
          }}
          />

          <div className="intercambios_bigdiv">
            <div className="intercambios" />
          </div>
        </div>
      </div>

      {/* <div class="row">
        <div style="background-color: white; border-radius: 9px;" class="col s2 grey lighten-4">
          <h5> Filtrar Resultados</h5>
          <br />
          <p>Sua idade</p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>12-17</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>18+</span>
            </label>
          </p>
          <br />
          <p>Tipo de intercambio</p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Work Experience</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Curso de idiomas</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Ferias teen</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Cursos técnicos</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Estudo&Estágio</span>
            </label>
          </p>
          <br />
          <p>Linguas faladas no país</p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Inglês</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Espanhol</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Françês</span>
            </label>
          </p>
              <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Chinês</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Japonês</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Alemão</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Holandês</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Italiano</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Outros</span>
            </label>
          </p>
          <br />
          <p>Moradia</p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Host-Family</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Residência Estudantil</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Hostel</span>
            </label>
          </p>
          <br />
        </div>

        <div style="background-color: pink;" class="col s9">
         <div></div>
         <div></div>
         <div></div>
        </div>

      </div> */}
    </>
  );
}
