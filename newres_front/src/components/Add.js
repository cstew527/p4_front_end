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
    <div class="add-f">
      <form onSubmit = {handleSubmit}>
        <div class="mb-3 lal">
            <label htmlFor='title' for="formGroupExampleInput" class="form-label">Title</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="title" name="title" value= {resolution.title} onChange={handleChange}/>
        </div>
            
        <div class="mb-3 lal">
            <label htmlFor='image' for="formGroupExampleInput" class="form-label">image</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="image url" name="image" value= {resolution.image} onChange={handleChange}/>
        </div>

        <div class="mb-3 lal">
            <label htmlFor='description' for="formGroupExampleInput" class="form-label">Description</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="description" name="description" value= {resolution.description} onChange={handleChange}/>
        </div>

        <div class="mb-3 lal">
            <label htmlFor='category' for="formGroupExampleInput" class="form-label">Category</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="category" name="category" value= {resolution.category} onChange={handleChange}/>
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" id="flexSwitchCheckDefault" type="checkbox" name="accomplished" value ={resolution.accomplished} onChange = {handleChange}/>
            <label class="form-check-label" for="flexSwitchCheckDefault" htmlFor="accomplished">Accomplished: </label>
        </div>
            <br/>

        <input class="btn btn-dark btn-lg"type="submit"/>
        <br/>
        <br/>
      </form>
    </div>
  )
}

export default Add


{/* <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>


<div class="form-floating mb-3">
            <input type="title" class="form-control" id="floatingInput" placeholder="title"/>
            <input for="floatingInput" type="text" name="title" value= {resolution.title} onChange = {handleChange} />
      </div> */}