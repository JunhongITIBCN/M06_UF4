import React from "react"
import { Routes, Route } from "react-router-dom"
import './app.css'
import Welcome from './components/Welcome'
import MoviesAdd from './components/MovieAdd'
import MoviesList from "./pages/MoviesList"

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Welcome username="Junhong" />} />
        <Route path="/movies/list" element={<MoviesList />} />
        <Route path="/movies/add" element={<MoviesAdd />} />
      </Routes>
    </div>
  )
}

export default App