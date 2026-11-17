import { X, PlayCircle } from "lucide-react"

// componets 
import CheckItem from "@/components/courses/CheckItem";

const ReviewModal = ({ 
    reviewingCourse, 
    setReviewingCourse, 
    checklist, 
    reviewDecision, 
    setReviewDecision, 
    reviewNote, 
    setReviewNote, 
    handleReviewSubmit,
    allChecked,
    toggleCheck
}) => {

  return (
    <>
            {reviewingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-5xl max-h-[95vh] flex flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl border border-ink-line">
            <div className="flex items-center justify-between border-b border-ink-line p-6">
              <div>
                <h2 className="text-xl font-bold text-ink">{reviewingCourse.title}</h2>
                <p className="text-sm text-ink-soft">Submission {reviewingCourse.id} · By {reviewingCourse.tutor}</p>
              </div>
              <button onClick={() => setReviewingCourse(null)} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-canvas grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-xl border border-ink-line bg-surface overflow-hidden">
                  <div className="h-48 bg-ink/5 flex items-center justify-center">
                     <PlayCircle className="h-12 w-12 text-ink-faint" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-ink">Course Description</h3>
                    <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                      {reviewingCourse.description}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-ink-line bg-surface">
                  <div className="p-4 border-b border-ink-line bg-ink/5 font-semibold text-ink">Curriculum Preview</div>
                  <div className="divide-y divide-ink-line">
                     {reviewingCourse.curriculum.map(mod => (
                        <div key={mod.id} className="p-4 flex justify-between items-center text-sm">
                           <span className="text-ink">{mod.title}</span>
                           <span className="text-ink-soft">{mod.lessons} lessons</span>
                        </div>
                     ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-ink-line bg-surface p-5">
                  <h3 className="font-semibold text-ink mb-4">Review Checklist</h3>
                  <div className="space-y-3">
                    <CheckItem label="Course Information" checked={checklist.info} onClick={() => toggleCheck('info')} />
                    <CheckItem label="Curriculum Structure" checked={checklist.curriculum} onClick={() => toggleCheck('curriculum')} />
                    <CheckItem label="Learning Materials" checked={checklist.materials} onClick={() => toggleCheck('materials')} />
                    <CheckItem label="Assessments" checked={checklist.assessments} onClick={() => toggleCheck('assessments')} />
                    <CheckItem label="Policy Compliance" checked={checklist.policy} onClick={() => toggleCheck('policy')} />
                  </div>
                </div>
                <div className="rounded-xl border border-ink-line bg-surface p-5">
                   <h3 className="font-semibold text-ink mb-4">Decision</h3>
                   <div className="space-y-4">
                     <select 
                       value={reviewDecision}
                       onChange={(e) => setReviewDecision(e.target.value)}
                       className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30"
                     >
                       <option value="">Select action...</option>
                       <option value="Approve">Approve Course</option>
                       <option value="Request">Request Changes</option>
                       <option value="Reject">Reject Submission</option>
                     </select>
                     <textarea 
                       rows="3"
                       value={reviewNote}
                       onChange={(e) => setReviewNote(e.target.value)}
                       placeholder="Reviewer feedback..."
                       className="w-full rounded-xl border border-ink-line bg-canvas p-3 text-sm text-ink outline-none focus:border-ink/30 resize-none"
                     />
                     <button
                       onClick={handleReviewSubmit}
                       disabled={!reviewDecision || !allChecked}
                       className="w-full rounded-lg bg-ink py-2.5 text-sm font-medium text-canvas hover:opacity-90 disabled:opacity-50 transition"
                     >
                       Submit Decision
                     </button>
                     {!allChecked && <p className="text-xs text-center text-orange-500 mt-2">Complete all checklist items to enable.</p>}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ReviewModal