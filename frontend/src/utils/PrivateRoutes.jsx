import React from 'react'
import { UseAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'
const PrivateRoutes = ({children}) => {
 const {User,loading} = UseAuth()
if(loading){
    return <div>Loding....</div>
}
return User ? children : <Navigate to = '/login'/>

}

export default PrivateRoutes
