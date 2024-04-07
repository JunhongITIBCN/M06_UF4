import React from 'react';

const Button = ({ text, onClick, isClick }) => {
  const className = isClick ? 'btnClick' : 'btnReiniciar';

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
