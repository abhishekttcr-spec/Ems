import axios from "axios";
import { useNavigate } from "react-router-dom"

export const fetchDepartments = async () => {
  let departments
  try {
    const response = await axios.get("http://localhost:3000/api/department", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.data.success) {
      departments = response.data.departments
    }

  } catch (error) {
    if (error.response && !error.response.data.success) {
      alert(error.response.data.error);
    }
  } 
  return departments
};

export const EmployeeButtons = ({ _id }) => {
  const navigate = useNavigate()


  // const handleDelete = async (id) => {
  //     const confirm = window.confirm("Do you want to delete this Department?")
  //     if (confirm) {


  //         try {

  //             const response = await axios.delete(`http://localhost:3000/api/department/${id}`, {
  //                 headers: {
  //                     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //                 },
  //             });

  //             if (response.data.success) {
  //                 onDepartmentDelete(id)
  //             }
  //         } catch (error) {
  //             if (error.response && !error.response.data.success) {
  //                 alert(error.response.data.error);
  //             } else {
  //                 console.error("Error fetching department:", error);
  //             }
  //         }
  //     }
  // };

  return (
    <div className="flex space-x-2">
      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm sm:text-base"
        onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
      >
        View
      </button>
      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm sm:text-base" >
        Edit
      </button>
      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm sm:text-base" >
        Salary
      </button>
      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm sm:text-base" >
        Leave
      </button>
    </div>
  )
};