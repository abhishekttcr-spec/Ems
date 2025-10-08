import React from 'react'
import { UseAuth } from '../../context/authContext'

const Navbar = () => {
  const { User, logout } = UseAuth()

  return (
    <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Welcome, {User?.name || 'Guest'}
        </h1>
      </div>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </header>
  )
}

export default Navbar
