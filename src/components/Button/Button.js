import React from 'react'

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