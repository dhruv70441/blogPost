import React, { useState } from 'react';

const Login = () => {
  const [data, setData] = useState({
    email:'',
    password:''
  })

  const loginUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={loginUser}
        className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col space-y-4"
      >
        <h2 className="text-4xl font-bold text-center text-[#f1356d]">Login</h2>

        <label className="text-gray-600 font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f1356d]"
          value={data.email}
          onChange={(e) => setData({...data, email: e.target.value})}
        />

        <label className="text-gray-600 font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f1356d]"
          value={data.password}
          onChange={(e) => setData({...data, password: e.target.value})}

        />

        <button
          type="submit"
          className="mt-4 bg-white border-2 border-[#f1356d] text-[#f1356d] py-2 rounded hover:bg-[#f1356d] hover:text-white transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
