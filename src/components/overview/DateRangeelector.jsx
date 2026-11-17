
const DateRangeelector = ({ dateRange, setDateRange}) => {
    const days = [
            { id: "7", label: "7 Days" },
            { id: "30", label: "30 Days" },
            { id: "90", label: "90 Days" }
          ];

  return (
            <div className="flex items-center rounded-lg border border-ink-line bg-surface p-1">
          {days.map((range) => (
            <button
              key={range.id}
              onClick={() => setDateRange(range.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                dateRange === range.id 
                  ? "bg-ink text-canvas" 
                  : "text-ink-soft hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
  )
}

export default DateRangeelector;