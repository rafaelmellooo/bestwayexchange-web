import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import Chart from 'react-apexcharts';
import api from '../../../services/api';

import './styles.css';

function LogSession({ id }) {
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState([]);
  const [ranking, setRanking] = useState([]);

  const loadLog = async () => {
    const { data } = await api.get('/log');
    setLog(data);
  };

  const loadRanking = async () => {
    const { data } = await api.get('/ranking');
    setRanking(data);
  };

  useEffect(() => {
    setLoading(true);
    loadLog()
      .then(() => loadRanking()
        .then(() => setLoading(false)));
  }, [id]);

  return loading ? (
    <BounceLoader
      color="#673ab7"
      sizeUnit="px"
      size="100"
    />
  ) : (
    <>
      <article className="log">
        <h5>Intercâmbios mais comprados/interessados no último mês</h5>
        <Chart
          type="bar"
          options={{
            xaxis: {
              categories: log.map(({ name }) => name),
            },
          }}
          series={[
            {
              name: 'Compradores',
              data: log.map(({ purchasers }) => purchasers),
            },
            {
              name: 'Interessados',
              data: log.map(({ stakeholders }) => stakeholders),
            },
          ]}
        />
      </article>
      <article className="log">
        <h5>Intercâmbios mais comprados do sistema</h5>
        <Chart
          type="bar"
          options={{
            xaxis: {
              categories: ranking.map(({ exchanges: { name } }) => name),
            },
          }}
          series={[
            {
              name: 'Compradores',
              data: ranking.map(({ purchasers }) => purchasers),
            },
          ]}
        />
      </article>
    </>
  );
}

export default LogSession;
