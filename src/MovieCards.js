import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import './MovieCards.css'

function MovieCards({genre}) {
    // console.log(genre)
  return (
    <div className='moviecards'>
        {genre.map(item=>(
        <>
            <MovieCard data={item}/>
        </>))}
    </div>
  )
}

export default MovieCards