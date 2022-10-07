import React, { useState } from 'react'

function Blog() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const url = "http://localhost:3000/blog"
  const formData = {title,message}

  const handleAdd = (event) => {
    event.preventDefault();
    
    fetch(url, {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then(()=>{
      setTitle(" ")
      setMessage(" ")
    })
  } 

  return(
    <div className='lets-blog' onSubmit={handleAdd}>
        <h1>Blog on your experiences</h1>
        <form id='blogForm' onSubmit={handleAdd}>
            <label>Category</label>
            <select>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="challenging">Challenging</option>
                <option value="guide">Hiking Guide</option>
            </select>

            <label>Title:</label>
            <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)} required></input>

            <label>Blog message:</label>
            <textarea rows = "5" cols = "50"  value={message} onChange={(e)=>setMessage(e.target.value)} required>
            Blog away...</textarea>
            
            <button id='blog-btn'>Post</button>
        </form>
    </div>
  )
}

export default Blog;