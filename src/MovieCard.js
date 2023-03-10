import React from 'react'
import './MovieCard.css'
import {NavLink, useNavigate} from 'react-router-dom'

function MovieCard({data}) {
  const nav=useNavigate()
  // console.log(data)
  return (
    <div className='moviecard' onClick={()=>nav('/moviedescription', {state:{data:data}})}>
        <div className="moviecard__container">
            <img src={data.image} alt='Movie Thumbnail'/>
        </div>
            <h1>{data.name}</h1>
    </div>
  )}

export default MovieCard