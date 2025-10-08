import React from 'react'
import SummaryCard from './SummaryCard'
import {
  FaBuilding,
  FaCheckCircle,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaTimesCircle,
  FaUsers
} from 'react-icons/fa'

const AdminSummary = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">Dashboard Overview</h3>

      {/* General Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <SummaryCard icon={<FaUsers />} text="Total Employees" number={15} />
        <SummaryCard icon={<FaBuilding />} text="Total Department" number={5} />
        <SummaryCard icon={<FaMoneyBillWave />} text="Monthly Salary" number={50000} />
      </div>

      {/* Leave Section */}
      <div>
        <h4 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">Leave Details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard icon={<FaUsers />} text="Leave Applied" number={5} />
          <SummaryCard icon={<FaCheckCircle />} text="Leave Approved" number={6} />
          <SummaryCard icon={<FaHourglassHalf />} text="Leave Pending" number={3} />
          <SummaryCard icon={<FaTimesCircle />} text="Leave Rejected" number={3} />
        </div>
      </div>
    </div>
  )
}

export default AdminSummary
