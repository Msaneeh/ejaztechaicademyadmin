import { X, Send } from "lucide-react"

const CreateAnnouncementModal = ({ 
    isModalOpen, 
    setIsModalOpen, 
    title, 
    setTitle, 
    message, 
    setMessage, 
    audience, 
    setAudience, 
    channels, 
    toggleChannel,
    handlePublish
}) => {

  return (
    <>
          {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-surface shadow-2xl border border-ink-line">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-ink-line p-6">
              <div>
                <h2 className="text-xl font-bold text-ink">New Announcement</h2>
                <p className="text-sm text-ink-soft">Broadcast a message to platform users.</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 bg-canvas space-y-5">
              
              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink">Announcement Title *</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. New Courses Available"
                  className="w-full rounded-xl border border-ink-line bg-surface px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" 
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink">Message Content *</label>
                <textarea 
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your announcement here..."
                  className="w-full rounded-xl border border-ink-line bg-surface p-4 text-sm text-ink outline-none focus:border-ink/30 resize-none" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink">Target Audience</label>
                  <select 
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="w-full rounded-xl border border-ink-line bg-surface px-4 py-2 text-sm text-ink outline-none"
                  >
                    <option>All Users</option>
                    <option>All Students</option>
                    <option>All Tutors</option>
                    <option>Verified Tutors</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink">Delivery Channels</label>
                  <div className="flex items-center gap-4 mt-2">
                    <label className="flex items-center gap-2 text-sm text-ink">
                      <input 
                        type="checkbox" 
                        checked={channels.includes("in-app")} 
                        onChange={() => toggleChannel("in-app")}
                        className="h-4 w-4 rounded border-ink-line text-ink" 
                      />
                      In-app
                    </label>
                    <label className="flex items-center gap-2 text-sm text-ink">
                      <input 
                        type="checkbox" 
                        checked={channels.includes("email")} 
                        onChange={() => toggleChannel("email")}
                        className="h-4 w-4 rounded border-ink-line text-ink" 
                      />
                      Email
                    </label>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="border-t border-ink-line bg-surface p-4 flex items-center justify-between">
               <button onClick={() => setIsModalOpen(false)} className="rounded-md px-4 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5">
                Cancel
              </button>
              <button 
                onClick={handlePublish}
                disabled={!title || !message}
                className="flex items-center gap-2 rounded-md bg-ink px-6 py-2 text-sm font-medium text-canvas hover:opacity-90 disabled:opacity-50 transition"
              >
                <Send className="h-4 w-4" /> Publish Announcement
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateAnnouncementModal


