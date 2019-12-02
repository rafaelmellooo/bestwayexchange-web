import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import Modal from 'react-modal';
import * as Yup from 'yup';
import Address from '../../../components/Address';
import NewAddress from './NewAddress';
import api from '../../../services/api';

import './styles.css';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O nome deve ser informado'),
  description: Yup.string()
    .required('A descrição deve ser informada'),
});

Modal.setAppElement('#root');

function InfoSection({ id }) {
  const [loading, setLoading] = useState(true);
  const [agencyInfo, setAgencyInfo] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [addresses, setAddresses] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const loadAgencyInfo = async () => {
    const { data } = await api.get(`/agencies/${id}`);
    setAgencyInfo(data);
    setName(data.agency.name);
    setDescription(data.agency.description);
  };

  const loadAddresses = async () => {
    const { data } = await api.get(`/agencies/${id}/addresses`);
    setAddresses(data);
  };

  const handleSubmit = async (data) => {
    try {
      await api.put(`/agencies/${id}`, data);
      toast.success('Alterações salvas com sucesso');
    } catch (err) {
      toast.error(err.response.data.errors[0].message);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadAgencyInfo()
      .then(() => loadAddresses()
        .then(() => setLoading(false)));
  }, [id]);

  const closeModal = async () => {
    setIsOpen(false);
    setLoading(true);
    await loadAddresses();
    setLoading(false);
  };

  return loading ? (
    <BounceLoader
      color="#673ab7"
      sizeUnit="px"
      size="100"
    />
  ) : (
    <>
      <article>
        <Form schema={schema} onSubmit={handleSubmit}>
          <div id="info">
            <img id="filename" src={`http://localhost:3333/files/${agencyInfo.agency.filename}`} alt={agencyInfo.agency.name} />

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
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            label="Descrição"
          />

          <img id="background" src={`http://localhost:3333/files/${agencyInfo.agency.background}`} alt={agencyInfo.agency.name} />

          <button type="submit">Salvar alterações</button>
        </Form>
      </article>

      <article id="addresses">
        <button type="button" onClick={() => setIsOpen(true)} id="add">
          <p style={{ color: '#fff' }}>
            <i style={{ fontSize: '96px' }} className="material-icons">add</i>
          </p>
        </button>
        {
          addresses.map((address) => (
            <Address
              key={address.id}
              zipCode={address.zipCode}
              city={address.city}
              state={address.state}
              neighborhood={address.neighborhood}
              street={address.street}
              number={address.number}
              complement={address.complement}
            />
          ))
        }
      </article>

      <Modal
        isOpen={modalIsOpen}
        style={{ overlay: { zIndex: 1 } }}
        onRequestClose={() => setIsOpen(false)}
      >
        <NewAddress id={id} closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default InfoSection;
