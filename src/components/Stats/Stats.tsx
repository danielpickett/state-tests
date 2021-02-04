import React from 'react'
import './Stats.scss'
import { MovieType } from 'components/MoviesList'

export const Stats = ({ movies }: { movies: MovieType[] }) => {
  const totalLikes = movies.reduce((result: number, movie) => {
    return result + movie.likes
  }, 0)
  return <div className="Stats">total likes: {totalLikes}</div>
}
