import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { Link, Route, Switch } from 'react-router-dom';
import ExchangesSection from './ExchangesSection';
import EmployeesSection from './EmployeesSection';
import LogSession from './LogSession';
import InfoSection from './InfoSection';
import api from '../../services/api';

import './styles.css';

function Admin() {
  const [adminInfo, setAdminInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const loadAdminInfo = async () => {
    setLoading(true);
    const { data } = await api.get('/dashboard');
    setAdminInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    loadAdminInfo();
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
            <div id="admin-info">
              <img src={`http://localhost:3333/files/${adminInfo.filename}`} alt={adminInfo.name} />
              <p>
                <b>{adminInfo.name}</b>
              </p>
            </div>
          </div>

          <div id="topics">
            <Link to="/admin/exchanges" className="topic">
              <p>
                <i className="material-icons">airplanemode_active</i>
              </p>
              <p>Intercâmbios</p>
            </Link>

            <Link to="/admin/employees" className="topic">
              <p>
                <i className="material-icons">group</i>
              </p>
              <p>Funcionários</p>
            </Link>

            <Link to="/admin/log" className="topic">
              <p>
                <i className="material-icons">assessment</i>
              </p>
              <p>Relatórios</p>
            </Link>

            <Link to="/admin" className="topic">
              <p>
                <i className="material-icons">info</i>
              </p>
              <p>Informações</p>
            </Link>
          </div>
        </div>

        <section id="display-information">
          <Switch>
            <Route
              path="/admin/exchanges"
              render={(props) => <ExchangesSection {...props} id={adminInfo.agency.id} />}
            />
            <Route
              path="/admin/employees"
              render={(props) => <EmployeesSection {...props} id={adminInfo.agency.id} />}
            />
            <Route
              path="/admin/log"
              render={(props) => <LogSession {...props} id={adminInfo.agency.id} />}
            />
            <Route
              exact
              path="/admin"
              render={(props) => <InfoSection {...props} id={adminInfo.agency.id} />}
            />
          </Switch>
        </section>
      </div>
    </main>
  );
}

export default Admin;
