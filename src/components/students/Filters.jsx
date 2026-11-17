import React from 'react'

const Filters = ({ 
    learningFilter, 
    setLearningFilter, 
    accountFilter, 
    setAccountFilter 
}) => {
    
  return (
    <>
              <select 
            value={learningFilter}
            onChange={(e) => setLearningFilter(e.target.value)}
            className="hidden sm:block h-10 rounded-xl border border-ink-line bg-canvas px-3 text-sm text-ink outline-none"
          >
            <option value="All">All Learning</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Inactive">Inactive</option>
          </select>

          <select 
            value={accountFilter}
            onChange={(e) => setAccountFilter(e.target.value)}
            className="hidden sm:block h-10 rounded-xl border border-ink-line bg-canvas px-3 text-sm text-ink outline-none"
          >
            <option value="All">All Accounts</option>
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
            <option value="Pending">Pending</option>
          </select>
    </>
  )
}

export default Filters