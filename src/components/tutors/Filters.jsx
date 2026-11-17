import React from 'react'

const Filters = ({ verificationFilter, setVerificationFilter, statusFilter, setStatusFilter }) => {
  return (
    <>
              <select 
            value={verificationFilter}
            onChange={(e) => setVerificationFilter(e.target.value)}
            className="hidden sm:block h-10 rounded-xl border border-ink-line bg-canvas px-3 text-sm text-ink outline-none"
          >
            <option value="All">All Verifications</option>
            <option value="Verified">Verified</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>

          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="hidden sm:block h-10 rounded-xl border border-ink-line bg-canvas px-3 text-sm text-ink outline-none"
          >
            <option value="All">All Accounts</option>
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
          </select>
    </>
  )
}

export default Filters