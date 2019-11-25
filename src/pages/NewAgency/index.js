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
  description: Yup.string()
    .required('A descrição deve ser informada'),
});

function NewAgency() {
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => (thumbnail ? URL.createObjectURL(thumbnail) : null));

  const handleSubmit = async ({ name, description }) => {
    const data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('logo', thumbnail);

    try {
      await api.post('/agencies', data);
    } catch (err) {
      toast.error(err.response.data.errors[0].message);
    }
  };

  return (
    <main>
      <div id="mainContainer">
        <h5>Nova Agência</h5>
        <Form schema={schema} id="frmRegister" onSubmit={handleSubmit}>
          <br />
          <div className="row">
            <Input label="Nome" name="name" />
          </div>
          <div className="row">
            <Input label="Descrição" name="description" />
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
              <button className="deep-purple darken-2 btn" type="submit">Finalizar</button>
            </div>
          </div>
        </Form>
      </div>
    </main>
  );
}

export default NewAgency;
