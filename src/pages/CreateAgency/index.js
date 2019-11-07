import React from 'react';

import './styles.css';

function CreateAgency() {
  return (
    <main>
      <div style={{ marginTop: '50px' }} />
      <div id="mainContainer">
        <h5>Dados iniciais</h5>
        <form id="frmRegister" onSubmit="return false">
          <div id="agencyContainer1" className="forms">
            <br />
            <div className="row">
              <label htmlFor="name">
                <span>Nome</span>
                <input type="text" id="name" />
              </label>
            </div>
            <div className="row" style={{ marginTop: '5px' }}>
              <label htmlFor="description">
                <span>Descrição</span>
                <input id="description" type="text" />
              </label>
            </div>
          </div>
          <h5>Localização</h5>
          <div id="agencyContainer2" className="forms">
            <div id="aContainer">
              <div className="row">
                <div className="col s3">
                  <label htmlFor="zipCode">
                    <span>CEP</span>
                    <input type="number" id="zipCode" />
                  </label>
                </div>
                <div className="col s9">
                  <label htmlFor="street">
                    <span>Rua</span>
                    <input type="text" id="street" />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col s6">
                  <label htmlFor="neighborhood">
                    <span>Bairro</span>
                    <input type="text" id="neighborhood" />
                  </label>
                </div>

                <div className="col s6">
                  <label htmlFor="city">
                    <span>Cidade</span>
                    <input type="text" id="city" />
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col s4">
                  <label htmlFor="state">
                    <span>Estado</span>
                    <input type="text" id="state" />
                  </label>
                </div>

                <div className="col s4">
                  <label htmlFor="number">
                    <span>Número</span>
                    <input type="text" id="number" />
                  </label>
                </div>
                <div className="col s4">
                  <label htmlFor="complement">
                    <span>Complemento</span>
                    <input type="text" id="complement" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <h5>Administrador</h5>
          <div id="agencyContainer3" className="forms">
            <br />
            <div className="row">
              <div className="col s8">
                <label htmlFor="name" className="active">
                  <span>Nome</span>
                  <input id="name" type="text" className="validate" />
                </label>
              </div>
              <div className="col s4">
                <label htmlFor="birthDate" className="active">
                  <span>Data de nascimento</span>
                  <input id="birthDate" type="date" className="validate" />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <label htmlFor="email" className="active">
                  <span>E-mail</span>
                  <input id="email" type="email" className="validate" />
                </label>
              </div>
              <div className="col s6">
                <label htmlFor="confirm-email" className="active">
                  <span>Confirmar e-mail</span>
                  <input id="confirm-email" type="email" className="validate" />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <label htmlFor="password" className="active">
                  <span>Senha</span>
                  <input id="password" type="password" className="validate" />
                </label>
              </div>
              <div className="col s6">
                <label htmlFor="confirm-password" className="active">
                  <span>Confirmar senha</span>
                  <input id="confirm-password" type="password" className="validate" />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <input
                  type="submit"
                  value="Finalizar"
                  className="btn deep-purple darken-2"
                  style={{ marginLeft: '595px' }}
                />

              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default CreateAgency;
