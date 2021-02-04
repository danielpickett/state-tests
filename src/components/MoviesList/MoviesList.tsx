import React from 'react'
import './MoviesList.scss'
import { Movie } from 'components'

export type MovieType = {
  title: string
  likes: number
}

export const MoviesList = ({
  movies,
  onChange,
}: {
  movies: { title: string; likes: number }[]
  onChange: (movieIndex: number) => void
}) => {
  return (
    <div className="MoviesList">
      {movies.map((movie, movieIndex) => (
        <Movie
          key={movie.title}
          title={movie.title}
          likes={movie.likes}
          onLike={() => onChange(movieIndex)}
        />
      ))}
    </div>
  )
}
