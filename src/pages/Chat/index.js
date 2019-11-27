import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';

import './styles.css';

function Chat({ match }) {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  const loadChats = async () => {
    const { data } = await api.get('/chats');

    setChats(data);
  };

  const loadMessages = async () => {
    const { data } = await api.get(`/chats/${match.params.id}`);

    setMessages(data.docs);
  };

  useEffect(() => {
    loadChats();
  }, []);

  useEffect(() => {
    loadMessages();
  }, [match.params.id]);

  useEffect(() => {
    setSelectedChat(chats[match.params.id]);
  }, [match.params.id]);

  const handleSubmit = async ({ body }) => {
    const { data } = await api.post(`/chats/${match.params.id}`, { body });

    setMessages([data, ...messages]);
  };

  return (
    <main>
      <div className="innerContainer">
        <div className="contact-list fl">
          <div className="my-area">
            <div className="little-img fl">
              <img src="" alt="" className="little-img" />
            </div>
          </div>

          <div className="search-area row">
            <input type="text" id="search-bar" placeholder="   Pesquisar..." />
          </div>

          {
            chats.map((chat) => (
              <div key={chat.id} className="contatinho">
                <div className="little-img">
                  <img src={chat.user.filename ? `http://localhost:3333/files/${chat.user.filename}` : ''} alt={chat.user.name} className="little-img" />
                </div>
                <div className="contact-name">
                  <span>{chat.user.name}</span>
                </div>
                {
                  chat.unseenMessages ? <p className="unseenMessages">{chat.unseenMessages}</p> : ''
                }
              </div>
            ))
          }
        </div>

        <div className="middle-part fl">

          <div className="person-tab">
            <div className="little-img fl"><img src="" alt="" className="little-img" /></div>
            <div className="written-part">
              <p className="listener-letter">Lisa Aparecida</p>
              <p className="status">on-line</p>
            </div>
          </div>

          <div id="area-chat">
            {
              messages.map((message) => (
                <div key={message.createdAt} className={message.from === selectedChat.user.id ? 'other-ballon' : 'my-ballon'}>
                  <p>
                    {message.body && message.body}
                    {message.filename && message.filename}
                    <br />
                    <span style={{ fontSize: '10px', fontWeight: 'bold' }}>{message.createdAt}</span>
                  </p>
                </div>
              ))
            }
          </div>

          <div className="menu-chat">
            <Form className="row" onSubmit={handleSubmit}>
              <div className="col s2">
                <button type="submit" className="btn-attachment deep-purple darken-2">
                  <i className="material-icons anexo">attach_file</i>
                </button>
              </div>
              <div className="col s8">
                <Input name="body" placeholder="Digite aqui sua mensagem..." />
              </div>
              <div className="col s2">
                <button type="submit" id="btnEnviar" className="btn-send deep-purple darken-2">
                  <i className="material-icons send">send</i>
                </button>
              </div>
            </Form>
          </div>
        </div>

        <div className="user-big-area">
          <img src="" alt="" className="big-user-photo" />
          <h4 className="username">Lisa Aparecida</h4>

          <div className="row-options">
            <div className="col s12 tema">
              <p>Assuntos</p>
            </div>
          </div>

          <div className="row-options">
            <div className="col s12 tema">
              <p>Deletar conversa</p>
            </div>
          </div>

          <div className="row-options">
            <div className="col s12 tema">
              <p>Autorizar</p>
            </div>
          </div>
        </div>
        <div className="cls" />
      </div>
    </main>
  );
}

export default Chat;
