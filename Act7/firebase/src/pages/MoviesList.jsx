// MoviesList.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import MovieCard from '../components/MovieCard';
import { db } from "../config/config";
import '../components/styles/MoviesList.css'; 

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesCollectionRef = collection(db, 'movies');
      const querySnapshot = await getDocs(moviesCollectionRef);
      const moviesArray = [];
      querySnapshot.forEach((doc) => {
        moviesArray.push(doc.data());
      });
      setMovies(moviesArray);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-list-container">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          image={movie.image}
          rate={movie.rate}
          direction={movie.direction}
        />
      ))}
    </div>
  );
};

export default MoviesList;
