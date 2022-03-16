import React,{useEffect, useState} from 'react'
import './row.scss'

import { Link } from 'react-router-dom'

import InfiniteScroll from 'react-infinite-scroll-component'
import Movie from '../Movie/Movie'
import Search from '../Search/Search'
import { Loader } from '../Button/Button'


const Row = ({fetchUrl, search}) => {
const [movies, setMovies] = useState([])
const [page, setPage] = useState()
const [movieSearch, setMovieSearch] = useState(null)


const fetchMoreData = ()=>{
  const fetchData = !movieSearch ? fetchUrl(page) : search(movieSearch,page)
  fetchData
      .then(res=>{
        const currentPage = res.data.page
        setMovies([...movies, ...res.data.results])
        setPage(currentPage+1)
      })
  
}

useEffect(()=>{
  fetchUrl()
    .then(res=>{
      const data = res.data.results
      const currentPage = res.data.page

      setMovies(data)
      setPage(currentPage+1)
    })
    .catch(err=>{
      console.log(err)
    })
},[])

useEffect(()=>{
  movieSearch && search(movieSearch)
  .then( res=>{
    const data = res.data.results
    const currentPage = res.data.page
    
    setPage(currentPage+1)
    setMovies(data)
  })
  .catch(error=>{
    console.log(error)
  })
  
},[movieSearch])

  const movie_el = movies.map((movie, index)=>{
    return (
      <Link  to={`${movie.id}`} key={index}>
        <Movie movie={movie} index={index}/>
      </Link>  
    )
  })
  return (
    <>
      <Search movies={movies} setMovies={setMovies} movieSearch={movieSearch} setMovieSearch={setMovieSearch}/>
      <InfiniteScroll
          dataLength={movies.length}
          next={fetchMoreData}
          hasMore={true}
          loader={Loader}
      >
        <div className='row container'> 
            {movie_el}
           

        </div>

      </InfiniteScroll>
    </>
    
  )
}

export default Row