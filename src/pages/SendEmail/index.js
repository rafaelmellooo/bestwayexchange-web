import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { BounceLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import api from '../../services/api';

import './styles.css';

function SendEmail({ history }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ email }) => {
    setLoading(true);
    try {
      await api.post('/auth/send_email', { email });
      toast.success('E-mail enviado com sucesso', {
        onClose: () => history.push('/'),
      });
    } catch (err) {
      toast.error(err.response.data.error);
    }
    setLoading(false);
  };

  return (
    <main id="wrapper">
      <h5>Informe seu e-mail para a confirmação</h5>
      <Form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Seu e-mail" />

        <button type="submit">Enviar</button>

        <BounceLoader
          color="#673ab7"
          sizeUnit="px"
          size="100"
          loading={loading}
          css={{ marginLeft: '10px', alignSelf: 'center' }}
        />
      </Form>
    </main>
  );
}

export default SendEmail;
