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
            <option value="Published">Published</option>
            <option value="Pending">Pending Review</option>
            <option value="Draft">Draft</option>
            <option value="Suspended">Suspended</option>
        </select>
    </>
  )
}

export default Filters