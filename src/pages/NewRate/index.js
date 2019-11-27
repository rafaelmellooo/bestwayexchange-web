import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api';

import './styles.css';

const options = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

const schema = Yup.object().shape({
  description: Yup.string()
    .required('A descrição não deve ser nula'),
});

function NewRate() {
  const [items, setItems] = useState([]);

  const handleSubmit = async ({ description }) => {
    await api.put('/exchanges/30/rate', { description, items });
  };

  return (
    <main style={{ marginBottom: '20px' }}>
      <div className="main-container">
        <Form schema={schema} onSubmit={handleSubmit}>
          <h6 className="title">Custo-Benefício</h6>
          <div className="division">
            {
              options.map(({ value, label }) => (
                <p>
                  <label htmlFor={`1,${value}`}>
                    <input onChange={(event) => global.console.log(event)} id={`1,${value}`} name="1" value={value} type="radio" />
                    <span>{label}</span>
                  </label>
                </p>
              ))
            }
          </div>

          <h6 className="title">Experiência de Intercâmbio</h6>
          <div className="division">
            {
              options.map(({ value, label }) => (
                <p>
                  <label htmlFor={`2,${value}`}>
                    <input id={`2,${value}`} name="2" value={value} type="radio" />
                    <span>{label}</span>
                  </label>
                </p>
              ))
            }
          </div>

          <h6 className="title">Atendimento</h6>
          <div className="division">
            {
              options.map(({ value, label }) => (
                <p>
                  <label htmlFor={`3,${value}`}>
                    <input id={`3,${value}`} name="3" value={value} type="radio" />
                    <span>{label}</span>
                  </label>
                </p>
              ))
            }
          </div>

          <h6 className="title">Descrição</h6>
          <div className="description-area">
            <Input name="description" />
          </div>

          <div className="area-button">
            <button type="submit" className="btn deep-purple darken-2">Finalizar</button>
          </div>
        </Form>
      </div>
    </main>
  );
}

export default NewRate;
