

const Filters = ({ severityFilter, setSeverityFilter }) => {
  return (
    <>
        <select 
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="hidden sm:block h-10 rounded-xl border border-ink-line bg-canvas px-3 text-sm text-ink outline-none"
          >
            <option value="All">All Severities</option>
            <option value="Informational">Informational</option>
            <option value="Warning">Warning</option>
            <option value="Critical">Critical</option>
        </select>
    </>
  )
}

export default Filters