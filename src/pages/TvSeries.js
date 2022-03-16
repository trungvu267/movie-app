import React from 'react'

import requests from '../api/requests'

import Nav from '../components/Nav/Nav'
import Row from '../components/Row/Row'
const TvSeries = () => {
  return (
    <div>
        <Nav />
        <Row fetchUrl={requests.getPopularTv} search={requests.searchTv}/>
    </div>
  )
}

export default TvSeries