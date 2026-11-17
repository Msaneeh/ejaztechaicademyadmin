import React from 'react'

const ConfirmSuspendModal = ({ 
    showSuspendModal, 
    selectedUser,
    setSuspendReason, 
    setShowSuspendModal, 
    handleSuspend, 
    suspendReason 
}) => {
  
    return (
    <>
          {showSuspendModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-surface p-6 shadow-2xl border border-ink-line">
            <h3 className="text-lg font-semibold text-ink">Suspend User Account</h3>
            <p className="text-sm text-ink-soft mt-2">
              Are you sure you want to suspend <strong>{selectedUser.name}</strong>? 
              This will restrict their access to the platform.
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
                <option value="fraud">Suspected fraudulent activity</option>
                <option value="request">User requested suspension</option>
                <option value="other">Other (explain below)</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button 
                onClick={() => setShowSuspendModal(false)} 
                className="rounded-md px-4 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5"
              >
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

export default ConfirmSuspendModal