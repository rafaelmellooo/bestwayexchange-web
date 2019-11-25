/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
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
    <main>
      <div className="login">
        <h5>Login</h5>
        <div className="conteudoInterno">
          <Form schema={schema} onSubmit={handleSubmit}>
            <div className="row">
              <Input autoFocus label="E-mail" name="email" />
            </div>
            <div className="row">
              <Input label="Senha" type="password" name="password" />
            </div>

            <div className="row espacamento">
              <input type="submit" value="Logar" className="btn" style={{ backgroundColor: '#4527a0' }} />
              <a href="register_user.html" target="_blank">
                <p className="semConta">Não tem conta? Cadastre-se aqui!</p>
              </a>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default Login;
