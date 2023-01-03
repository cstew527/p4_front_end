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
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>Title: </label><br/>
              <input type='text' name='title' value={resolution.title} onChange={handleChange}/>
            </div>
            <div className='mb-3'>
              <label htmlFor='image' className='form-label'>Image: </label><br/>
              <input type='url' name='image' value={resolution.image} onChange={handleChange}/>
            </div>
            <div className='mb-3'>
              <label htmlFor='description' className='form-label'>Description: </label><br/>
              <input type='text' name='description' value={resolution.description} onChange={handleChange}/>
            </div>
            <div className='mb-3'>
              <label htmlFor='category' className='form-label'>Category: </label><br/>
              <input type='text' name='category' value={resolution.category} onChange={handleChange}/>
            </div>
            <div className='mb-3 form-check checkb'>
              <label htmlFor='accomplished' className='form-check-input'>Accomplished: </label><br/>
              <input type='checkbox' name='accomplished' checked={resolution.accomplished} onChange={() => setResolution({...resolution, accomplished: !resolution.accomplished})}/><br/>
            </div>
            <input className='btn btn-light' type='submit'/>
          </form>
        </details>
  </div>
  )
}

export default Edit
