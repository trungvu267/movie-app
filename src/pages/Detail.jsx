import React,{useState, useLayoutEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'

import requests from '../api/requests'
import Hero from '../components/Hero/Hero'
import Casts from '../components/Casts/Casts'

import { UserContext } from '../App'

const Detail = ({movie, setMovie, video, setVideo}) => {
    const {id} = useParams()
    const location = useLocation();

    const [casts, setCasts] = useState([])
    useLayoutEffect(()=>{
    const fetchDetal =   (location.pathname=== `/tvseries/${id}`)? (requests.getDetalTv(id)) :(requests.getDetalMovie(id))
    fetchDetal
      .then(res=>{
        setMovie(res.data)
        setVideo(res.data.videos.results)
        setCasts(res.data.credits.cast)
  })
    }
    ,[id, location.pathname])
  return (
    <UserContext.Provider value= {video}>
      <Hero movie={movie} video={video}/>
      <Casts casts={casts} />
    </UserContext.Provider>
  )
}

export default Detail