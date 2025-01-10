import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-5 flex items-center max-w-[600px] mx-auto border-b border-[#f2f2f2]'>
        <h1 className='text-[#f1356d] text-4xl font-bold'>The blogPost</h1>
        <div className='ml-auto'>
            <a href="/" className='ml-4 no-underline p-3 hover:text-[#f1356d]'>Home</a>
            <a href="/create" className='ml-4 no-underline p-3 hover:text-[#f1356d]'>New Blog</a>
        </div>
    </nav>
  )
}

export default Navbar;