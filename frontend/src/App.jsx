import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard"
import EmployeeDashboard from "./pages/employeeDashboard";
import RoleBasedRoutes from "./utils/RoleBasedRoutes";
import PrivateRoutes from "./utils/PrivateRoutes";
import AdminSummary from "./components/dashboard/AdminSummary";
import DepartmentList from "./components/department/DepartmentList";
import AddDepartment from "./components/department/AddDepartment";
import EditDepartment from "./components/department/EditDepartment";
import List from "./components/employee/List";
import Addemp from "./components/employee/Addemp";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard"></Navigate>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={
          <PrivateRoutes requiredRole="admin">
            <RoleBasedRoutes>
              <AdminDashboard />
            </RoleBasedRoutes>
          </PrivateRoutes>
        }>
          <Route index element={<AdminSummary/>}></Route>

          <Route path="/admin-dashboard/departments" element={<DepartmentList/>}></Route>
          <Route path="/admin-dashboard/add-department" element={<AddDepartment />}></Route>
          <Route path="/admin-dashboard/department/:id" element={<EditDepartment />}></Route>
          <Route path="/admin-dashboard/employees" element={<List />}></Route>
          <Route path="/admin-dashboard/add-employees" element={<Addemp />}></Route>


        </Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
