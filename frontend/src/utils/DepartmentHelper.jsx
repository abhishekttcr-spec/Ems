import { useNavigate } from "react-router-dom"
import axios from "axios";


export const columns = [
    {
        name: "S.No.",
        selector: (row) => row.sno
    },
    {
        name: "Department Name",
        selector: (row) => row.dep_name
    },
    {
        name: "Action",
        selector: (row) => row.action
    },
]

export const DepartmentButtons = ({ _id, onDepartmentDelete }) => {
    const navigate = useNavigate()


    const handleDelete = async (id) => {
        const confirm = window.confirm("Do you want to delete this Department?")
        if (confirm) {


            try {

                const response = await axios.delete(`http://localhost:3000/api/department/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (response.data.success) {
                    onDepartmentDelete(id)
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error);
                } else {
                    console.error("Error fetching department:", error);
                }
            }
        }
    };

    return (
        <div className="flex space-x-2">
            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm sm:text-base"
                onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
            >
                Edit
            </button>
            <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm sm:text-base" onClick={() => handleDelete(_id)}>
                Delete
            </button>
        </div>
    )
};