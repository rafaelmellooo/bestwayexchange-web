import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
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

function Login({ history, location }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    setLoading(true);

    try {
      const { data: { token } } = await api.post('/auth/authenticate', { email, password });

      localStorage.setItem('token', token);

      const { data: { id } } = await api.get('/dashboard');

      localStorage.setItem('id', id);

      history.push('/');
    } catch (err) {
      const mistakes = {
        400: () => toast.error(err.response.data.error),
        401: () => toast.warn('E-mail não verificado', {
          onClose: () => history.push('/auth/send_email'),
        }),
      };

      mistakes[err.response.status]();
    }

    setLoading(false);
  };

  const authenticate = async () => {
    const { email, token } = queryString.parse(location.search);

    try {
      await api.post('/auth/confirm_email', { email, token });

      toast.success('E-mail verificado com sucesso');
    } catch (err) {
      toast.warn(err.response.data.error);
    }
  };

  useEffect(() => {
    // Auto initialize all the things!
    M.AutoInit();

    authenticate();
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

            {
              loading ? (
                <BounceLoader
                  color="#673ab7"
                  sizeUnit="px"
                  size="100"
                />
              ) : (
                <div className="row espacamento">
                  <input type="submit" value="Logar" className="btn" style={{ backgroundColor: '#4527a0' }} />
                  <Link to="/register">
                    <p className="semConta">Não tem conta? Cadastre-se aqui!</p>
                  </Link>
                </div>
              )
            }
          </Form>
        </div>
      </div>
    </main>
  );
}

export default Login;
