import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()
    const handleClicks = () => {
      fetch('http://localhost:8000/blogs/' + blog.id,{
        method:'delete'

      }).then(()=>{
        navigate('/')
      })
    }

  return (
    <div>
        {isPending && <div>Loading</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2 className='text-2xl font-bold text-[#f1356d] mb-3'>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div className=' my-5'>{blog.body}</div>
                <button 
                  onClick={handleClicks}
                  className=' bg-[#f1356d] text-[#fff] border-0 p-2 rounded-lg cursor-pointer'
                >Delete</button>
            </article>
        )}
    </div>
  )
}

export default BlogDetails

