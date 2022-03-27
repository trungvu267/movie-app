import React from 'react'

import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

import './button.scss'

export const RegButton = ({setOpen}) => {
  const handleOpenBtn = () =>{
    setOpen(true)
  }
  
  return (
    <div  className='button__container' onClick={handleOpenBtn}>
        <div className='button'>
          Watch Trailer
        </div>
    </div>
  )
}

export const Loader = () =>{
  return(
    <div className='loader'></div>
  )
}

export const Burger = ({active,setActive}) =>{
  const handleActive = () =>{
    setActive(!active)
  }
  return(
    <div className='burger' onClick={handleActive}>
      {active ? <ImCross/> : <GiHamburgerMenu/>} 
    </div>
  )
}