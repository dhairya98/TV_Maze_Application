import React, { useState, useEffect } from 'react'
import './HomePage.css'
import {useParams} from 'react-router-dom'
import Navbar from './Navbar'
import Movies from './Movies'

let movies=[]

function HomePage() {
  const [moviesList,setmoviesList]=useState([])
  useEffect(()=>{
    fetch('https://mocki.io/v1/91b201fc-c619-431b-8183-e4480c240d6d')
    .then(res=>res.json())
    .then(resp=>{
      setmoviesList(resp.movies)
      movies=resp.movies
      console.log('Movies Homepage->',movies)
    })
},[])

  return (
    <div className='HomePage'>
      {/* API Call */}
        <Navbar movieItems={movies} setmoviesList={setmoviesList}/> 
        <Movies movies={moviesList}/>
    </div>
  )
}

export default HomePage