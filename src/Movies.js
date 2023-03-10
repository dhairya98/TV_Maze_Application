import React,{useEffect, useState} from 'react'
import MovieCards from './MovieCards'
import './Movies.css'

function Movies({movies}) {

  return (
    <div className='movies'>
        {/* {movies.map(item=>(<h1>{item.name}</h1>))} */}
        <div className="movies__container">
            <h1 className='genre'>Genre1</h1>
            <MovieCards genre={movies}/>
        </div>
        <div className="movies__container">
            <h1 className='genre'>Genre2</h1>
            <MovieCards genre={movies}/>
        </div>
        <div className="movies__container">
            <h1 className='genre'>Genre3</h1>
            <MovieCards genre={movies}/>
        </div>
        <div className="movies__container">
            <h1 className='genre'>Genre4</h1>
            <MovieCards genre={movies}/>
        </div>
    </div>
  )
}

export default Movies