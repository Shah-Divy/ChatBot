import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import chatbotImage from './chatbot.png';
import data from '../data'; // Import the data

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    startChat();
  }, []);

  const startChat = () => {
    setMessages([]);
    let messageQueue = [...data.chatinit.title];
    messageQueue.forEach((msg, index) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: msg, type: 'msg' }]);
        if (index === messageQueue.length - 1) {
          showOptions(data.chatinit.options);
        }
      }, index * 500);
    });
  };

  const showOptions = (options) => {
    setOptions(options);
  };

  const handleOptionClick = (option) => {
    const optionKey = option.split(' ')[0].toLowerCase();
    const tempObj = data[optionKey];
    setMessages((prev) => [...prev, { text: option, type: 'user', alignment: 'right' }]);
    setOptions([]);
    setTimeout(() => handleResults(tempObj.title, tempObj.options, tempObj.url), 500);
  };

  const handleResults = (titles, options, url) => {
    titles.forEach((title, index) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: title, type: 'msg' }]);
        if (index === titles.length - 1) {
          if (Object.keys(url).length === 0) {
            showOptions(options);
          } else {
            handleOptions(options, url);
          }
        }
      }, index * 500);
    });
  };

  const handleOptions = (options, url) => {
    options.forEach((option, index) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: option, type: 'option', url: url.link[index], alignment: 'right'}]);
        if (index === options.length - 1) {
          setMessages((prev) => [...prev, { text: 'See more', type: 'link', url: url.more, alignment: 'right'}]);
        }
      }, index * 500);
    });
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-header-content">
          <img src={chatbotImage} alt="avatar" className="chatbot-avatar" />
          <div>
            <span className="chatbot-name">Chatbot</span>
            <br />
            <span className="chatbot-status">online</span>
          </div>
        </div>
        <div className="chatbot-buttons">
          <button className="chatbot-close-btn" onClick={startChat}>
            <i className="fa fa-refresh"></i>
          </button>
          <button className="chatbot-close-btn" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
      <div className="chatbot-messages" id="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={message.type === 'user' ? 'chatbot-message user' : 'chatbot-message'} style={{ textAlign: message.alignment }}>
            {message.type === 'link' ? (
              <a href={message.url} className="chatbot-link">{message.text}</a>
            ) : (
              <span dangerouslySetInnerHTML={{ __html: message.text }} />
            )}
          </div>
        ))}
        <div className="chatbot-options">
        {options.map((option, index) => (
          <label key={index}>
            <input type="radio" name="chatbot-options" className="chatbot-option" onClick={() => handleOptionClick(option)} />
            <span dangerouslySetInnerHTML={{ __html: option }} />
          </label>
        ))}
        </div>
      </div>
      <div className="chatbot-footer">
        <div className="chatbot-footer-content">
        <div className="centered-square"></div>
        </div>
        
      </div>
    </div>
  );
};

export default Chatbot;
