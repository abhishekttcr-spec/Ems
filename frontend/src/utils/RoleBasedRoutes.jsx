import React from 'react'
import { UseAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const RoleBasedRoutes = ({children,requiredRole =[]}) => {
     const {User,loading} = UseAuth()

     if(loading){
      return <div>Loading....</div>
     }
     if(!requiredRole.includes(User.role)){
        <Navigate to="/unauthorized"/>
     }

  return User ? children : <Navigate to = '/login'/>
}

export default RoleBasedRoutes
