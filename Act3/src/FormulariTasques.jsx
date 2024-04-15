// FormulariTasques.jsx
import React, { useState } from 'react';
import './FormulariTasques.css'; 

const FormulariTasques = ({ funcAfegirTasca, eliminarTasca }) => {
  const [textTasca, setTextTasca] = useState('');

  const canviTextTasca = (e) => {
    setTextTasca(e.target.value);
  };

  const enviarForm = (e) => {
    e.preventDefault();
    const novaTasca = { titol: textTasca, completada: false };
    funcAfegirTasca(novaTasca);
    setTextTasca('');
  };

  return (
    <form className="formulari-tasques" onSubmit={enviarForm}>
      <input type="text" value={textTasca} onChange={canviTextTasca} />
      <button type="submit">Afegir Tasca</button>
    </form>
  );
};

export default FormulariTasques;
