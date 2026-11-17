import { 
  X, 
  Send,
  Lock,
} from "lucide-react";

const SupportWorkspaceModal = ({ 
  selectedRequest, 
  setSelectedRequest, 
  isInternalNote, 
  setIsInternalNote,
  replyText,
  setReplyText,
  handleSendReply
}) => {
  if (!selectedRequest) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl border border-ink-line">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-ink-line p-6 bg-surface">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-bold text-ink">{selectedRequest.subject}</h2>
              <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                  selectedRequest.status === "Resolved" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" :
                  "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
              }`}>
                {selectedRequest.status}
              </span>
            </div>
            <p className="text-sm text-ink-soft">
              {selectedRequest.id} · Opened by {selectedRequest.user} ({selectedRequest.userType})
            </p>
          </div>
          <button onClick={() => setSelectedRequest(null)} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body (Split View) */}
        <div className="flex flex-1 overflow-hidden bg-canvas">
          
          {/* Left: Conversation (Chat) */}
          <div className="flex flex-1 flex-col border-r border-ink-line">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {selectedRequest.messages.map((msg) => {
                const isUser = msg.type === "USER";
                const isInternal = msg.type === "INTERNAL_NOTE";
                
                return (
                  <div key={msg.id} className={`flex flex-col ${isUser ? "items-start" : "items-end"}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-ink">{msg.sender}</span>
                      <span className="text-[10px] text-ink-faint">{msg.time}</span>
                    </div>
                    
                    <div className={`p-3 rounded-xl max-w-[85%] text-sm ${
                      isUser ? "bg-surface border border-ink-line text-ink" : 
                      isInternal ? "bg-yellow-50 border border-yellow-200 text-yellow-900" :
                      "bg-ink text-canvas"
                    }`}>
                      {isInternal && (
                        <div className="flex items-center gap-1 mb-1 text-[10px] font-bold uppercase tracking-wider text-yellow-700">
                          <Lock className="h-3 w-3" /> Internal Note
                        </div>
                      )}
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reply Box */}
            {selectedRequest.status !== "Resolved" && (
              <div className="border-t border-ink-line p-4 bg-surface">
                <div className="flex gap-2 mb-2">
                  <button 
                    onClick={() => setIsInternalNote(false)}
                    className={`text-xs font-medium px-3 py-1 rounded-md transition ${!isInternalNote ? "bg-ink text-canvas" : "text-ink-soft hover:bg-ink/5"}`}
                  >
                    Public Reply
                  </button>
                  <button 
                    onClick={() => setIsInternalNote(true)}
                    className={`text-xs font-medium px-3 py-1 rounded-md transition flex items-center gap-1 ${isInternalNote ? "bg-yellow-100 text-yellow-800" : "text-ink-soft hover:bg-ink/5"}`}
                  >
                    <Lock className="h-3 w-3" /> Internal Note
                  </button>
                </div>
                <div className="flex gap-2">
                  <textarea 
                    rows="2"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={isInternalNote ? "Add a private note for staff..." : "Type your reply to the user..."}
                    className="flex-1 rounded-xl border border-ink-line bg-canvas p-3 text-sm text-ink outline-none focus:border-ink/30 resize-none"
                  />
                  <button 
                    onClick={handleSendReply}
                    disabled={!replyText}
                    className="flex h-full w-12 items-center justify-center rounded-xl bg-ink text-canvas hover:opacity-90 disabled:opacity-50"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Ticket Details */}
          <div className="w-72 bg-surface p-6 space-y-6 hidden md:block">
            <div>
              <h3 className="text-xs font-medium text-ink-faint uppercase mb-2">Ticket Details</h3>
              <dl className="space-y-3 text-sm">
                <div><dt className="text-ink-soft">Category</dt><dd className="font-medium text-ink">{selectedRequest.category}</dd></div>
                <div><dt className="text-ink-soft">Priority</dt><dd className="font-medium text-ink">{selectedRequest.priority}</dd></div>
                <div><dt className="text-ink-soft">Assigned To</dt><dd className="font-medium text-ink">{selectedRequest.assignedTo}</dd></div>
              </dl>
            </div>

            <div className="border-t border-ink-line pt-4">
              <h3 className="text-xs font-medium text-ink-faint uppercase mb-2">User Info</h3>
              <p className="font-medium text-ink">{selectedRequest.user}</p>
              <p className="text-xs text-ink-soft mb-2">{selectedRequest.email}</p>
              <button className="text-xs font-medium text-ink hover:underline">View Profile →</button>
            </div>

            {selectedRequest.status !== "Resolved" && (
              <div className="border-t border-ink-line pt-4">
                <button className="w-full rounded-md border border-ink-line bg-canvas py-2 text-sm font-medium text-ink hover:bg-ink/5">
                  Mark as Resolved
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SupportWorkspaceModal;