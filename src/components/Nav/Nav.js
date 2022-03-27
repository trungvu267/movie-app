import React, {useState, useEffect, useRef}  from 'react'
import { Outlet, NavLink, useLocation} from "react-router-dom";
import { motion } from 'framer-motion'
import { nav } from '../../animation/animation';
import { Burger } from '../Button/Button';


import './nav.scss'
import NavMenuMoble from '../NavMenuMoble/NavMenuMoble';

const Nav = () => {

  const location = useLocation()
  console.log(location)
  const [scroll, setState] = useState(window.scrollY)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const ref = useRef(0)
  const navEffect =  ref.current >= scroll ? nav.visible : nav.hidden
  const [active, setActive] = useState(false)
  
  const handleScroll = () =>{
    setState(window.scrollY)
  }
  const handleSize = () =>{
    setWindowWidth(window.innerWidth)
  }
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () =>{
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])
  useEffect(()=>{
    window.addEventListener('resize',handleSize)
    windowWidth >= 454 && setActive(false)
    return () =>{
      window.removeEventListener('resize', handleSize)
    }
  }, [windowWidth])

  useEffect(()=>{
    ref.current = scroll
  },[scroll])
    console.log(active)

  useEffect(()=>{
    setActive(false)
  },[location])
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
              <div>
                <Burger setActive={setActive} active={active}/>
              </div>
              {active ? <NavMenuMoble setActive={setState}/>: ''}
          </div>  
      </motion.nav>
    <Outlet/>
    </>
  )
}
export default Nav