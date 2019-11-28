import React, { useState, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import './styles.css';

import camera from '../../assets/camera.svg';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O nome deve ser informado'),
  dateOfBirth: Yup.string()
    .required('A data de nascimento deve ser informada'),
  email: Yup.string()
    .email('Formato de e-mail inválido')
    .required('O e-mail deve ser informado'),
  password: Yup.string()
    .min(7, 'A senha deve conter no mínimo 7 caracteres')
    .required('A senha deve ser informada'),
});

function Register({ history }) {
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => (thumbnail ? URL.createObjectURL(thumbnail) : null), [thumbnail]);

  const handleSubmit = async ({
    name, dateOfBirth, email, password,
  }) => {
    const data = new FormData();
    data.append('name', name);
    data.append('dateOfBirth', dateOfBirth);
    data.append('email', email);
    data.append('password', password);
    data.append('profile', thumbnail);
    data.append('type', 1);

    try {
      await api.post('/auth/register', data);

      await api.post('/auth/send_email', { email });

      toast.success(`Um e-mail foi enviado para ${email}`, {
        onClose: () => history.push('/'),
      });
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
            <div className="col s8" style={{ paddingLeft: 0 }}>
              <Input label="Nome" name="name" />
            </div>
            <div className="col s4" style={{ paddingRight: 0 }}>
              <Input label="Data de nascimento" type="date" name="dateOfBirth" />
            </div>
          </div>
          <div className="row">
            <Input label="E-mail" name="email" />
          </div>
          <div className="row">
            <Input label="Senha" type="password" name="password" />
          </div>
          <div className="row">
            <label
              htmlFor="upload"
              id="thumbnail"
              style={{ backgroundImage: `url(${preview})` }}
              className={thumbnail ? 'has-thumbnail' : ''}
            >
              <input id="upload" type="file" onChange={(event) => setThumbnail(event.target.files[0])} />
              <img src={camera} alt="Select img" />
            </label>
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
