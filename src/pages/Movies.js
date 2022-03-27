import React from 'react'

import requests from '../api/requests'

import Nav from '../components/Nav/Nav' 
import Row from '../components/Row/Row' 
const Movies = () => {
  return (
    <>
        <Row fetchUrl={requests.getPopularMovie} search = {requests.search}/>
    </>
  )
}

export default Movies