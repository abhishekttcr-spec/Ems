import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditDepartment = () => {
    const { id } = useParams();
    const [department, setDepartment] = useState({});
    const [depLoading, setDepLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDepartment = async () => {
            setDepLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/api/department/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (response.data.success) {
                    setDepartment(response.data.department);
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error);
                } else {
                    console.error("Error fetching department:", error);
                }
            } finally {
                setDepLoading(false);
            }
        };

        fetchDepartment();
    }, [id]); // ✅ Only run when `id` changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `http://localhost:3000/api/department/${id}`,
                department,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            if (response.data.success) {
                navigate("/admin-dashboard/departments");
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
            } else {
                console.error("Error updating department:", error);
            }
        }
    };

    return (
        <>
            {depLoading ? (
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                </div>
            ) : (
                <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
                    <div className="mb-8 text-center">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                            Edit Department
                        </h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                            <div className="mb-6">
                                <label
                                    htmlFor="dep_name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Department Name
                                </label>
                                <input
                                    type="text"
                                    name="dep_name"
                                    onChange={handleChange}
                                    value={department.dep_name || ""}
                                    placeholder="Enter department name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    onChange={handleChange}
                                    value={department.description || ""}
                                    rows="4"
                                    placeholder="Enter department description"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => navigate("/admin-dashboard/departments")}
                                    className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default EditDepartment;
