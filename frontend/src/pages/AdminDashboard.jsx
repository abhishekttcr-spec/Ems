import React from 'react'
import { UseAuth } from '../context/authContext'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminSidebar from '../components/dashboard/AdminSidebar'
import Navbar from '../components/dashboard/Navbar'
import AdminSummary from '../components/dashboard/AdminSummary'

const AdminDashboard = () => {
  const {User,loading} = UseAuth()

 const navigate = useNavigate()
 if(loading){
  return <div>Loading....</div>
 }
 if(!User){
  navigate('/login')
 }
  return (
    <div>
      <AdminSidebar/>
      <div className='flex-1 ml-64 bg-gray-200'>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminDashboard
