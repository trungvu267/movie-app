import React,{useState, useEffect} from 'react'

import requests from '../api/requests'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'

import { UserContext } from '../App'

const Home = ({movie, setMovie, video, setVideo}) => {
   
  useEffect(() => {
      requests.getTrending()
        .then(res=>{
          const data =res.data.results
          const random = Math.floor(Math.random() * data.length-1);
          setMovie(data[random])
          return data[random]
        })
  }, [])
  useEffect(()=>{
    movie && requests.getVideo(movie.id)
      .then(res=>{
        const data = res.data.results
        setVideo(data)
      })
      .catch(err=>{
        console.log(err)
      })
  }, [movie])
  return (
    
    <UserContext.Provider value= {video}>
      <Nav/>
      <Hero movie= {movie} video= {video}/>
    </UserContext.Provider>
    
  )
}

export default Home