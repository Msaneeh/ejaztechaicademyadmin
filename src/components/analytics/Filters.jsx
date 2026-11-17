import { Download } from "lucide-react"

const Filters = ({ dateRange, setDateRange }) => {
  return (
    <>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-lg border border-ink-line bg-surface p-1">
            {["7", "30", "90", "12m"].map(range => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                  dateRange === range ? "bg-ink text-canvas" : "text-ink-soft hover:bg-ink/5"
                }`}
              >
                {range === "12m" ? "12 Months" : `${range} Days`}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 rounded-md border border-ink-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
    </>
  )
}

export default Filters