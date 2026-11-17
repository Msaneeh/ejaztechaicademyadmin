import React from 'react'

const Filters = ({ statusFilter, setStatusFilter}) => {
  return (
    <>
        <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="hidden sm:block h-10 rounded-xl border border-ink-line bg-canvas px-3 text-sm text-ink outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
        </select>
    </>
  )
}

export default Filters;