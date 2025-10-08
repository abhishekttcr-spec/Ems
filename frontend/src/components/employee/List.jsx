import React from 'react'
import { Link } from 'react-router-dom'
const List = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-100 min-h-screen">
      <div className="mb-6 text-center sm:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Manage Departments
            </h3>
            <p className="text-gray-500 mt-1">
              View, search, edit, or delete Employees easily.
            </p>
          </div>

          {/* Search and Add Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-4 rounded-lg shadow mb-8">
            <input
              type="text"
             
              
              placeholder="Search by department name..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Link
              to="/admin-dashboard/add-employees"
              className="px-6 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
            >
              + Add Employees
            </Link>
          </div>
    </div>
  )
}

export default List
