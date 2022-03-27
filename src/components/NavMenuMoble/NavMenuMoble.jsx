import React,{useEffect, useState} from 'react'
import {createPortal} from 'react-dom'
import { NavLink } from 'react-router-dom'


import './navMenuMoble.scss'

const NavMenuMoble = () => {
  return createPortal(
    <div className='menu_moble'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/tvseries">Tv Series</NavLink> 
    </div>,
    document.getElementById('menu')
  )
}

export default NavMenuMoble