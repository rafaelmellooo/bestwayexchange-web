import React, { useState, useEffect, useMemo } from 'react';
import socketio from 'socket.io-client';
import { BounceLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '../../services/api';

import './styles.css';

function Chat({ match }) {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatInfo, setChatInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [alreadyBought, setAlreadyBought] = useState(false);
  const [type, setType] = useState(null);
  const [mainLoading, setMainLoading] = useState(true);

  const loadChats = async () => {
    const { data } = await api.get('/chats');

    setChats(data);
  };

  const loadMessages = async () => {
    const { data } = await api.get(`/chats/${match.params.id}/messages`);
    setMessages(data.docs);
  };

  const loadChatInfo = async () => {
    const { data } = await api.get(`/chats/${match.params.id}`);

    setAlreadyBought(data.alreadyBought);

    setChatInfo({ ...data.chat });
  };

  const handleClick = async () => {
    await api.post(`/exchanges/${chatInfo.exchange.id}/rates`, {
      user: chatInfo.user.id,
    });

    setAlreadyBought(true);

    toast.success('Usuário liberado com sucesso');
  };

  const loadType = async () => {
    const { data: { type } } = await api.get('/dashboard');
    setType(type.id);
  };

  useEffect(() => {
    setMainLoading(true);
    loadType()
      .then(() => loadChats()
        .then(() => setMainLoading(false)));
  }, []);

  useEffect(() => {
    setLoading(true);
    loadChatInfo()
      .then(() => loadMessages()
        .then(() => setLoading(false)));
  }, [match.params.id]);

  const userId = localStorage.getItem('id');

  const socket = useMemo(() => socketio('http://localhost:3333', {
    query: { userId },
  }), [userId]);

  useEffect(() => {
    socket.on('response', (message) => {
      setMessages([message, ...messages]);
    });
  }, [messages, socket]);

  const handleSubmit = async ({ body }) => {
    const { data } = await api.post(`/chats/${match.params.id}/messages`, { body });

    setMessages([data, ...messages]);
  };

  return mainLoading ? (
    <BounceLoader
        color="#673ab7"
        sizeUnit="px"
        size="100"
      />
  ) : (
    <main style={{ padding: 0 }}>
      <div id="main-chat">
        <div className="contact-list">
          {
            chats.map((chat) => (
              <Link to={`/chats/${chat.id}`} key={chat.id} className="contatinho">
                {
                  type === 1 ? (
                    <>
                      <div className="little-img">
                        <img src={chat.exchange.filename ? `http://localhost:3333/files/${chat.exchange.filename}` : ''} alt={chat.exchange.name} className="little-img" />
                      </div>
                      <div style={{ marginLeft: '5px', fontSize: '12px', marginRight: '5px' }}>
                        <span>{chat.exchange.name}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {
                        type === 2 && (
                          <>
                            <div className="little-img">
                              <img src={chat.user.filename ? `http://localhost:3333/files/${chat.user.filename}` : ''} alt={chat.user.name} className="little-img" />
                            </div>
                            <div style={{ marginLeft: '5px', fontSize: '12px', marginRight: '5px' }}>
                              <span>{chat.user.name}</span>
                            </div>
                          </>
                        )
                      }
                    </>
                  )
                }
                {
                  chat.unseenMessages ? <p className="unseenMessages">{chat.unseenMessages}</p> : ''
                }
              </Link>
            ))
          }
        </div>

        <div className="middle-part">

          <div className="person-tab">
            {
              loading ? (
                <BounceLoader
                  color="#673ab7"
                  sizeUnit="px"
                  size="100"
                />
              ) : (
                <>
                  {
                    type === 1 ? (
                      <>
                        <Link to={`/exchanges/${chatInfo.exchange.id}/dashboard`} className="little-img"><img src={`http://localhost:3333/files/${chatInfo.exchange.filename}`} alt={chatInfo.user.name} className="little-img" /></Link>
                         <p className="listener-letter">{chatInfo.exchange.name}</p>
                      </>
                    ) : (
                      <>
                        {
                          type === 2 && (
                            <>
                              <div className="little-img"><img src={`http://localhost:3333/files/${chatInfo.user.filename}`} alt={chatInfo.user.name} className="little-img" /></div>
                              <p className="listener-letter">{chatInfo.user.name}</p>
                            </>
                          )
                        }
                      </>
                    )
                  }
                </>
              )
            }
          </div>

          <div id="area-chat">
            {
              loading ? (
                <BounceLoader
                  color="#673ab7"
                  sizeUnit="px"
                  size="100"
                />
              ) : messages.map((message) => (
                <div key={message.createdAt} className={message.from === chatInfo.user.id ? 'other-ballon' : 'my-ballon'}>
                  <p>
                    {message.body && (
                      <>
                        {message.body}
                        <br />
                      </>
                    )}
                    {message.filename && (
                      <a
                        style={{
                          color: 'inherit',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        href={`http://localhost:3333/files/${message.filename}`}
                        target="_blank"
                      ><i class="small material-icons">file_download</i> {message.filename}</a>
                    )}
                    <span style={{ fontSize: '10px', fontWeight: 'bold' }}>{message.createdAt}</span>
                  </p>
                </div>
              ))
            }
          </div>

          <Form className="menu-chat" onSubmit={handleSubmit}>
            <button type="submit" className="btn-attachment deep-purple darken-2">
              <i className="material-icons anexo">attach_file</i>
            </button>
            <Input name="body" placeholder="Digite aqui sua mensagem..." />
            <button style={{ padding: 0 }} type="submit" className="btn-send deep-purple darken-2">
              <i className="material-icons send">send</i>
            </button>
          </Form>
        </div>

        <div className="user-big-area">
          {
            loading ? (
              <BounceLoader
                color="#673ab7"
                sizeUnit="px"
                size="100"
              />
            ) : (
              <>
                {
                  type === 1 ? (
                    <>
                      <img src={`http://localhost:3333/files/${chatInfo.exchange.filename}`} alt={chatInfo.user.name} className="big-user-photo" />
                      <h4 className="username">{chatInfo.exchange.name}</h4>

                      <p id="email">{chatInfo.exchange.description}</p>
                    </>
                  ) : (
                    <>
                      {
                        type === 2 && (
                          <>
                            <img src={`http://localhost:3333/files/${chatInfo.user.filename}`} alt={chatInfo.user.name} className="big-user-photo" />
                            <h4 className="username">{chatInfo.user.name}</h4>

                            <p id="email">{chatInfo.user.email}</p>
                          </>
                        )
                      }
                    </>
                  )
                }

                {
                  type === 2 && (
                    <>
                      {
                        alreadyBought ? (
                          <button type="button" id="alreadyBought">Liberado para avaliação</button>
                        ) : (
                          <button id="release" onClick={handleClick} type="button">Liberar avaliação</button>
                        )
                      }
                    </>
                  )
                }
              </>
            )
          }
        </div>
      </div>
    </main>
  );
}

export default Chat;
