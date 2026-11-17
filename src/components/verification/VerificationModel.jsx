import { X, ExternalLink, FileText } from "lucide-react"

const VerificationModel = ({ 
    selectedRequest, 
    setSelectedRequest, 
    reviewDecision, 
    setReviewDecision, 
    reviewNote, 
    setReviewNote,
    handleDecision 
}) => {

  return (
    <>
          {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl border border-ink-line">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-ink-line p-6">
              <div>
                <h2 className="text-xl font-bold text-ink">Verification Review</h2>
                <p className="text-sm text-ink-soft">Request {selectedRequest.id} · Submitted {selectedRequest.submitted}</p>
              </div>
              <button onClick={() => setSelectedRequest(null)} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 bg-canvas grid gap-6 lg:grid-cols-2">
              
              {/* Left Column: Tutor Info */}
              <div className="space-y-6">
                <div className="rounded-xl border border-ink-line bg-surface p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/10 text-lg font-bold text-ink">
                      {selectedRequest.tutorName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{selectedRequest.tutorName}</h3>
                      <p className="text-sm text-ink-soft">{selectedRequest.email} · {selectedRequest.tutorId}</p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-2 gap-4 text-sm mt-6 border-t border-ink-line pt-4">
                    <div><dt className="text-ink-faint">Expertise</dt><dd className="font-medium text-ink">{selectedRequest.expertise}</dd></div>
                    <div><dt className="text-ink-faint">Qualification</dt><dd className="font-medium text-ink">B.Sc. Computer Science</dd></div>
                    <div><dt className="text-ink-faint">Institution</dt><dd className="font-medium text-ink">Example University</dd></div>
                  </dl>

                  <div className="mt-4">
                    <p className="text-xs text-ink-faint uppercase mb-1">Professional Bio</p>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      Experienced software developer with an interest in teaching web development and programming fundamentals.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-ink-line bg-surface p-5">
                   <h3 className="font-semibold text-ink mb-4">Review History</h3>
                   <div className="space-y-4 border-l-2 border-ink-line pl-4">
                      <div>
                        <p className="text-sm font-medium text-ink">Application Submitted</p>
                        <p className="text-xs text-ink-soft">Nov 10, 2026 · Tutor</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Right Column: Documents & Decision */}
              <div className="space-y-6">
                <div className="rounded-xl border border-ink-line bg-surface p-5">
                  <h3 className="font-semibold text-ink mb-4">Supporting Documents</h3>
                  <div className="space-y-3">
                    {selectedRequest.documents.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg border border-ink-line p-3 bg-canvas">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-ink-soft" />
                          <div>
                            <p className="text-sm font-medium text-ink">{doc.name}</p>
                            <p className="text-xs text-ink-faint">{doc.size} · {doc.status}</p>
                          </div>
                        </div>
                        <button className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1">
                          View <ExternalLink className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-ink-line bg-surface p-5">
                   <h3 className="font-semibold text-ink mb-4">Review Decision</h3>
                   
                   <div className="space-y-4">
                     <div>
                       <label className="mb-1.5 block text-xs font-medium text-ink">Decision *</label>
                       <select 
                         value={reviewDecision}
                         onChange={(e) => setReviewDecision(e.target.value)}
                         className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30"
                       >
                         <option value="">Select a decision...</option>
                         <option value="Approve">Approve Verification</option>
                         <option value="Request">Request Additional Information</option>
                         <option value="Reject">Reject Application</option>
                       </select>
                     </div>

                     <div>
                       <label className="mb-1.5 block text-xs font-medium text-ink">Reviewer Notes</label>
                       <textarea 
                         rows="3"
                         value={reviewNote}
                         onChange={(e) => setReviewNote(e.target.value)}
                         placeholder="Add feedback for the tutor..."
                         className="w-full rounded-xl border border-ink-line bg-canvas p-3 text-sm text-ink outline-none focus:border-ink/30 resize-none"
                       />
                     </div>

                     <button
                       onClick={handleDecision}
                       disabled={!reviewDecision}
                       className="w-full rounded-lg bg-ink py-2.5 text-sm font-medium text-canvas hover:opacity-90 disabled:opacity-50 transition"
                     >
                       Submit Decision
                     </button>
                   </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="border-t border-ink-line bg-surface p-4 flex justify-end">
              <button onClick={() => setSelectedRequest(null)} className="rounded-md px-4 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5 transition">
                Close Review
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default VerificationModel