import React, { useState, useEffect } from 'react'
import axios from "axios"
import Add from './components/Add.js'
import Edit from './components/Edit.js'
import './App.css'

const App = () => {

  const [resolution, setResolution] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  const getResolution = () => {
    axios.get('https://nye-resolutions.herokuapp.com/api/resolutions')
    .then((res) => {
      console.log(res.data)
      setResolution(res.data)
    })
  }

  
  const handleCreate = (addResolution) => {
    axios.post('https://nye-resolutions.herokuapp.com/api/resolutions', addResolution)
    .then((res) => {
      console.log(res)
      getResolution()
    })
  }
  

  const handleDelete = (event) => {
    axios.delete('https://nye-resolutions.herokuapp.com/api/resolutions/' + event.target.value)
    .then((res) => {
      console.log(res.data)
      getResolution()
    })
  }

  const handleUpdate = (editResolution) => {
    console.log(editResolution)
    axios
      .put('https://nye-resolutions.herokuapp.com/api/resolutions/' + editResolution.id, editResolution)
      .then((response) => {
        getResolution()
      })
  }

  useEffect(()=> {
    getResolution()
  }, [])

  
  return (
    <>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <h1 class="navbar-brand">Resolution App</h1>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange} value={searchInput}/>
          <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <Add handleCreate = {handleCreate}/>
      <br/>
      <div className='container mt-5'>
        <div className='row'>
          {resolution.filter((resolution) => {
            if (searchInput === '') {
              return resolution
            } else if (resolution.title.toLowerCase().includes(searchInput.toLowerCase())) {
              return resolution
            }
          }).map((resolution, index) => {
            return (
              <div className='col-md-6 col-xl-4 mb-4'>
                <div className='card bg-light' key={index} style={{maxWidth:"500px"}}>
                  <div className='card-header'>
                    <h5 className='card-title'>{resolution.title}</h5>
                  </div>
            
                  <img src={resolution.image} className='card-img-top' alt=''/>
                  <div className='card-body'>
                    <p className='card-text text-truncate' id='title'>{resolution.description}</p>
                    <button type="button" class="btn btn-info btn-sm">Read more</button>
                    <p className='text-muted'>Category: <span className='badge badge-primary'>{resolution.category}</span></p>
                  </div>
                  <div className='card-footer'>
                    <p className='card-text'>Completed: {resolution.accomplished ? "Done" : "Not done"}</p>
                  </div>
                <div class="cbutton container">
                  <Edit handleUpdate= {handleUpdate} id = {resolution.id} resolution={resolution}/>
                  <button class="btn btn-outline-dark mt-2" onClick={handleDelete} value ={resolution.id}>Delete</button>
                </div>
                </div>


                </div>
            )
          })}
        </div>
      </div>
    </>
  )
  
}

export default App
