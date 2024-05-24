import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Card.css'; 

const Card = ({ title, link }) => {
  return (
    <div className="card-container"> 
      <h2>{title}</h2>
      <Link to={link}>Ir</Link>
    </div>
  );
};

export default Card;
