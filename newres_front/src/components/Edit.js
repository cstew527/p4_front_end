import React, { useState } from 'react'

const Edit = (props) => {
  const [resolution, setResolution] = useState({...props.resolution})


    const handleChange = (event) => {
        setResolution({...resolution, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(resolution)
    }


  return (
    <>
      <details>
        <summary>Edit Resolution</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={resolution.title}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="image">Image: </label>
          <input
            type="text"
            name="image"
            value={resolution.image}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            value={resolution.description}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            name="category"
            value={resolution.category}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="accomplished">accomplished: </label>
          <input
            type="checkbox"
            name="accomplished"
            value={resolution.accomplished}
            onChange={handleChange}
          />
          <br/>
          <br/>
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
