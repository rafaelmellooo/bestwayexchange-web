import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import arrowDropUp from '../../assets/arrow_drop_up.svg';

export default function Header({ history, location }) {
  const [dashboard, setDashboard] = useState(null);
  const [notifications, setNotifications] = useState(null);

  const loadNotifications = async () => {
    const { data } = await api.get('/notifications');
    setNotifications(data);
  };

  const loadDashboard = async () => {
    try {
      const { data } = await api.get('/dashboard');
      setDashboard(data);

      loadNotifications();
    } catch (err) {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      setDashboard(null);
      setNotifications(null);

      history.push('/login');
    }
  };

  const handleClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    setDashboard(null);
    setNotifications(null);

    history.push('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) { loadDashboard(); }
  }, [location]);

  return (
    <header id="main-header">
      <Link to="/" style={{ height: '100%' }}><img id="logo" src={logo} alt={logo.filename} /></Link>

      <article>
        <Link to="/profile" id="profile">
          <p
            style={{
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {
              dashboard ? (
                <img
                  style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    border: '2px solid #fff',
                  }}
                  src={`http://localhost:3333/files/${dashboard.filename}`}
                  alt={dashboard.name}
                />
              ) : (
                <i className="medium material-icons">account_circle</i>
              )
            }
            {
              dashboard ? (
                <span
                  style={{
                    marginLeft: '10px',
                    fontWeight: 'bold',
                    fontSize: '16px',
                  }}
                >
                  {dashboard.name}
                </span>
              ) : ''
            }
          </p>
        </Link>

        <Link to="/search" className="personalize"><p>Buscar intercâmbios</p></Link>

        <Link to="/profile/favorites" className="personalize"><p>Favoritos</p></Link>

        <div id="notification">
          <div>
            <p style={{ color: '#fff' }}><i style={{ fontSize: '36px' }} className="material-icons">notifications_none</i></p>
            <div id="dropdown-menu">
              <img
                src={arrowDropUp}
                alt={arrowDropUp.filename}
                style={{
                  height: '30px',
                  width: '30px',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  marginTop: '-22px',
                }}
              />
              <div id="content">
                {
                  notifications ? (
                    notifications.messages.docs.map((message) => (
                      <Link key={message.createdAt} to={`/chats/${message.chat.id}`}>
                        <img src={`http://localhost:3333/files/${message.chat.exchange.filename}`} alt={message.chat.exchange.name} />
                        <div>
                          <p>
                            Chegou uma mensagem sobre o intercâmbio
                            <b>{` ${message.chat.exchange.name}`}</b>
                          </p>
                          <div>
                            <p><i className="material-icons teal-text">message</i></p>
                            <p>{message.createdAt}</p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : ''
                }

                {
                  notifications ? (
                    notifications.rates.docs.map((rate) => (
                      <Link key={rate.id} to={`/rates/${rate.id}`}>
                        <img src={`http://localhost:3333/files/${rate.exchanges.filename}`} alt={rate.exchanges.name} />
                        <div>
                          <p>
                            Você foi aprovado para avaliar o intercâmbio
                            <b>{` ${rate.exchanges.name}`}</b>
                          </p>
                          <div>
                            <p><i className="material-icons yellow-text">star</i></p>
                            <p>{rate.createdAt}</p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : ''
                }
              </div>
            </div>
          </div>
        </div>

        <button type="button" onClick={handleClick} id="exit"><i style={{ fontSize: '36px' }} className="material-icons">exit_to_app</i></button>
      </article>
    </header>
  );
}
