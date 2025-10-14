import React, { useEffect, useState } from "react";
import { fetchDepartments } from "../../utils/EmployeeHelper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Addemp = () => {

    const [departments, setDepartments] = useState([])
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const getDepartments = async () => {


            const departments = await fetchDepartments()
            setDepartments(departments)
        }
        getDepartments();
    },[])

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === "image") {
            setFormData((prevData) => ({ ...prevData, [name]: files[0] }))
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }))
        }
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        const formDataObj = new FormData()
        Object.keys(formData).forEach((key) => {
            formDataObj.append(key, formData[key])
        })

        try {
            const response = await axios.post('http://localhost:3000/api/employee/add', formDataObj, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (response.data.success) {
                navigate("/admin-dashboard/employees")
            } else {
                alert(response.data.error || response.data.message || "Failed to add employee")
            }


        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error || error.response.data.message)
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-slate-200">
                <h2 className="text-3xl font-semibold text-slate-800 text-center mb-8">
                    Add New Employee
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handlesubmit}>
                    {/* Name */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Enter Name"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Employee Id */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Employee ID
                        </label>
                        <input
                            type="text"
                            name="employeeId"
                            onChange={handleChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="EMP123"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name="dob"
                            onChange={handleChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Gender
                        </label>
                        <select onChange={handleChange} name="gender" className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Marital Status */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Marital Status
                        </label>
                        <select name="maritalStatus" onChange={handleChange} className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                            <option value="">Select</option>
                            <option>Single</option>
                            <option>Married</option>
                        </select>
                    </div>

                    {/* Designation */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Designation
                        </label>
                        <input
                            type="text"
                            name="designation"
                            onChange={handleChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Software Engineer"
                        />
                    </div>

                    {/* Department */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Department
                        </label>
                        <select onChange={handleChange} name="department" className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                            <option value="">Select Department</option>
                            {departments.map(dep => (
                                <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Salary */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Salary
                        </label>
                        <input
                            type="number"
                            name="salary"
                            onChange={handleChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="50000"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="********"
                        />
                    </div>

                    {/* Role */}
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Role
                        </label>
                        <select name="role" onChange={handleChange} className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                            <option value="">Select Role</option>
                            <option>employee</option>
                            <option>Manager</option>
                            <option>Admin</option>
                        </select>
                    </div>

                    {/* Upload Image */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-slate-700 text-sm font-medium mb-2">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            accept="image/*"
                            className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 
                         file:rounded-lg file:border-0 file:text-sm file:font-medium 
                         file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 
                         cursor-pointer"
                        />
                    </div>

                    {/* Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-lg font-semibold shadow-md transition-all"
                        >
                            Add Employee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addemp;
