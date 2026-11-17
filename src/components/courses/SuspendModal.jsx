import { Ban } from "lucide-react"

const SuspendModal = ({ 
    showSuspendModal, 
    selectedCourse, 
    suspendReason, 
    setSuspendReason, 
    setShowSuspendModal, 
    handleSuspend 
}) => {

  return (
    <>
            {showSuspendModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-surface p-6 shadow-2xl border border-ink-line">
            <div className="flex items-center gap-3 mb-4">
               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                 <Ban className="h-5 w-5" />
               </div>
               <div>
                 <h3 className="text-lg font-semibold text-ink">Suspend Course</h3>
                 <p className="text-sm text-ink-soft">This action will remove the course from discovery.</p>
               </div>
            </div>
            <p className="text-sm text-ink-soft mb-4">
              Are you sure you want to suspend <strong>{selectedCourse.title}</strong>? Existing student enrollments will be preserved.
            </p>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-ink">Reason for suspension *</label>
              <select 
                value={suspendReason}
                onChange={(e) => setSuspendReason(e.target.value)}
                className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30"
              >
                <option value="">Select a reason...</option>
                <option value="policy">Violation of platform policy</option>
                <option value="quality">Quality concerns</option>
                <option value="copyright">Copyright infringement</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowSuspendModal(false)} className="rounded-md px-4 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5">
                Cancel
              </button>
              <button 
                onClick={handleSuspend}
                disabled={!suspendReason}
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
              >
                Confirm Suspension
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SuspendModal