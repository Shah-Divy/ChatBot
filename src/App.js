// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Stars from './component/Stars';
// import Header from './component/Header';
// import MainContent from './component/MainContent';
// import Signup from './component/Signup';
// import Login from './component/Login';
// import RotatingText from './component/RotatingText';
// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import StyledButton from './component/StyledButton';
// import Chatbot from './component/Chatbot';


// function App() {
//   const [showChat, setShowChat] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleChat = () => {
//     setShowChat(!showChat);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleSignup = () => {
//     setIsLoggedIn(true);
//     setShowChat(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setShowChat(false);
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <Stars />
//         <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
//         <MainContent
//           showChat={showChat}
//           isLoggedIn={isLoggedIn}
//           toggleChat={toggleChat}
//         />
        
//         <div className="content-container">
//           <Routes>
//             <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
//             <Route path="/login" element={<Login onLogin={handleLogin} />} />

//             {/* Add other routes here */}
//             <Route path="/add" element={<StyledButton onClick={toggleChat} buttonText="Start Chat" />} />
//           </Routes>
//         </div>
//         {showChat && <Chatbot onClose={toggleChat} />}
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Stars from './component/Stars';
import Header from './component/Header';
import MainContent from './component/MainContent';
import Signup from './component/Signup';
import Login from './component/Login';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbot from './component/Chatbot';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowChat(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Stars />
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <MainContent
          showChat={showChat}
          isLoggedIn={isLoggedIn}
          toggleChat={toggleChat}
        />
        
        <div className="content-container">
          <Routes>
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            {/* <Route path="/add" element={<StyledButton onClick={toggleChat} buttonText="Start Chat" />} /> */}
          </Routes>
        </div>
        {showChat && <Chatbot onClose={toggleChat} />}
      </div>
    </Router>
  );
}

export default App;
