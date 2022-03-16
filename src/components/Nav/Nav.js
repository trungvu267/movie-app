import React, {useState, useEffect, useRef}  from 'react'
import { Outlet, NavLink} from "react-router-dom";
import { motion } from 'framer-motion'
import { nav } from '../../animation/animation';


import './nav.scss'

const Nav = () => {

  const [scroll, setState] = useState(window.scrollY)
  const ref = useRef(0)

  const handleScroll = () =>{
    setState(window.scrollY)
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () =>{
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])

  useEffect(()=>{
    ref.current = scroll
  },[scroll])
  const navEffect =  ref.current >= scroll ? nav.visible : nav.hidden

  return (
    <>
      <motion.nav className='nav'  animate={navEffect.animate} transition={navEffect.transition}>
          <div className="container">
              <div className="nav__logo">Movie-Box</div>
              <div className="nav__menu">  
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/tvseries">Tv Series</NavLink>                  
              </div>
          </div>  
      </motion.nav>
    <Outlet/>
    </>
  )
}

export default Nav