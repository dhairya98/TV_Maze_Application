import React,{useEffect, useState} from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'

function Navbar({movieItems, setmoviesList}) {
  const [searchValue, setSearchValue]=useState('')
  // console.log('=>',movieItems)

  function movieFinder(str){
    console.log('=>',movieItems)
    console.log('=>',str)

    setmoviesList(movieItems.filter(item=>item.name.toLowerCase().includes(str.toLowerCase())))
  }
  return (
    <div className='navbar'>
        <div className='navbar__container'>
            <div className="navbar__left">
                <Link to='/'><h1>TV Maze</h1></Link>
            </div>
            <div className="navbar__right">
                <SearchIcon className='icon' onClick={movieFinder}/>
                <input onChange={(e)=>movieFinder(e.target.value)}/>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar