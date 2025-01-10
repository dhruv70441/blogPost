import React, { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
  const [blogs, setBlogs] = useState([
    {title:'my new website', body:'Lorem ipsum dolor sit amet.', author:'me', id:1},
    {title:'welcome party', body:'Lorem ipsum dolor sit amet.', author:'yoshi', id:2},
    {title:'web dev top tips', body:'Lorem ipsum dolor sit amet.', author:'mario', id:3}
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => (blog.id !== id));
    setBlogs(newBlogs);
  }
  
  return (
    <div>
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
    </div>
  )
}

export default Home