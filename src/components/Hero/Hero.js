import React, {useState, useContext} from 'react'
import { motion } from 'framer-motion'

import './hero.scss' 
import Movie from '../Movie/Movie'
import VideoTrailer from '../VideoTrainer/VideoTrailer'
import { RegButton } from '../Button/Button'
import {list, item} from '../../animation/animation'
import { UserContext } from '../../App'


const Hero = ({movie}) => {

  const [open, setOpen] = useState(false)
  


  return (
    <div className='hero' style={{
        backgroundImage: movie?.backdrop_path && `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
        <div className="container">
            <motion.div 
                className="hero__text"
                variants={list}
                initial='hidden'
                animate='visible'
            >
                <motion.div variants={item} className="hero__title">{movie.name||movie.title}</motion.div>
                <motion.div variants={item} className="hero__des">{movie.overview}</motion.div>            
                <motion.div variants={item}>

                {<RegButton setOpen={setOpen}/>}
                </motion.div>
                {open && <VideoTrailer setOpen={setOpen}/>}
            </motion.div>

            <Movie movie={movie}/>            
        </div>

        
    </div>

  )
}

export default Hero