import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import './styles.css';

function Dashboard({ dashboard }) {
  const [email, setEmail] = useState(dashboard.email);
  const [name, setName] = useState(dashboard.name);
  const [password, setPassword] = useState(dashboard.password);

  const handleSubmit = async (data) => {
    try {
      await api.put(`/users/${dashboard.id}`, { data });
      toast.success('Alterações salvas com sucesso');
    } catch (err) {
      toast.error(err.response.data.errors[0].message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div id="info">
        <img id="filename" src={`http://localhost:3333/files/${dashboard.filename}`} alt={dashboard.name} />

        <div>
          <Input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            label="Nome"
          />
        </div>
      </div>

      <Input
        label="Nome"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        name="name"
      />

      <Input
        label="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        name="password"
      />

      <button type="submit">Salvar alterações</button>
    </Form>
  );
}

export default Dashboard;
