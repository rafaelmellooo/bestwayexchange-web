import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { Link, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Favorite from './Favorite';
import api from '../../services/api';

import './styles.css';

function Profile() {
  const [dashboard, setDashboard] = useState({});
  const [loading, setLoading] = useState(true);

  const loadDashboard = async () => {
    setLoading(true);
    const { data } = await api.get('/dashboard');
    setDashboard(data);
    setLoading(false);
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return loading ? (
    <BounceLoader
      color="#673ab7"
      sizeUnit="px"
      size="100"
    />
  ) : (
    <main style={{ paddingTop: 0 }}>
      <div id="main-container">
        <div className="settings-container">
          <div>
            <div id="profile-info">
              <img src={`http://localhost:3333/files/${dashboard.filename}`} alt={dashboard.name} />
              <p>
                <b>{dashboard.name}</b>
              </p>
            </div>
          </div>

          <div id="topics">
            <Link to="/profile" className="topic">
              <p>
                <i className="material-icons">dashboard</i>
              </p>
              <p>Dados pessoais</p>
            </Link>

            <Link to="/profile/favorites" className="topic">
              <p>
                <i className="material-icons">star</i>
              </p>
              <p>Favoritos</p>
            </Link>
          </div>
        </div>

        <section id="display-information">
          <Switch>
            <Route
              exact
              path="/profile"
              render={(props) => <Dashboard {...props} dashboard={dashboard} />}
            />

            <Route
              path="/profile/favorites"
              render={(props) => <Favorite {...props} />}
            />
          </Switch>
        </section>
      </div>
    </main>
  );
}

export default Profile;
