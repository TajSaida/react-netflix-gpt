import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title, moviesList}) => {
  return (
    <div >
        <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesList?.map((movie) => (
           <MovieCard movie={movie}/>
          ))}
        </div>
      </div>
        </div>
  )
}

export default MoviesList