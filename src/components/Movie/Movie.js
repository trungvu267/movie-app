import React from 'react'
import { motion } from 'framer-motion'

import './movie.scss'
import { variants } from '../../animation/animation'

const Movie = ({movie, index}) => {
  
  
  return (
    
      <motion.div 
        className='movie'
        custom={index}
        initial='hidden'
        animate="visible"
        variants={variants}
      >
        
            <motion.img
              whileHover={{
                scale: 1.1,
                filter: 'grayscale(40%)',
                transition: { duration: 0.45 },
              }} 
              src={movie.poster_path &&`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
      </motion.div>

  )
}

export default Movie