import React, { useState } from 'react'
import './App.css'
import { MoviesList, Stats } from 'components'

function App() {
  const [movies, setMovies] = useState([
    { title: 'The Fifth Element', likes: 11 },
    { title: 'Jurassic Park', likes: 12 },
    { title: 'Titanic', likes: 10 },
  ])

  const handleChange = (movieIndex: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie, index) => {
        if (index === movieIndex)
          return { title: movie.title, likes: movie.likes + 1 }
        else return movie
      })
    )
  }

  return (
    <div className="App">
      <Stats movies={movies} />
      <MoviesList movies={movies} onChange={handleChange} />
    </div>
  )
}

export default App
