import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  
  const { data: blogs, isPending, error } = useFetch('https://blogpost-rvau.onrender.com/api/v1/blogs/')
  
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  )
}

export default Home