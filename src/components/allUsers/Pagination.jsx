import React from 'react'

const Pagination = ({ filteredUsers }) => {
  return (
    <>
        {/* Pagination */}
    <div className="flex items-center justify-between border-t border-ink-line px-6 py-3 text-xs text-ink-soft">
          <p>Showing 1–{filteredUsers.length} of 2,583 users</p>
          <div className="flex gap-1">
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5 disabled:opacity-50" disabled>Prev</button>
            <button className="rounded border border-ink-line bg-ink text-canvas px-2 py-1">1</button>
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5">2</button>
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5">3</button>
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5">4</button>
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5">5</button>
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5">6</button>
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5">7</button>
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5">8</button>
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5">9</button>
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5">10</button>
            <button className="rounded border border-ink-line px-2 py-1 hover:bg-ink/5">Next</button>
          </div>
    </div>
    </>
  )
}

export default Pagination