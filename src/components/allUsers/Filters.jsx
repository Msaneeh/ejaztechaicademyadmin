import React from 'react'

const Filters = ({ roleFilter, setRoleFilter, statusFilter, setStatusFilter }) => {
  return (
    <>
        <select 
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="hidden sm:block h-10 rounded-xl border border-ink-line bg-canvas px-3 text-sm text-ink outline-none"
          >
            <option value="All">All Roles</option>
            <option value="Student">Students</option>
            <option value="Tutor">Tutors</option>
            <option value="Admin">Admins</option>
          </select>

          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="hidden sm:block h-10 rounded-xl border border-ink-line bg-canvas px-3 text-sm text-ink outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Suspended">Suspended</option>
        </select>
    </>
  )
}

export default Filters