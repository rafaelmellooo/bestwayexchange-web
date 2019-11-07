/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import './styles.css';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Formato de e-mail inválido')
    .required('O e-mail deve ser informado'),
  password: Yup.string()
    .min(3, 'A senha deve conter no mínimo 3 caracteres')
    .required('A senha deve ser informada'),
});

function Login({ history }) {
  const handleSubmit = async ({ email, password }) => {
    try {
      const { data } = await api.post('/auth/authenticate', { email, password });

      localStorage.setItem('token', data.token);
      history.push('/search');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  useEffect(() => {
    // Auto initialize all the things!
    M.AutoInit();
  }, []);

  return (
    <>
      <div className="space" />
      <main id="mainContainer">
        <h5>Login</h5>
        <div className="innerContainer">
          <Form schema={schema} onSubmit={handleSubmit}>
            <div className="row">
              <Input autoFocus label="E-mail" name="email" />
            </div>
            <div className="row">
              <Input label="Senha" type="password" name="password" />
            </div>
            <div className="row noAcc">
              <input
                required
                type="submit"
                value="Logar"
                className="btn deep-purple darken-2"
              />
              <p className="noAccount">Não tem conta? Cadastre-se aqui!</p>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
}

export default Login;
