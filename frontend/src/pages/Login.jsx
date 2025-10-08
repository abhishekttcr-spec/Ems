import axios from 'axios'
import React, { useState } from 'react'
import { UseAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const { login } = UseAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", { email, password })
            if (response.data.success) {
                
                login(response.data.User)
                localStorage.setItem("token", response.data.token)
                if (response.data.User.role === "admin") {
                    navigate('/admin-dashboard')
                } else {
                    navigate('/employee-dashboard')
                }
            }

        } catch (error) {
            if (error.response && !error.response.data.success) {
                setError(error.response.data.error)
            } else {
                setError("Server Error")
            }

        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
            <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-8">
                {/* Header */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Employee Management System
                </h1>
                <p className="text-center text-gray-500 mb-6">Welcome back! Please log in.</p>
                {error && <p className='text-red-600'>{error}</p>}

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-200 shadow-md"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-6 text-sm text-center text-gray-600">
                    <p>
                        Don’t have an account?{" "}
                        <a href="#" className="text-indigo-600 hover:underline font-medium">
                            Sign Up
                        </a>
                    </p>
                    <p className="mt-2">
                        <a href="#" className="text-indigo-600 hover:underline">
                            Forgot Password?
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Login
