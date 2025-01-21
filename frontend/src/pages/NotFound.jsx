import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className=' mx-auto flex flex-col text-center'>
        <h2 
            className=' text-[#f1356d] font-bold text-9xl'
        >404</h2>
        <p
            className=' text-red-500 font-bold text-4xl my-8'  
        >Page Not Found😞</p>
        <Link 
            to='/'
            className='text-xl text-blue-400 underline font-bold' 
        > Back to the homepage...</Link>
    </div>
  )
}

export default NotFound