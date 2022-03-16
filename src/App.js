import './App.scss';
import React, {useState,createContext} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import Detail from './pages/Detail';

export const UserContext = createContext()

const App = () => {
  
  const [movie, setMovie] = useState({})
  const [video, setVideo] = useState(null)
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Home  movie={movie} setMovie= {setMovie} video={video} setVideo={setVideo}/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="tvseries" element={<TvSeries/>} />
          <Route path="movies/:id"  element={<Detail movie={movie} setMovie= {setMovie} video={video} setVideo={setVideo}/>} />
          <Route path="tvseries/:id"  element={<Detail movie={movie} setMovie= {setMovie} video={video} setVideo={setVideo}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App

