import React,{useContext} from 'react'
import {createPortal} from 'react-dom'
import { motion } from 'framer-motion'
import YouTube from 'react-youtube'

import './video_trailer.scss'

import { UserContext } from '../../App'
import { videoEffect } from '../../animation/animation'

const VideoTrailer = ({setOpen}) => {

    const video = useContext(UserContext)

    const officialTrailer = video.find(item=>(item.name= 'Official Trailer' || item.type === 'Trailer'))

    
    const opts = {
        height: '390',
        width: '640',
    }

    const handleBtnClose = () =>{
        setOpen(false)
    }

    const onReady = (event)=>{
        event.target.pauseVideo();
    }
    
    
    return createPortal(
        <div className='video_trailer'>
            <motion.div 
                
                variants={videoEffect}
                initial='hidden'
                animate='visible'
                transition={{duration: .45}}
                
            >
                <div className="close" onClick={handleBtnClose}>X</div>
                <YouTube videoId={video.length === 0 ? 'zdp4ZftO_vo' : officialTrailer.key||video[0].key} opts={opts} onReady={onReady}/>
               
            </motion.div>
        </div>,
        document.getElementById('trailer')
    )
}

export default VideoTrailer