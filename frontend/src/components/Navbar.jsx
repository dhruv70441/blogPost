import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='p-5 flex items-center max-w-[800px] mx-auto border-b border-[#f2f2f2]'>
        <h1 className='text-[#f1356d] text-4xl font-bold'>The blogPost</h1>
        <div className='ml-auto'>
            <Link to="/" className='ml-4 no-underline p-3 hover:text-[#f1356d]'>Home</Link>
            <Link to="/create" className='ml-4 no-underline p-3 hover:text-[#f1356d]'>New Blog</Link>
            <Link to="/register" className='ml-4 no-underline p-3 hover:text-[#f1356d]'>Register</Link>
            <Link to="/login" className='ml-4 no-underline p-3 hover:text-[#f1356d]'>Login</Link>
        </div>
    </nav>
  )
}

export default Navbar;