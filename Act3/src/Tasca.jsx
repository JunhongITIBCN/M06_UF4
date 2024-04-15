// Tasca.jsx
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Tasca = ({ id, text, completada, eliminarTasca, completarTasca, tasques }) => {
    const handleClick = () => {
        completarTasca(id);
    };

    const handleDelete = () => {
        console.log('ID de la tarea a eliminar:', id);
        eliminarTasca(id);
    };

    console.log('Tareas en Tasca:', tasques); 

    return (
        <div className={completada ? 'tascaCompletada' : ''} onClick={handleClick}>
            <span>{text}</span>
            <button onClick={handleDelete}>
                <FaTrashAlt />
            </button>
        </div>
    );
};

export default Tasca;
