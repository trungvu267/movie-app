import React,{useState} from 'react'
import './search.scss' 
const Search = ({setMovieSearch}) => {
  const [input, setInput] = useState('')
  const handleChange = (e) =>{
    setInput(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMovieSearch(input)
    setInput('')
  }
  
  return (
    <div className='container search'>
        <form className="field-container" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search..." className="field" onChange={handleChange} value={input}/>
            <div className="icons-container">
                <div className="icon-search"></div>
                <div className="icon-close">
                <div className="x-up"></div>
                <div className="x-down"></div>
                </div>
            </div>
        </form>

    </div>
  )
}

export default Search