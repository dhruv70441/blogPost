import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [isPending, setIsPending] = useState(false);

  const validateForm = () => {
    if (!data.firstName.trim()) {
      toast.error("First Name is required");
      return false;
    }
    if (!data.lastName.trim()) {
      toast.error("Last Name is required");
      return false;
    }
    if (!data.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      toast.error("Enter a valid email address");
      return false;
    }
    if (!data.password.trim()) {
      toast.error("Password is required");
      return false;
    }
    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsPending(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/v1/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message || "Something went wrong. Please try again.");
      }

      toast.success("User registered successfully");
      setData({ firstName: '', lastName: '', email: '', password: '' });
      navigate('/login');

    } catch (err) {
      toast.error(err.message || "Failed to register. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="max-w-md my-0 mx-auto text-center">
      <h2 className="text-md font-bold text-[#f1356d] mb-7">
        Register New Account
      </h2>
      <form onSubmit={registerUser}>
        <label htmlFor="firstName" className="text-left block">
          First Name:
        </label>
        <input
          type="text"
          required
          name="firstName"
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          className="border-[1px] border-[#ddd] rounded-md w-full py-2 px-4 my-2 mx-0 box-border block"
        />

        <label htmlFor="lastName" className="text-left block">
          Last Name:
        </label>
        <input
          type="text"
          required
          name="lastName"
          value={data.lastName}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          className="border-[1px] border-[#ddd] rounded-md w-full py-2 px-4 my-2 mx-0 box-border block"
        />

        <label htmlFor="email" className="text-left block">
          Email:
        </label>
        <input
          type="email"
          required
          name="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="border-[1px] border-[#ddd] rounded-md w-full py-2 px-4 my-2 mx-0 box-border block"
        />

        <label htmlFor="password" className="text-left block">
          Password:
        </label>
        <input
          type="password"
          required
          name="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="border-[1px] border-[#ddd] rounded-md w-full py-2 px-4 my-2 mx-0 box-border block"
        />

        {!isPending && (
          <button className="bg-[#f1356d] text-[#fff] border-0 p-2 rounded-lg cursor-pointer w-full mt-3">
            Register
          </button>
        )}
        {isPending && (
          <button
            disabled
            type="submit"
            className="bg-[#f1356d] text-[#fff] border-0 p-2 rounded-lg cursor-pointer w-full mt-3"
          >
            Registering...
          </button>
        )}
      </form>
    </div>
  );
};

export default Register;
