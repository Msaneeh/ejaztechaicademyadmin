import React from 'react'

const Filters = ({ activeTab, setActiveTab, unreadCount }) => {
  return (
    <>
            <div className="flex items-center gap-1 rounded-lg bg-canvas p-1">
          <button
            onClick={() => setActiveTab("all")}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${
              activeTab === "all" ? "bg-ink text-canvas" : "text-ink-soft hover:bg-ink/5"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("unread")}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition flex items-center gap-2 ${
              activeTab === "unread" ? "bg-ink text-canvas" : "text-ink-soft hover:bg-ink/5"
            }`}
          >
            Unread
            {unreadCount > 0 && (
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${activeTab === "unread" ? "bg-canvas/20" : "bg-red-100 text-red-600"}`}>
                {unreadCount}
              </span>
            )}
          </button>
        </div>
    </>
  )
}

export default Filters;