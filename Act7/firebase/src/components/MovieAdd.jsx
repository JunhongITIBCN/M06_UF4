import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../config/config.js';
import './styles/MovieAdd.css'; 

const MoviesAdd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [direction, setDirection] = useState('');
  const [image, setImage] = useState('');
  const [rate, setRate] = useState(1);
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const moviesCollectionRef = collection(db, 'movies');
      await addDoc(moviesCollectionRef, {
        title,
        description,
        direction,
        image,
        rate,
        year,
        duration,
      });
      console.log('Movie added successfully');
    } catch (error) {
      console.error('Error adding movie: ', error);
    }

    setTitle('');
    setDescription('');
    setDirection('');
    setImage('');
    setRate(1);
    setYear('');
    setDuration('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="form-input" type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea className="form-textarea" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input className="form-input" type="text" placeholder="Dirección" value={direction} onChange={(e) => setDirection(e.target.value)} required />
      <input className="form-input" type="url" placeholder="Imagen (URL)" value={image} onChange={(e) => setImage(e.target.value)} required />
      <input className="form-input" type="number" placeholder="Nota" value={rate} min="1" max="5" onChange={(e) => setRate(Number(e.target.value))} required />
      <input className="form-input" type="text" placeholder="Año" value={year} onChange={(e) => setYear(e.target.value)} required />
      <input className="form-input" type="text" placeholder="Duración (min)" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      <button className="form-submit" type="submit">Añadir Película</button>
    </form>
  );
};

export default MoviesAdd;
