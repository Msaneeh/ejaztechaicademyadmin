import { X, Clock, CheckCircle2, Shield, ShieldAlert, Mail } from "lucide-react"

const UserDetails = ({ 
    selectedUser, 
    closeUserDrawer, 
    setActiveTab, 
    activeTab, 
    setShowSuspendModal 

}) => {


  return (
    <>
          {selectedUser && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-0" onClick={closeUserDrawer} />
          
          <div className="relative flex h-full w-full max-w-lg flex-col bg-surface shadow-2xl animate-in slide-in-from-right duration-200">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-ink-line p-6">
              <div className="flex items-center gap-4">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/10 text-lg font-bold text-ink">
                    {selectedUser.name.charAt(0)}
                 </div>
                 <div>
                    <h2 className="text-xl font-bold text-ink">{selectedUser.name}</h2>
                    <p className="text-sm text-ink-soft">{selectedUser.email}</p>
                 </div>
              </div>
              <button onClick={closeUserDrawer} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-ink-line px-6">
              {["overview", "activity", "security"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 py-3 px-4 text-sm font-medium capitalize transition ${
                    activeTab === tab ? "border-ink text-ink" : "border-transparent text-ink-soft hover:text-ink"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-medium text-ink-faint uppercase mb-1">User ID</p>
                      <p className="text-sm font-mono text-ink">{selectedUser.id}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-ink-faint uppercase mb-1">Role</p>
                      <p className="text-sm text-ink">{selectedUser.role}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-ink-faint uppercase mb-1">Account Status</p>
                      <div className="flex items-center gap-1.5">
                        {selectedUser.status === "Active" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <AlertCircle className="h-4 w-4 text-red-500" />}
                        <p className="text-sm text-ink">{selectedUser.status}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-ink-faint uppercase mb-1">Joined Date</p>
                      <p className="text-sm text-ink">{selectedUser.joined}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "activity" && (
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-ink-faint mt-0.5" />
                    <div>
                      <p className="text-sm text-ink">Logged in</p>
                      <p className="text-xs text-ink-soft">2 hours ago from Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-ink-faint mt-0.5" />
                    <div>
                      <p className="text-sm text-ink">Password changed</p>
                      <p className="text-xs text-ink-soft">3 days ago</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-6">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-ink">Email Verification</span>
                     </div>
                     <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">{selectedUser.verification}</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4 text-ink-faint" />
                        <span className="text-sm text-ink">Two-Factor Auth</span>
                     </div>
                     <span className="text-xs font-medium text-ink-soft">Not enabled</span>
                   </div>
                </div>
              )}
            </div>

            {/* Drawer Footer Actions */}
            <div className="border-t border-ink-line bg-ink/5 p-4 flex items-center justify-between">
              <button className="flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink transition">
                <Mail className="h-4 w-4" /> Email User
              </button>
              
              {selectedUser.status === "Active" ? (
                 <button 
                   onClick={() => setShowSuspendModal(true)}
                   className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
                 >
                   Suspend Account
                 </button>
              ) : (
                 <button className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas hover:opacity-90 transition">
                   Reactivate Account
                 </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UserDetails