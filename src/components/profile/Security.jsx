import React from 'react'

const Security = ({ activeTab }) => {
  return (
    <>
              {activeTab === "security" && (
            <div className="space-y-8 max-w-2xl">
              <div>
                <h2 className="text-lg font-semibold text-ink">Security Settings</h2>
                <p className="text-sm text-ink-soft mt-1">Manage your password and authentication methods.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-ink">Change Password</h3>
                <div className="space-y-3">
                  <input type="password" placeholder="Current password" className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" />
                  <input type="password" placeholder="New password" className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" />
                  <input type="password" placeholder="Confirm new password" className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" />
                  <button className="rounded-md border border-ink-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="space-y-4 border-t border-ink-line pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-ink">Two-Factor Authentication (MFA)</h3>
                    <p className="text-xs text-ink-soft mt-1">Add an extra layer of security to your account.</p>
                  </div>
                  <span className="rounded-full bg-green-100 text-green-700 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider">Enabled</span>
                </div>
              </div>
            </div>
          )}
    </>
  )
}

export default Security;