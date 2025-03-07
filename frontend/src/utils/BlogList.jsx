import { Link } from "react-router-dom";
const BlogList = ({blogs, title}) => {
    return ( 
        <div>
        <h2 className='text-3xl'>{title}</h2>
            {blogs.map((blog)=>(
                <div key={blog._id} className='py-2 px-4 my-6 mx-0 border-b-2 border-[#fafafa]-800 hover:shadow-md hover:shadow-[#ccc]'>
                    <Link to={`/blogs/${blog._id}`}>
                        <h2 className='text-lg font-bold text-[#f1356d] mb-2'>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;