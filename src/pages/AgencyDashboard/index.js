import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function AgencyDashboard({ match }) {
  useEffect(() => {

  }, []);

  useEffect(() => {

  }, [match.params.id]);

  return (
    <main>
      <div className="main-container">
        <div className="settings-container">
          <div className="user-area">
            <br />

            <div className="area-img-user">
              <img src="" alt="" className="img-user" />
            </div>

            <div className="hi-user">
              <span>
Olá,
                {' '}
                <b id="vUsername">Rafael de Mello</b>
!
                {' '}
              </span>
            </div>

          </div>

          <br />

          <div className="topics-area">

            <div className="topic" id="exchanges-topic">
              <div className="icon-area">
                <i className="material-icons">card_travel</i>
              </div>
              <div className="topic-text-area">
                <span>Intercâmbios</span>
              </div>
            </div>

            <div className="topic" id="workers-topic">
              <div className="icon-area">
                <i className="material-icons">group</i>
              </div>
              <div className="topic-text-area">
                <span>Funcionários</span>
              </div>
            </div>


            <div className="topic" id="workers-topic">
              <div className="icon-area">
                <i className="material-icons">reports</i>
              </div>
              <div className="topic-text-are reports">
                <span>Relatórios</span>
              </div>
            </div>

            <div className="topic" id="datas-topic">
              <div className="icon-area">
                <i className="material-icons">business</i>
              </div>
              <div className="topic-text-area">
                <span>Dados da Agência</span>
              </div>
            </div>

          </div>

        </div>

        <div className="content-container">
          <div className="intercambio" style={{ display: 'none' }}>
            <div className="exchange-container">
              <div className="exchange clearMargin">
                <div className="exchange-portrait">
                  <img src="" alt="" className="exchange-picture" />
                </div>
                <div className="info-exchange-area">
                  <div className="info-exchange">
                    <div className="exchange-name">
                      <span>Au Pair pra Alemanhã</span>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col s4">
                        <label>País</label>
                        <input type="text" value="Alemanha" readOnly="true" />
                      </div>

                      <div className="col s4">
                        <label>Idioma</label>
                        <input type="text" value="Alemão" readOnly="true" />
                      </div>

                      <div className="col s4">
                        <label>Tipo de Intercâmbio</label>
                        <input type="text" value="Au Pair" readOnly="true" />
                      </div>

                    </div>

                    <div className="row">
                      <div className="col s4">
                        <label>Cidade</label>
                        <input type="text" value="Swigs" readOnly="true" />
                      </div>

                      <div className="col s4">
                        <label>Duração</label>
                        <input type="text" value="3 meses" readOnly="true" />
                      </div>

                      <div className="col s4">
                        <label>Valor</label>
                        <input type="text" value="R$3000" readOnly="true" />
                      </div>

                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Descrição</label>
                        <textarea readOnly="true" />
                      </div>
                    </div>
                  </div>

                  <div className="cls" />

                  <div className="btn-area">
                    <button type="button" className="btn"><i className="material-icons">settings</i></button>
                    <button type="button" className="btn"><i className="material-icons">delete</i></button>
                  </div>
                </div>
              </div>

              <div className="exchange">
                <div className="exchange-portrait">
                  <img src="" alt="" className="exchange-picture" />
                </div>

                <div className="info-exchange-area">
                  <div className="info-exchange">
                    <div className="exchange-name">
                      <span>Au Pair pra Alemanhã</span>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col s4">
                        <label>País</label>
                        <input type="text" value="Alemanha" readOnly="true" />
                      </div>

                      <div className="col s4">
                        <label>Idioma</label>
                        <input type="text" value="Alemão" readOnly="true" />
                      </div>

                      <div className="col s4">
                        <label>Tipo de Intercâmbio</label>
                        <input type="text" value="Au Pair" readOnly="true" />
                      </div>

                    </div>

                    <div className="row">
                      <div className="col s4">
                        <label>Cidade</label>
                        <input type="text" value="Swigs" readOnly="true" />
                      </div>

                      <div className="col s4">
                        <label>Duração</label>
                        <input type="text" value="3 meses" readOnly="true" />
                      </div>

                      <div className="col s4">
                        <label>Valor</label>
                        <input type="text" value="R$3000" readOnly="true" />
                      </div>

                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Descrição</label>
                        <textarea readOnly="true">
HUAHUHSIHAIDUIDHEDHUAIHDAEUIDHEAUIDHEAUIDHEAUIDHAEDUIAHDAEUIDAEH
                        </textarea>
                      </div>
                    </div>
                  </div>

                  <div className="cls" />

                  <div className="btn-area">
                    <button type="button" className="btn"><i className="material-icons">settings</i></button>
                    <button type="button" className="btn"><i className="material-icons">delete</i></button>
                  </div>
                </div>
              </div>

              <br />

            </div>
          </div>

          <div className="funcionario" style={{ display: 'none' }}>
            <div className="workers-container">
              <div className="area-btn-navigate" style={{ visibility: 'hidden' }}>
                <button type="button" className="btn navigate">
                  <i className="material-icons">navigate_before</i>
                </button>
              </div>
              <div className="worker">
                <div className="worker-portrait">
                  <img src="" alt="" className="worker-picture" />
                </div>

                <br />

                <div className="info-worker-area">
                  <div className="info-worker">
                    <div className="worker-name">
                      <span>Isabel Odízio de Oliveira</span>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col s12">
                        <label>Nome</label>
                        <input type="text" value="Isabel Odízio de Oliveira" readOnly="true" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Email</label>
                        <input type="email" value="isabelodizio@gmail.com" readOnly="true" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Data de Nascimento</label>
                        <input type="date" readOnly="true" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Senha</label>
                        <input type="text" value="0159783456" readOnly="true" />
                      </div>
                    </div>
                  </div>

                  <div className="btn-worker-area">
                    <button type="button" className="btn"><i className="material-icons">settings</i></button>
                    <button type="button" className="btn"><i className="material-icons">delete</i></button>
                  </div>

                </div>
              </div>
              <div className="worker">
                <div className="worker-portrait">
                  <img src="" alt="" className="worker-picture" />
                </div>

                <br />

                <div className="info-worker-area">
                  <div className="info-worker">
                    <div className="worker-name">
                      <span>Isabel Odízio de Oliveira </span>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col s12">
                        <label>Nome</label>
                        <input type="text" value="Isabel Odízio de Oliveira" readOnly="true" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Email</label>
                        <input type="email" value="isabelodizio@gmail.com" readOnly="true" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Data de Nascimento</label>
                        <input type="date" readOnly="true" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Senha</label>
                        <input type="text" value="0159783456" readOnly="true" />
                      </div>
                    </div>
                  </div>

                  <div className="btn-worker-area">
                    <button type="button" className="btn"><i className="material-icons">settings</i></button>
                    <button type="button" className="btn"><i className="material-icons">delete</i></button>
                  </div>

                </div>
              </div>
              <div className="worker">
                <div className="worker-portrait">
                  <img src="" alt="" className="worker-picture" />
                </div>

                <br />

                <div className="info-worker-area">
                  <div className="info-worker">
                    <div className="worker-name">
                      <span>Isabel Odízio de Oliveira</span>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col s12">
                        <label>Nome</label>
                        <input type="text" value="Isabel Odízio de Oliveira" readOnly="true" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Email</label>
                        <input type="email" value="isabelodizio@gmail.com" readOnly="true" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Data de Nascimento</label>
                        <input type="date" readOnly="true" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label>Senha</label>
                        <input type="text" value="0159783456" readOnly="true" />
                      </div>
                    </div>
                  </div>

                  <div className="btn-worker-area">
                    <button type="button" className="btn-small"><i className="material-icons">settings</i></button>
                    <button type="button" className="btn-small"><i className="material-icons">delete</i></button>
                  </div>

                </div>
              </div>

              <div className="area-btn-navigate right-side">
                <button type="button" className="btn navigate">
                  <i className="material-icons">navigate_next</i>
                </button>
              </div>
              <div className="cls" />
            </div>
          </div>

          <div className="company-settings">
            <div className="company-info-area">
              <div className="company-date">
                <div className="first-part">
                  <div className="row">
                    <div className="col s12">
                      <label>Nome</label>
                      <input type="text" value="Trivago Intercâmbios" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <label>Descrição</label>
                      <textarea />
                    </div>
                  </div>
                </div>

                <div className="second-part">
                  <div className="col s12">
                    <label>Logotipo</label>
                    <img src="" alt="" className="img-banner" />
                    <input type="file" className="btn" />
                  </div>

                </div>
              </div>

              <div className="address-line">
                <div className="row">
                  <div className="col s7">
                    <label>Endereço 1</label>
                    <input type="text" value="Rua Joaquim Teixeira de Carvalho" readOnly="true" />
                  </div>
                  <div className="col s4">
                    <label>CEP</label>
                    <input type="number" value="43839483" readOnly="true" />
                  </div>
                  <div className="col s1 btn-address-area">
                    <button type="button" className="btn-small"><i className="material-icons">delete</i></button>
                  </div>
                </div>
              </div>

              <div className="address-line">
                <div className="row">
                  <div className="col s7">
                    <label>Endereço 2</label>
                    <input type="text" value="Rua Joaquim Teixeira de Carvalho" readOnly="true" />
                  </div>
                  <div className="col s4">
                    <label>CEP</label>
                    <input type="number" value="11700460" readOnly="true" />
                  </div>
                  <div className="col s1 btn-address-area">
                    <button type="button" className="btn-small"><i className="material-icons">delete</i></button>
                  </div>
                </div>
              </div>

              <div className="add-address-area" style={{ display: 'none' }}>
                <div className="address-line">
                  <div className="row">
                    <div className="col s7">
                      <label>Endereço</label>
                      <input type="text" value="Digite o endereço..." id="txt-new-address" />
                    </div>
                    <div className="col s4">
                      <label>CEP</label>
                      <input type="number" value="" />
                    </div>
                    <div className="col s1 btn-address-area">
                      <button type="button" className="btn-small"><i className="material-icons">save</i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" className="btn-add-address-area">
                <div className="col s11">
                  <button type="button" className="btn add">
                    <i className="material-icons">add</i>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

AgencyDashboard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AgencyDashboard;
