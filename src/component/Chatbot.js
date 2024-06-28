// import React, { useState, useEffect } from 'react';
// import './Chatbot.css';
// import chatbotImage from './chatbot.png';
// import data from '../data';
// import './StyledButton.css'; 

// const Chatbot = ({ onClose }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [options, setOptions] = useState([]);
//   const [currentStep, setCurrentStep] = useState('chatinit');
//   const [subStep, setSubStep] = useState(null);

//   useEffect(() => {
//     startChat();
//   }, []);

//   const startChat = () => {
//     setMessages([]);
//     setOptions([]);
//     setCurrentStep('chatinit');
//     setSubStep(null);
//     let messageQueue = [...data.chatinit.title];
//     messageQueue.forEach((msg, index) => {
//       setTimeout(() => {
//         setMessages((prev) => [...prev, { text: msg, type: 'msg' }]);
//         if (index === messageQueue.length - 1) {
//           showOptions(data.chatinit.options);
//         }
//       }, index * 500);
//     });
//   };

//   const showOptions = (options) => {
//     setOptions(options);
//   };

//   const handleOptionClick = (option) => {
//     setMessages((prev) => [...prev, { text: option, type: 'user'}]);
//     setOptions([]);

//     const optionKey = option.split(' ')[0].toLowerCase();
//     const nextStep = data[currentStep].details ? option : optionKey;
//     const tempObj = data[nextStep] || data[currentStep]?.details?.[option];

//     if (tempObj) {
//       setTimeout(() => handleResults(tempObj.title, tempObj.options, tempObj.description), 500);
//       if (!data[currentStep].details) {
//         setCurrentStep(nextStep);
//       } else {
//         setSubStep(option);
//       }
//     }
//   };

//   const handleResults = (titles, options, description) => {
//     if (description) {
//       setMessages((prev) => [...prev, { text: description, type: 'msg' }]);
//       return;
//     }

//     titles.forEach((title, index) => {
//       setTimeout(() => {
//         setMessages((prev) => [...prev, { text: title, type: 'msg' }]);
//         if (index === titles.length - 1) {
//           showOptions(options);
//         }
//       }, index * 500);
//     });
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setShowChat(true); // Show chat after login
//   };

//   const toggleChat = () => {
//     setShowChat(!showChat);
//     if (!showChat) {
//       startChat(); // Start chat when toggling to show
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setShowChat(false); // Hide chat after logout
//   };

//   return (
//     <div className="chatbot-container">
//     <div className="chatbot-header">
//       <div className="chatbot-header-content">
//         <img src={chatbotImage} alt="avatar" className="chatbot-avatar" />
//         <div>
//           <span className="chatbot-name">Chatbot</span>
//           <br />
//           <span className="chatbot-status">online</span>
//         </div>
//       </div>
//       <div className="chatbot-buttons">
//         <button className="chatbot-close-btn" onClick={startChat}>
//           <i className="fa fa-refresh"></i>
//         </button>
//         <button className="chatbot-close-btn" onClick={onClose}>
//           <i className="fa fa-times"></i>
//         </button>
//       </div>
//     </div>
//     <div className="chatbot-messages" id="chat-box">
//       {messages.map((message, index) => (
//         <div key={index} className={message.type === 'user' ? 'chatbot-message user' : 'chatbot-message'}>
//           <span dangerouslySetInnerHTML={{ __html: message.text }} />
//         </div>
//       ))}
//  </div>
//       <div className="chatbot-options">
//         {options.map((option, index) => (
//           <label key={index}>
//             <input type="radio" name="chatbot-options" className="chatbot-option" onClick={() => handleOptionClick(option)} />
//             <span dangerouslySetInnerHTML={{ __html: option }} />
//           </label>
//         ))}
//       </div>
//     <div className="chatbot-footer">
//       <div className="chatbot-footer-content">
//         <div className="centered-square"></div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Chatbot;
import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import chatbotImage from './chatbot.png';
import data from '../data';
import './StyledButton.css'; 

const Chatbot = ({ onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentStep, setCurrentStep] = useState('chatinit');
  const [subStep, setSubStep] = useState(null);

  useEffect(() => {
    startChat();
  }, []);

  const startChat = () => {
    setMessages([]);
    setOptions([]);
    setCurrentStep('chatinit');
    setSubStep(null);
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
    setMessages((prev) => [...prev, { text: option, type: 'user'}]);
    setOptions([]);

    const optionKey = option.split(' ')[0].toLowerCase();
    const nextStep = data[currentStep].details ? option : optionKey;
    const tempObj = data[nextStep] || data[currentStep]?.details?.[option];

    if (tempObj) {
      setTimeout(() => handleResults(tempObj.title, tempObj.options, tempObj.description, tempObj.focus, tempObj.coreSubjects, tempObj.careerOptions), 500);
      if (!data[currentStep].details) {
        setCurrentStep(nextStep);
      } else {
        setSubStep(option);
      }
    }
  };

  const handleResults = (titles, options, description, focus, coreSubjects, careerOptions) => {
    if (description) {
      setMessages((prev) => [...prev, { text: description, type: 'msg' }]);
      return;
    }

    if (focus && coreSubjects && careerOptions) {
      setMessages((prev) => [
        ...prev,
        { text: `<strong>Focus:</strong> ${focus}`, type: 'msg' },
        { text: `<strong>Core Subjects:</strong> ${coreSubjects}`, type: 'msg' },
        { text: `<strong>Career Options:</strong> ${careerOptions}`, type: 'msg' }
      ]);
      return;
    }

    titles.forEach((title, index) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: title, type: 'msg' }]);
        if (index === titles.length - 1) {
          showOptions(options);
        }
      }, index * 500);
    });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowChat(true); // Show chat after login
  };

  const toggleChat = () => {
    setShowChat(!showChat);
    if (!showChat) {
      startChat(); // Start chat when toggling to show
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowChat(false); // Hide chat after logout
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
          <div key={index} className={message.type === 'user' ? 'chatbot-message user' : 'chatbot-message'}>
            <span dangerouslySetInnerHTML={{ __html: message.text }} />
          </div>
        ))}
      </div>
      <div className="chatbot-options">
        {options.map((option, index) => (
          <label key={index}>
            <input type="radio" name="chatbot-options" className="chatbot-option" onClick={() => handleOptionClick(option)} />
            <span dangerouslySetInnerHTML={{ __html: option }} />
          </label>
        ))}
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
