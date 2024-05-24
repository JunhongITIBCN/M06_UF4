import React from 'react';
import IndexMenu from '../pages/IndexMenu';
import './styles/Welcome.css'; 

const Welcome = ({ username }) => {
  return (
    <div className="welcome-container"> 
      <h1>Hola, {username}!</h1>
      <p>Pel·lícules per a l’estiu</p>
      <IndexMenu />
    </div>
  );
};

export default Welcome;
