import React, { useState, useEffect } from 'react'
import axios from "axios"
import Add from './components/Add.js'
import Edit from './components/Edit.js'

const App = () => {

  const [resolution, setResolution] = useState([])
  const getResolution = () => {
    axios.get('http://localhost:8000/api/resolutions')
    .then((res) => {
      console.log(res.data)
      setResolution(res.data)
    })
  }

  
  const handleCreate = (addResolution) => {
    axios.post('http://localhost:8000/api/resolutions', addResolution)
    .then((res) => {
      console.log(res)
      getResolution()
    })
  }
  

  const handleDelete = (event) => {
    axios.delete('http://localhost:8000/api/resolutions/' + event.target.value)
    .then((res) => {
      console.log(res.data)
      getResolution()
    })
  }

  const handleUpdate = (editResolution) => {
    console.log(editResolution)
    axios
      .put('http://localhost:8000/api/resolutions/' + editResolution.id, editResolution)
      .then((response) => {
        getResolution()
      })
  }
  

  useEffect(()=> {
    getResolution()
  }, [])
  return (
    <>
      <h1>Resolution App</h1>
      <Add handleCreate = {handleCreate}/>
      <div className='resolution'>
        {resolution.map((resolution)=> {
          return (
          <div className='resolutions' key={'resolution.id'}>
            <div className='card' style={{width:"64rem"}}>
              <img src={resolution.image} className="card-img-top"/>
              <div className='card-body'>
                <h5 className='card-title'>{resolution.title}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{resolution.category}</h6>
                <p className='card-text'>{resolution.description}</p>
              </div>
              <h4>Title: {resolution.title}</h4>
              <h4>Image: {resolution.image}</h4>
              <h4>Description: {resolution.description}</h4>
              <h4>Category: {resolution.category}</h4>
              <h4>Accomplished: {resolution.accomplished}</h4>
            </div>
            <Edit handleUpdate= {handleUpdate} id = {resolution.id} resolution={resolution}/>
            <button onClick={handleDelete} value ={resolution.id}>x</button>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default App
