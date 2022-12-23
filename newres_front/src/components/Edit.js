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
    <div class='container'>
        <details class="btn btn-dark">
          <summary>Edit Resolution</summary>
          <form class="mb-1" onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label" htmlFor="title">Title: </label>
                <br />
                <input type="text" name="title" value={resolution.title} onChange={handleChange}/>
            </div>

            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label" htmlFor="image">Image: </label>
                <br />
                <input type="text" name="image" value={resolution.image} onChange={handleChange}/>
            </div>

            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label" htmlFor="description">Description: </label>
                <br/>
                <input type="text" name="description" value={resolution.description} onChange={handleChange}/>
            </div>

            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label" htmlFor="category">category: </label>
                <br/>
                <input type="text" name="category" value={resolution.category} onChange={handleChange}/>
            </div>

              <label htmlFor="accomplished">accomplished: </label>
              <input type="checkbox" name="accomplished" value={resolution.accomplished} onChange={handleChange}/>
                <br/>
            <input class="btn btn-light" type="submit" />
                
          </form>
        </details>
  </div>
  )
}

export default Edit
