import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, DepartmentButtons } from "../../utils/DepartmentHelper";
import axios from "axios";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [search, setSearch] = useState("");
  const [depLoading, setDepLoading] = useState(false);

  const onDepartmentDelete = (id) => {
    setDepartments((prev) => prev.filter((dep) => dep._id !== id));
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      setDepLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/department", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.data.success) {
          let sno = 1;
          const data = response.data.departments.map((dep) => ({
            _id: dep._id,
            sno: sno++,
            dep_name: dep.dep_name,
            action: (
              <DepartmentButtons
                _id={dep._id}
                onDepartmentDelete={onDepartmentDelete}
              />
            ),
          }));
          setDepartments(data);
          setFilteredDepartments(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDepLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  //  Live search filtering
  useEffect(() => {
    const result = departments.filter((dep) =>
      dep.dep_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDepartments(result);
  }, [search, departments]);

  return (
    <>
      {depLoading ? (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="p-4 sm:p-6 md:p-10 bg-gray-100 min-h-screen">
          {/* Header */}
          <div className="mb-6 text-center sm:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Manage Departments
            </h3>
            <p className="text-gray-500 mt-1">
              View, search, edit, or delete departments easily.
            </p>
          </div>

          {/* Search and Add Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-4 rounded-lg shadow mb-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by department name..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Link
              to="/admin-dashboard/add-department"
              className="px-6 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
            >
              + Add Department
            </Link>
          </div>

          {/* Data Table */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow overflow-x-auto">
            <DataTable
              columns={columns}
              data={filteredDepartments}
              pagination
              highlightOnHover
              responsive
              striped
              customStyles={{
                headCells: {
                  style: {
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    backgroundColor: "#f9fafb",
                  },
                },
                cells: {
                  style: {
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentList;
