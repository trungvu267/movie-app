import React from 'react'

import './casts.scss'

import { motion } from 'framer-motion'
import { variants } from '../../animation/animation'

const Casts = ({casts}) => {
    const castItem =casts.filter((e,i)=> i<=5 ? e: null)
    const castElemet = castItem.map((cast, index)=>(
        <Cast key={cast.id} cast={cast} index={index}/>  
    ))
  return (
    <div className='casts'>
        <div className="container"><h1>Cast</h1></div>
        <div className="container">
            {castElemet}
        </div>
    </div>
  )
}

const Cast = ({cast, index}) =>{
  
    return (
        <motion.div 
        className='cast'
        custom={index}
        initial='hidden'
        animate="visible"
        variants={variants}
        whileHover={{
            y: -15,
            x:15,
            transition: { duration: 0.3 },
          }}
      >
        <img
             src={cast.profile_path &&`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.profile_path} 
        />
            <div className='cast__original'>{cast.original_name}</div>
            <div className='cast__character'>{cast.character.split('/')[0]}</div>
      </motion.div>
    )
}

export default Casts