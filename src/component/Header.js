import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <header className="header">
      {!isLoggedIn ? (
        <>
          <Link to="/signup" className="glowing-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </Link>
          <Link to="/login" className="glowing-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Log In
          </Link>
        </>
      ) : (
        <button className="glowing-button" onClick={handleLogout}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Log Out
        </button>
      )}
    </header>
  );
};

export default Header;
