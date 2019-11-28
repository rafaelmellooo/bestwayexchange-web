import React, { useState, useMemo, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Select from 'react-select';
import api from '../../services/api';

import './styles.css';

import camera from '../../assets/camera.svg';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O nome deve ser informado'),
  description: Yup.string()
    .required('A descrição deve ser informada'),
  price: Yup.string()
    .required('O preço deve ser informado'),
  time: Yup.string()
    .required('A duração deve ser informada'),
});

function NewExchange() {
  const [thumbnail, setThumbnail] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [exchangeTypes, setExchangeTypes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [housingTypes, setHousingTypes] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedExchangeType, setSelectedExchangeType] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedHousingTypes, setSelectedHousingTypes] = useState([]);

  const loadLanguages = async () => {
    const { data } = await api.get('/languages');

    setLanguages(data.map(({ id, name }) => ({ value: id, label: name })));
  };

  const loadExchangeTypes = async () => {
    const { data } = await api.get('/exchange_types');

    setExchangeTypes(data.map(({ id, name }) => ({ value: id, label: name })));
  };

  const loadCountries = async () => {
    const { data } = await api.get('countries');

    setCountries(data.map(({ id, name }) => ({ value: id, label: name })));
  };

  const loadCities = async (value) => {
    const { data } = await api.get(`/countries/${value}/cities`);

    setCities(data.map(({ id, name }) => ({ value: id, label: name })));
  };

  const loadHousingTypes = async () => {
    const { data } = await api.get('/housing_types');

    setHousingTypes(data.map(({ id, name }) => ({ value: id, label: name })));
  };

  useEffect(() => {
    loadLanguages();
    loadExchangeTypes();
    loadCountries();
    loadHousingTypes();
  }, []);

  const preview = useMemo(() => (thumbnail ? URL.createObjectURL(thumbnail) : null), [thumbnail]);

  const handleSubmit = async ({
    name, description, price, time,
  }) => {
    const data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('price', price);
    data.append('time', time);
    data.append('thumbnail', thumbnail);
    data.append('exchangeType', selectedExchangeType);
    data.append('city', selectedCity);
    data.append('languages', selectedLanguages.join(','));
    data.append('housingTypes', selectedHousingTypes.join(','));

    try {
      await api.post('/exchanges', data);
    } catch (err) {
      toast.error(err.response.data.errors[0].message);
    }
  };

  return (
    <main>
      <div id="mainContainer">
        <h5>Adicionar Intercâmbio</h5>
        <Form schema={schema} onSubmit={handleSubmit}>
          <div className="forms">
            <div className="row">
              <Input label="Nome" name="name" />
            </div>

            <div className="row">
              <Input label="Descrição" name="description" />
            </div>

            <div className="row">
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Idioma(s)</p>
              <Select
                isSearchable
                isClearable
                isMulti
                name="languages"
                isLoading={!languages}
                options={languages}
                onChange={(event) => setSelectedLanguages(event.map(({ value }) => value))}
              />
            </div>

            <div className="row">
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Tipo de Intercâmbio</p>
              <Select
                isSearchable
                isClearable
                name="exchangeType"
                isLoading={!exchangeTypes}
                options={exchangeTypes}
                onChange={({ value }) => setSelectedExchangeType(value)}
              />
            </div>

            <div className="row">
              <div className="col s6" style={{ paddingLeft: 0 }}>
                <Input label="Preço (em reais)" name="price" />
              </div>
              <div className="col s6" style={{ paddingRight: 0 }}>
                <Input label="Duração (em meses)" name="time" />
              </div>
            </div>

            <div className="row">
              <div className="col s6" style={{ paddingLeft: 0 }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>País</p>
                <Select
                  isSearchable
                  name="country"
                  isLoading={!countries}
                  options={countries}
                  onChange={({ value }) => loadCities(value)}
                />
              </div>

              <div className="col s6" style={{ paddingRight: 0 }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Cidade(s)</p>
                <Select
                  isSearchable
                  name="cities"
                  isClearable
                  isLoading={!cities}
                  options={cities}
                  onChange={({ value }) => setSelectedCity(value)}
                />
              </div>
            </div>
            <div className="row">
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Tipos de Moradia</p>
              <Select
                isSearchable
                isClearable
                isMulti
                name="housingTypes"
                isLoading={!housingTypes}
                options={housingTypes}
                onChange={(event) => setSelectedHousingTypes(event.map(({ value }) => value))}
              />
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
              <div className="col s12 btn-area">
                <button type="submit" className="btn deep-purple darken-2">Finalizar</button>
              </div>
            </div>
          </div>
        </Form>
      </div>

    </main>
  );
}

export default NewExchange;
