import React, {useState} from 'react'
import { motion } from 'framer-motion'

import './hero.scss' 
import Movie from '../Movie/Movie'
import VideoTrailer from '../VideoTrainer/VideoTrailer'
import { RegButton } from '../Button/Button'
import {opacity,movieHero,textContainer, textItem} from '../../animation/animation'


const Hero = ({movie}) => {

  const [open, setOpen] = useState(false)

  return (
    <motion.div 
        variants={opacity}
        initial='hidden'
        animate='visible'
        className='hero' 
        style={{
        backgroundImage: movie?.backdrop_path && `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
        <div className="container">
            <motion.div 
                className="hero__text"
                variants={textContainer}
                initial='hidden'
                animate='visible'
            >
                <motion.div variants={textItem} className="hero__title">{movie.name||movie.title}</motion.div>
                <motion.div variants={textItem} className="hero__des">{movie.overview}</motion.div>            
                <motion.div variants={textItem}>

                {<RegButton setOpen={setOpen}/>}
                </motion.div>
                {open && <VideoTrailer setOpen={setOpen}/>}
            </motion.div>
            <motion.div
                variants={movieHero}
                initial='hidden'
                animate='visible'
            >
                <Movie movie={movie} index={1}/>            

            </motion.div>
           
        </div>

        
    </motion.div>

  )
}

export default Hero