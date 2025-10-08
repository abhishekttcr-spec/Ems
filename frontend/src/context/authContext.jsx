import axios from 'axios'
import React, { useState, createContext, useContext } from 'react'
import { useEffect } from 'react'



const userContext = createContext()

const AuthContext = ({ children }) => {
    const [User, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem('token')
                if (token) {
                    const response = await axios.get('http://localhost:3000/api/auth/verify', {
                        headers: {
                            "Authorization": `Bearer ${token}`


                        }

                    })

                    // console.log('Verify response:', response.data);
                    if (response.data.success) {
                        setUser(response.data.user)
                    }
                    else {
                        setUser(null)
                        setLoading(false)
                    }
                }
            } catch (error) {
                console.log(error);
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        verifyUser()
    }, [])

    const login = (User) => {
        setUser(User)
    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem('token')
    }

    return (
        <userContext.Provider value={{ User, login, logout, loading }}>
            {children}
        </userContext.Provider>
    )
}
export const UseAuth = () => useContext(userContext)
export default AuthContext
