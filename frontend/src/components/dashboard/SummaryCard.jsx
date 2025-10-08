import React from 'react'

const SummaryCard = ({ icon, text, number }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-60">
      <div className="text-blue-600 text-3xl">
        {icon}
      </div>
      <div>
        <p className="text-gray-600 text-sm sm:text-base font-medium">{text}</p>
        <p className="text-xl sm:text-2xl font-bold text-gray-800">{number}</p>
      </div>
    </div>
  )
}

export default SummaryCard
