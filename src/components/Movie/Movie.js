import React from 'react'
import { motion } from 'framer-motion'

import './movie.scss'

import {items} from '../../animation/animation'

const Movie = ({movie, index}) => {
  
  
  return (
    
      <motion.div 
        className='movie'
        custom={index}
        variants={items}
      >
        
            <motion.img
              whileHover={{
                scale: 1.1,
                filter: 'grayscale(40%)',
              }} 
              src={movie.poster_path &&`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
      </motion.div>

  )
}

export default Movie