import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import './styles.css';

function NewRate() {
  return (
    <main>
      <div className="main-container">
        <h5>Avaliações</h5>
        <h6>Custo-Benefício</h6>
        <div className="first-rate-area rate-space">
          <form>
            <div className="row">
              <div className="col s1" />
              <div className="col s2">
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>1</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>2</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>3</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>4</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>5</span>
                  </label>
                </p>
              </div>
            </div>
          </form>
        </div>

        <h6>Experiência de Intercâmbio</h6>
        <div className="second-rate-area rate-space">
          <form>
            <div className="row">
              <div className="col s1" />
              <div className="col s2">
                <p>
                  <label>
                    <input name="group2" type="radio" />
                    <span>1</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group2" type="radio" />
                    <span>2</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group2" type="radio" />
                    <span>3</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group2" type="radio" />
                    <span>4</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group2" type="radio" />
                    <span>5</span>
                  </label>
                </p>
              </div>
            </div>
          </form>
        </div>

        <h6>Atendimento</h6>
        <div className="third-rate-area rate-space">
          <form>
            <div className="row">
              <div className="col s1" />
              <div className="col s2">
                <p>
                  <label>
                    <input name="group3" type="radio" />
                    <span>1</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group3" type="radio" />
                    <span>2</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group3" type="radio" />
                    <span>3</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group3" type="radio" />
                    <span>4</span>
                  </label>
                </p>
              </div>
              <div className="col s2">
                <p>
                  <label>
                    <input name="group3" type="radio" />
                    <span>5</span>
                  </label>
                </p>
              </div>
            </div>
          </form>
        </div>

        <h6>Descrição da Avaliação</h6>
        <div className="description-area">
          <textarea />
        </div>

        <div className="area-button">
          <button type="submit" className="btn deep-purple darken-2">Finalizar</button>
        </div>

      </div>
    </main>
  );
}

export default NewRate;
