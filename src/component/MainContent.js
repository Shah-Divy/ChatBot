// import React from 'react';
// import RotatingText from './RotatingText';
// import StyledButton from './StyledButton';
// import Chatbot from './Chatbot';
// import './MainContent.css'; // Create this CSS file if needed

// const MainContent = ({ showChat, isLoggedIn, toggleChat }) => {
//   return (
//     <>
//       <div className="content">
//         {!showChat && <RotatingText />}
//         {isLoggedIn && !showChat && (
//           <StyledButton onClick={toggleChat} buttonText="Start Chat" />
//         )}
//       </div>
//       {showChat && <Chatbot onClose={toggleChat} />}
//       {!showChat && (
//         <div className="video-container">
//           <video src="/robo-1.mp4" autoPlay loop muted className="right-upper-video" />
//         </div>
//       )}
//       <video src="/robo.mp4" autoPlay loop muted className="left-lower-video" />
//     </>
//   );
// };

// export default MainContent;
import React from 'react';
import RotatingText from './RotatingText';
import StyledButton from './StyledButton';
import Chatbot from './Chatbot';
import './MainContent.css';

const MainContent = ({ showChat, isLoggedIn, toggleChat }) => {
  return (
    <>
      <div className="content">
        {!showChat && <RotatingText />}
        {isLoggedIn && !showChat && (
          <StyledButton onClick={toggleChat} buttonText="Start Chat" />
        )}
      </div>
      {showChat && <Chatbot onClose={toggleChat} />}
      {!showChat && (
        <div className="video-container">
          <video src="/robo-1.mp4" autoPlay loop muted className="right-upper-video" />
        </div>
      )}
      <video src="/robo.mp4" autoPlay loop muted className="left-lower-video" />
    </>
  );
};

export default MainContent;
