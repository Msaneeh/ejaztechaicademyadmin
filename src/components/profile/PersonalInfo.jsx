import { 
  Save,
} from "lucide-react";

const PersonalInfo = ({ activeTab, profileData, setProfileData, handleSave }) => {
    
  return (
    <>
              {activeTab === "personal" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-lg font-semibold text-ink">Personal Information</h2>
                <p className="text-sm text-ink-soft mt-1">Update your personal details and contact information.</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink">Full Name</label>
                    <input 
                      type="text" 
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" 
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink">Email Address</label>
                    <input 
                      type="email" 
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink">Phone Number</label>
                    <input 
                      type="tel" 
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" 
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink">Job Title</label>
                    <input 
                      type="text" 
                      value={profileData.jobTitle}
                      onChange={(e) => setProfileData({ ...profileData, jobTitle: e.target.value })}
                      className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" 
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink">Short Bio</label>
                  <textarea 
                    rows="3"
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30 resize-none" 
                  />
                </div>

                <div className="pt-4 border-t border-ink-line flex justify-end">
                  <button onClick={handleSave} className="flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas hover:opacity-90">
                    <Save className="h-4 w-4" /> Save Profile
                  </button>
                </div>
              </div>
            </div>
          )}
    </>
  )
}

export default PersonalInfo;