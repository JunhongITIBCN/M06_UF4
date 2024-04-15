// LlistatTasques.jsx
import React, { useState } from 'react';
import FormulariTasques from './FormulariTasques';
import './LlistatTasques.css';

const LlistatTasques = () => {
  const [tasques, setTasques] = useState([]);
  const [tasquesCompletades, setTasquesCompletades] = useState([]);

  const afegirTasca = (novaTasca) => {
    setTasques([...tasques, { id: generateId(), ...novaTasca }]);
  };

  const marcarCompletada = (id) => {
    const tascaCompletada = tasques.find((tasca) => tasca.id === id);
    if (tascaCompletada) {
      setTasquesCompletades([...tasquesCompletades, tascaCompletada]);
    }
  };

  const eliminarTasca = (id) => {
    const tasquesRestants = tasques.filter((tasca) => tasca.id !== id);
    setTasques(tasquesRestants);
  };

  const generateId = () => {
    return Math.floor(Math.random() * 1000); 
  };
  
  return (
    <div className="llistat-tasques">
      <h1>Llistat de Tasques</h1>
      <FormulariTasques funcAfegirTasca={afegirTasca} />
      <div>
        {tasques.map((tasca) => (
          <div key={tasca.id} className={`tasca-item ${tasquesCompletades.includes(tasca) ? 'completada' : ''}`}>
            <span
              className={`tasca-text ${tasquesCompletades.includes(tasca) ? 'subrayada' : ''}`}
              onClick={() => marcarCompletada(tasca.id)}
            >
              {tasca.titol}
            </span>
            <button className="tasca-btn" onClick={() => eliminarTasca(tasca.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LlistatTasques;
