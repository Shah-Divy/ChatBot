import React from 'react';
import './StyledButton.css';

const StyledButton = ({ onClick, buttonText }) => {
  return (
    <div id="container-button">
      <button className="learn-more" onClick={onClick}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{buttonText}</span>
      </button>
    </div>
  );
};

export default StyledButton;
