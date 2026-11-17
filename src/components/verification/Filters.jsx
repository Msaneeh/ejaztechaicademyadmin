

const Filters = ({ statusFilter, setStatusFilter }) => {
  return (
    <>
        <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="hidden sm:block h-10 rounded-xl border border-ink-line bg-canvas px-3 text-sm text-ink outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Under Review">Under Review</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
        </select>
    </>
  )
}

export default Filters