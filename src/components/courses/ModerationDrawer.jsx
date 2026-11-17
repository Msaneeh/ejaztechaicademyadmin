import { Eye, X } from "lucide-react";

// Components 
import MiniStat from "@/components/courses/MiniStat";

const ModerationDrawer = ({ 
    selectedCourse, 
    setSelectedCourse, 
    activeTab, 
    setActiveTab,
    setShowSuspendModal,
}) => {

  return (
    <>
          {selectedCourse && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="fixed inset-0" onClick={() => setSelectedCourse(null)} />
          <div className="relative flex h-full w-full max-w-2xl flex-col bg-surface shadow-2xl animate-in slide-in-from-right duration-200">
            
            <div className="flex items-center justify-between border-b border-ink-line p-6">
              <div>
                <h2 className="text-xl font-bold text-ink">{selectedCourse.title}</h2>
                <p className="text-sm text-ink-soft">{selectedCourse.id} · By {selectedCourse.tutor}</p>
              </div>
              <button onClick={() => setSelectedCourse(null)} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex border-b border-ink-line px-6 overflow-x-auto">
              {["overview", "curriculum", "students", "history"].map(tab => (
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

            <div className="flex-1 overflow-y-auto p-6 bg-canvas">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <MiniStat label="Enrollments" value={selectedCourse.enrollments} />
                    <MiniStat label="Completions" value={selectedCourse.completions} />
                    <MiniStat label="Rating" value={selectedCourse.rating > 0 ? selectedCourse.rating : "—"} />
                    <MiniStat label="Reports" value={selectedCourse.reports} alert={selectedCourse.reports > 0} />
                  </div>
                  <div className="rounded-xl border border-ink-line bg-surface p-5">
                     <h3 className="font-semibold text-ink mb-4">Course Information</h3>
                     <dl className="grid grid-cols-2 gap-4 text-sm">
                       <div><dt className="text-ink-faint">Category</dt><dd className="font-medium text-ink">{selectedCourse.category}</dd></div>
                       <div><dt className="text-ink-faint">Price</dt><dd className="font-medium text-ink">{selectedCourse.type === "Paid" ? `₦${selectedCourse.price.toLocaleString()}` : "Free"}</dd></div>
                       <div><dt className="text-ink-faint">Status</dt><dd className="font-medium text-ink">{selectedCourse.status}</dd></div>
                       <div><dt className="text-ink-faint">Last Updated</dt><dd className="font-medium text-ink">{selectedCourse.updated}</dd></div>
                     </dl>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-ink">Course Curriculum (Read-only)</h3>
                  <div className="rounded-xl border border-ink-line bg-surface divide-y divide-ink-line">
                    {selectedCourse.curriculum.map(mod => (
                      <div key={mod.id} className="p-4 flex justify-between items-center">
                        <span className="font-medium text-ink">{mod.title}</span>
                        <span className="text-xs text-ink-soft">{mod.lessons} lessons</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "students" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-ink">Enrolled Students</h3>
                  <div className="rounded-xl border border-ink-line bg-surface p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-ink">Aisha Bello</p>
                      <p className="text-xs text-ink-soft">Progress: 75%</p>
                    </div>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
                  </div>
                </div>
              )}

              {activeTab === "history" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-ink">Course History</h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-ink">Course Published</p>
                      <p className="text-xs text-ink-soft">Oct 20, 2026 · Admin</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-ink-line bg-surface p-4 flex items-center justify-between">
              <button className="flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink transition">
                <Eye className="h-4 w-4" /> Preview as Student
              </button>
              <div className="flex gap-2">
                {selectedCourse.status === "Suspended" ? (
                   <button className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas hover:opacity-90 transition">
                     Restore Course
                   </button>
                ) : (
                   <button 
                     onClick={() => setShowSuspendModal(true)}
                     className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
                   >
                     Suspend Course
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

export default ModerationDrawer