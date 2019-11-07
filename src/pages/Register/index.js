/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import './styles.css';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O nome deve ser informado'),
  dateOfBirth: Yup.date()
    .required('A data de nascimento deve ser informada'),
  email: Yup.string()
    .email('Formato de e-mail inválido')
    .required('O e-mail deve ser informado'),
  password: Yup.string()
    .min(7, 'A senha deve conter no mínimo 7 caracteres')
    .required('A senha deve ser informada'),
});

function Register({ history }) {
  const handleSubmit = async ({
    name, dateOfBirth, email, password,
  }) => {
    try {
      await api.post('/auth/register', {
        name, dateOfBirth, email, password, typeId: 1,
      });

      history.push('/search');
    } catch (err) {
      toast.error(err.response.data.errors[0].message);
    }
  };

  return (
    <main>
      <div className="space" />
      <div id="mainContainer">
        <h5>Cadastro</h5>
        <Form schema={schema} onSubmit={handleSubmit} className="forms">
          <br />
          <div className="row">
            <div className="col s8">
              <p>Nome</p>
              <Input name="name" />
            </div>
            <div className="col s4">
              <p>Data de nascimento</p>
              <Input type="date" name="dateOfBirth" />
            </div>
          </div>
          <div className="row">
            <p>E-mail</p>
            <Input name="email" />
          </div>
          <div className="row">
            <p>Senha</p>
            <Input type="password" name="password" />
          </div>
          <div className="row">
            <div className="col s12">
              <input
                type="submit"
                value="Cadastrar-se"
                className="btn deep-purple darken-2"
                style={{ marginLeft: '595px', marginTop: '-5px' }}
              />
            </div>
          </div>
        </Form>
      </div>
    </main>
  );
}

export default Register;
