import React, { useState } from 'react';
import { BounceLoader } from 'react-spinners';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import api from '../../../services/api';

import './styles.css';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O nome deve ser informado'),
});

function NewCountry({ closeModal }) {
  const [loading, setLoading] = useState(false);

  const [countryInfo, setCountryInfo] = useState(null);

  const handleSubmit = async ({ name }) => {
    setLoading(true);
    const { data } = await api.post('/countries', { name });
    setCountryInfo(data);
    setLoading(false);
    toast.success('País adicionado com sucesso');
  };

  return loading ? (
    <BounceLoader
      color="#673ab7"
      sizeUnit="px"
      size="100"
    />
  ) : (
    <>
      {
        countryInfo ? (
          <div id="countryInfo">
            <p>{`Nome: ${countryInfo.name}`}</p>
            <p>{`Descrição: ${countryInfo.description}`}</p>
            <img src={`http://localhost:3333/files/${countryInfo.filename}`} alt={countryInfo.name} />
            <button style={{ marginBottom: 0 }} type="button" onClick={() => closeModal()}>Concluir</button>
          </div>
        ) : (
          <Form shema={schema} onSubmit={handleSubmit}>
            <Input name="name" label="Nome" />

            <button style={{ marginBottom: 0 }} type="submit">Continuar</button>
          </Form>
        )
      }
    </>
  )
}

export default NewCountry;
