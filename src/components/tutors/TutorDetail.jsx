import { ShieldCheck, Mail, X } from "lucide-react";

// Components
import MiniStat from "@/components/tutors/MiniStat";

const TutorDetail = ({ selectedTutor, setSelectedTutor, activeTab, setActiveTab, setShowSuspendModal }) => {
  return (
    <>
          {selectedTutor && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="fixed inset-0" onClick={() => setSelectedTutor(null)} />
          
          <div className="relative flex h-full w-full max-w-2xl flex-col bg-surface shadow-2xl animate-in slide-in-from-right duration-200">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-ink-line p-6">
              <div className="flex items-center gap-4">
                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/10 text-xl font-bold text-ink">
                    {selectedTutor.name.charAt(0)}
                 </div>
                 <div>
                    <h2 className="text-2xl font-bold text-ink">{selectedTutor.name}</h2>
                    <p className="text-sm text-ink-soft">{selectedTutor.email} · {selectedTutor.id}</p>
                 </div>
              </div>
              <button onClick={() => setSelectedTutor(null)} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-ink-line px-6 overflow-x-auto">
              {["overview", "courses", "verification", "account"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 py-3 px-4 text-sm font-medium capitalize transition whitespace-nowrap ${
                    activeTab === tab ? "border-ink text-ink" : "border-transparent text-ink-soft hover:text-ink"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-canvas">
              
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <MiniStat label="Total Courses" value={selectedTutor.courses} />
                    <MiniStat label="Total Students" value={selectedTutor.students} />
                    <MiniStat label="Avg. Rating" value="4.8" />
                    <MiniStat label="Joined" value={selectedTutor.joined} />
                  </div>
                  
                  <div className="rounded-xl border border-ink-line bg-surface p-5">
                     <h3 className="font-semibold text-ink mb-4">Professional Summary</h3>
                     <p className="text-sm text-ink-soft leading-relaxed">
                       Expert in {selectedTutor.expertise} with a passion for teaching and building real-world projects.
                     </p>
                  </div>
                </div>
              )}

              {activeTab === "courses" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-ink">Courses by {selectedTutor.name}</h3>
                  <div className="rounded-xl border border-ink-line bg-surface p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-ink">React.js Fundamentals</p>
                      <p className="text-xs text-ink-soft">Published · 420 Enrollments</p>
                    </div>
                    <button className="text-sm text-ink hover:underline">View</button>
                  </div>
                  <div className="rounded-xl border border-ink-line bg-surface p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-ink">Advanced Node.js</p>
                      <p className="text-xs text-ink-soft">Draft · 0 Enrollments</p>
                    </div>
                    <button className="text-sm text-ink hover:underline">View</button>
                  </div>
                </div>
              )}

              {activeTab === "verification" && (
                <div className="space-y-6">
                  <div className="rounded-xl border border-ink-line bg-surface p-5">
                    <h3 className="font-semibold text-ink mb-4">Verification Status</h3>
                    <div className="flex items-center gap-3 mb-4">
                       {selectedTutor.verification === "Verified" ? <ShieldCheck className="h-6 w-6 text-green-500" /> : <ShieldAlert className="h-6 w-6 text-orange-500" />}
                       <span className="font-medium text-ink text-lg">{selectedTutor.verification}</span>
                    </div>
                    <p className="text-sm text-ink-soft">
                      Submitted qualifications: B.Sc. Computer Science.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "account" && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-ink-line bg-surface p-5">
                     <h3 className="font-semibold text-ink mb-4">Account Details</h3>
                     <dl className="grid grid-cols-2 gap-4 text-sm">
                       <div><dt className="text-ink-faint">Tutor ID</dt><dd className="font-medium text-ink">{selectedTutor.id}</dd></div>
                       <div><dt className="text-ink-faint">Status</dt><dd className="font-medium text-ink">{selectedTutor.accountStatus}</dd></div>
                       <div><dt className="text-ink-faint">Email</dt><dd className="font-medium text-ink">{selectedTutor.email}</dd></div>
                       <div><dt className="text-ink-faint">Joined</dt><dd className="font-medium text-ink">{selectedTutor.joined}</dd></div>
                     </dl>
                  </div>
                </div>
              )}

            </div>

            {/* Drawer Footer Actions */}
            <div className="border-t border-ink-line bg-surface p-4 flex items-center justify-between">
              <button className="flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink transition">
                <Mail className="h-4 w-4" /> Contact Tutor
              </button>
              
              <div className="flex gap-2">
                <button className="rounded-md border border-ink-line bg-canvas px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition">
                  Restrict Publishing
                </button>
                {selectedTutor.accountStatus === "Active" ? (
                   <button 
                     onClick={() => setShowSuspendModal(true)}
                     className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
                   >
                     Suspend Account
                   </button>
                ) : (
                   <button className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas hover:opacity-90 transition">
                     Reactivate
                   </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TutorDetail