import React, { useState } from 'react';
import { BounceLoader } from 'react-spinners';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import api from '../../../../services/api';

import './styles.css';

const schema = Yup.object().shape({
  zipCode: Yup.string()
    .required('O CEP deve ser informado'),
});

const nestedSchema = Yup.object().shape({
  number: Yup.string()
    .required('O número deve ser informado'),
  complement: Yup.string()
    .required('O complemento deve ser informado'),
});

function NewAddress({ id, closeModal }) {
  const [addressInfo, setAddressInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ zipCode }) => {
    setLoading(true);
    const { data } = await api.post(`/agencies/${id}/addresses`, { zipCode });
    setLoading(false);
    setAddressInfo(data);
  };

  const nestedHandleSubmit = async ({ number, complement }) => {
    setLoading(true);
    await api.put(`/addresses/${addressInfo.id}`, { number, complement });
    setLoading(false);
    toast.success('Endereço adicionado com sucesso');
    closeModal();
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
        addressInfo ? (
          <div id="addressInfo">
            <p>{`Estado: ${addressInfo.state}`}</p>
            <p>{`Cidade: ${addressInfo.city}`}</p>
            <p>{`Bairro: ${addressInfo.neighborhood}`}</p>
            <p>{`Avenida/rua: ${addressInfo.street}`}</p>

            <Form schema={nestedSchema} onSubmit={nestedHandleSubmit}>
              <Input label="Número" name="number" />

              <Input label="Complemento" name="complement" />

              <button style={{ marginBottom: 0 }} type="submit">Concluir</button>
            </Form>
          </div>
        ) : (
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="zipCode" label="CEP" />

            <button style={{ marginBottom: 0 }} type="submit">Verificar</button>
          </Form>
        )
      }
    </>
  );
}

export default NewAddress;
