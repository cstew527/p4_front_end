import React, { useState, useEffect } from 'react'


//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
  let emptyResolution = { title: '', image: '', description: '', category: '', accomplished: false}
  const [resolution, setResolution] = useState(emptyResolution)

  const handleChange = (event) => {
    setResolution({...resolution, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(resolution)
  }
  return (
    <>
      <form onSubmit = {handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" value= {resolution.title} onChange = {handleChange} />
        <br />
        <br />
        <label htmlFor="image">Image: </label>
        <input type="text" name="image" value= {resolution.image} onChange = {handleChange} />
        <br />
        <br />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" value= {resolution.description} onChange = {handleChange} />
        <br />
        <br />
        <label htmlFor="category">Category: </label>
        <input type="text" name="category" value= {resolution.category} onChange = {handleChange} />
        <br />
        <br />
        <label htmlFor="accomplished">Accomplished: </label>
        <input type="checkbox" name="accomplished" value ={resolution.accomplished} onChange = {handleChange}/>
        <br/>
        <br/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
