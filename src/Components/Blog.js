import React, { useState} from 'react'

function Blog() {
  const[blog, setBlog] = useState([]);
  
  // // const handleSubmit = (data) => {

  // // }

  return(
    <div className='lets-blog'>
        <h1>Blog on your experiences</h1>
        <form id='blogForm'>
            <label>Category</label>
            <select>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="challenging">Challenging</option>
                <option value="guide">Hiking Guide</option>
            </select>

            <label>Title:</label>
            <input type="text" placeholder=""/>

            <label>Blog message:</label>
            <textarea required></textarea>
            
            <button id='blog-btn'>Post</button>
        </form>
    </div>
  )
}

export default Blog;