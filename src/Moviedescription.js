import React from 'react'
import './Moviedescription.css'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';

function Moviedescription() {
    const location = useLocation();
    const data = location.state?.data;
    console.log(location.state.data)
  return (
    <div className='moviedescription'> 
        <Navbar />
        <div className="moviedescription__container">
            <div className="moviedescription__left">
                <img src={data.image} />
            </div>
            <div className="moviedescription__right">
                <div className="title">
                    <h1 className='data__metadata0'>{data?.name}</h1><h1>{data.ratings}/5  </h1>
                </div>
                <div className="year">
                    <h3 className='data__metadata'>{data.year}</h3> | <h3 className='data__metadata2'>{data.length}</h3> | <h3 className='data__metadata3'>{data.director}</h3>
                </div>
                <div className="cast">
                    <h1>{data.cast}</h1>
                </div>
                <div className="description">
                    <h1>Movie Description: {data.description}</h1>    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Moviedescription