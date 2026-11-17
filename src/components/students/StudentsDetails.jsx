import { X, Mail, Clock, Award } from "lucide-react"

// component
import MiniStat from "@/components/students/MiniStat";

const StudentsDetails = ({ selectedStudent, setSelectedStudent, activeTab, setActiveTab }) => {
  return (
    <>
          {selectedStudent && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="fixed inset-0" onClick={() => setSelectedStudent(null)} />
          
          <div className="relative flex h-full w-full max-w-2xl flex-col bg-surface shadow-2xl animate-in slide-in-from-right duration-200">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-ink-line p-6">
              <div className="flex items-center gap-4">
                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/10 text-xl font-bold text-ink">
                    {selectedStudent.name.charAt(0)}
                 </div>
                 <div>
                    <h2 className="text-2xl font-bold text-ink">{selectedStudent.name}</h2>
                    <p className="text-sm text-ink-soft">{selectedStudent.email} · {selectedStudent.id}</p>
                 </div>
              </div>
              <button onClick={() => setSelectedStudent(null)} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-ink-line px-6 overflow-x-auto">
              {["overview", "enrollments", "assessments", "activity"].map(tab => (
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
                  {/* Performance Summary */}
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <MiniStat label="Enrollments" value={selectedStudent.courses} />
                    <MiniStat label="Avg. Progress" value={`${selectedStudent.avgProgress}%`} />
                    <MiniStat label="Certificates" value="2" />
                    <MiniStat label="Joined" value={selectedStudent.joined} />
                  </div>

                  <div className="rounded-xl border border-ink-line bg-surface p-5">
                    <h3 className="font-semibold text-ink mb-4">Account Information</h3>
                    <dl className="grid grid-cols-2 gap-4 text-sm">
                      <div><dt className="text-ink-faint">Student ID</dt><dd className="font-medium text-ink">{selectedStudent.id}</dd></div>
                      <div><dt className="text-ink-faint">Account Status</dt><dd className="font-medium text-ink">{selectedStudent.accountStatus}</dd></div>
                      <div><dt className="text-ink-faint">Email Verification</dt><dd className="font-medium text-ink">Verified</dd></div>
                      <div><dt className="text-ink-faint">Last Active</dt><dd className="font-medium text-ink">{selectedStudent.lastActive}</dd></div>
                    </dl>
                  </div>
                </div>
              )}

              {activeTab === "enrollments" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-ink">Course Enrollments</h3>
                  {/* Mock Enrollment Cards */}
                  <div className="rounded-xl border border-ink-line bg-surface p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-ink">React.js Masterclass</p>
                        <p className="text-xs text-ink-soft">Tutor: Eng. Ejaz</p>
                      </div>
                      <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">In Progress</span>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                        <div className="h-full rounded-full bg-ink" style={{ width: "68%" }} />
                      </div>
                      <span className="text-xs font-medium text-ink">68%</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-ink-line bg-surface p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-ink">Python Foundations</p>
                        <p className="text-xs text-ink-soft">Tutor: Eng. Fatima</p>
                      </div>
                      <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">Completed</span>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                        <div className="h-full rounded-full bg-green-500" style={{ width: "100%" }} />
                      </div>
                      <span className="text-xs font-medium text-ink">100%</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "assessments" && (
                <div className="space-y-4">
                   <h3 className="font-semibold text-ink">Recent Assessments</h3>
                   <div className="rounded-xl border border-ink-line bg-surface p-4">
                     <div className="flex justify-between items-center">
                       <div>
                         <p className="font-medium text-ink">React Fundamentals Quiz</p>
                         <p className="text-xs text-ink-soft">Attempt 1 · Nov 09, 2026</p>
                       </div>
                       <div className="text-right">
                         <p className="font-bold text-green-600">85%</p>
                         <p className="text-[10px] text-green-600">Passed</p>
                       </div>
                     </div>
                   </div>
                </div>
              )}

              {activeTab === "activity" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-ink">Learning Activity</h3>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-ink-faint mt-0.5" />
                    <div>
                      <p className="text-sm text-ink">Completed lesson: <span className="font-medium">Context API</span></p>
                      <p className="text-xs text-ink-soft">React Masterclass · 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-4 w-4 text-ink-faint mt-0.5" />
                    <div>
                      <p className="text-sm text-ink">Earned certificate: <span className="font-medium">Python Foundations</span></p>
                      <p className="text-xs text-ink-soft">3 days ago</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Drawer Footer Actions */}
            <div className="border-t border-ink-line bg-surface p-4 flex items-center justify-between">
              <button className="flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink transition">
                <Mail className="h-4 w-4" /> Message Student
              </button>
              <button className="rounded-md border border-ink-line bg-canvas px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition">
                Export Record
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default StudentsDetails