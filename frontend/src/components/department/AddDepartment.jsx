import React, { useState } from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'

const AddDepartment = () => {
    const [department, setDepartment] = useState({
        dep_name: '',
        description: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        try {
            const response = await axios.post('http://localhost:3000/api/department/add', department, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (response.data.success) {
                navigate("/admin-dashboard/departments")
            }


        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error)
            }
        } finally {
            setIsSubmitting(false);
        }
    }


    return (
        <div className="p-6 md:p-10 bg-gray-100 min-h-screen">

            <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">Add Department</h3>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-2xl mx-auto">

                    <div className="mb-6">
                        <label htmlFor="dep_name" className="block text-sm font-medium text-gray-700 mb-2">
                            Department Name
                        </label>
                        <input
                            type="text"
                            name="dep_name"
                            onChange={handleChange}
                            placeholder="Enter department name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            onChange={handleChange}
                            rows="4"
                            placeholder="Enter department description"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>


                    <div className="text-right">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                        >
                            {isSubmitting ? 'Adding...' : 'Add Now'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddDepartment
