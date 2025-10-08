import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUsers
} from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white flex flex-col fixed top-0 left-0 shadow-lg z-50">
      <div className="px-6 py-4 border-b border-gray-700">
        <h3 className="text-xl font-bold">Employee MS</h3>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-md transition duration-200 ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
            }`
          }
          end
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/employees"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-md transition duration-200 ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
            }`
          }
        >
          <FaUsers />
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/departments"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-md transition duration-200 ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
            }`
          }
        >
          <FaBuilding />
          <span>Departments</span>
        </NavLink>

        <NavLink
          to="/admin-leave"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-md transition duration-200 ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
            }`
          }
        >
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>

        <NavLink
          to="/admin-salary"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-md transition duration-200 ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
            }`
          }
        >
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/admin-settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-md transition duration-200 ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
            }`
          }
        >
          <FaCogs />
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default AdminSidebar
