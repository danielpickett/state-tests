import React from 'react'
import './Movie.scss'

export const Movie = ({
  title,
  likes,
  onLike,
}: {
  title: string
  likes: number
  onLike?: () => void
}) => {
  return (
    <div className="Movie">
      <div className="Movie__title">Title: {title}</div>
      <div className="Movie__likes">Likes: {likes}</div>
      <button onClick={onLike}>like</button>
    </div>
  )
}
