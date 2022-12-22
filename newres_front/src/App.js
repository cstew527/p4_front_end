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
            <h4>Title: {resolution.title}</h4>
            <h4>Image: {resolution.image}</h4>
            <h4>Description: {resolution.description}</h4>
            <h4>Category: {resolution.category}</h4>
            <h4>Accomplished: {resolution.accomplished}</h4>
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
