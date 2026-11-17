import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Ban, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  Users,
  PlayCircle,
  Clock,
  RotateCcw
} from "lucide-react";
import { courses } from "@/mockData/courses";

export default function CourseModeration() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  // Find the course from mock data
  const course = courses.find(c => c.id === courseId);
  
  const [activeTab, setActiveTab] = useState("overview");
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [suspendReason, setSuspendReason] = useState("");

  if (!course) {
    return (
      <div className="flex h-96 flex-col items-center justify-center text-ink-soft">
        <p className="text-lg">Course not found.</p>
        <Link to="/courses" className="mt-4 text-sm font-medium text-ink hover:underline">
          Back to Course Management
        </Link>
      </div>
    );
  }

  const handleSuspend = () => {
    alert(`Course ${course.title} suspended. Reason: ${suspendReason}`);
    setShowSuspendModal(false);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <button 
            onClick={() => navigate(-1)} 
            className="mb-4 flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div className="flex items-center gap-3">
             <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{course.title}</h1>
             <span className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
                course.status === "Published" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" :
                course.status === "Suspended" ? "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400" :
                "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400"
             }`}>
                {course.status}
             </span>
          </div>
          <p className="text-sm text-ink-soft mt-1">
            By {course.tutor} · {course.category}
          </p>
        </div>
        
        <div className="flex gap-3">
          {course.status === "Suspended" ? (
            <button className="flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas hover:opacity-90 transition">
              <RotateCcw className="h-4 w-4" /> Restore Course
            </button>
          ) : (
            <button 
              onClick={() => setShowSuspendModal(true)}
              className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
            >
              <Ban className="h-4 w-4" /> Suspend Course
            </button>
          )}
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Enrollments" value={course.enrollments} />
        <StatCard title="Completions" value={course.completions} />
        <StatCard title="Avg. Rating" value={`${course.rating}/5`} />
        <StatCard title="Reported Issues" value={course.reports} alert={course.reports > 0} />
      </div>

      {/* Tabs */}
      <div className="border-b border-ink-line">
        <nav className="flex space-x-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {["overview", "curriculum", "students", "history"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 py-3 px-1 text-sm font-medium capitalize transition whitespace-nowrap ${
                activeTab === tab ? "border-ink text-ink" : "border-transparent text-ink-soft hover:text-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-canvas">
        
        {activeTab === "overview" && (
          <div className="grid gap-6 lg:grid-cols-3">
             <div className="lg:col-span-2 space-y-6">
                <div className="rounded-xl border border-ink-line bg-surface p-6">
                   <h3 className="font-semibold text-ink mb-3">Course Description</h3>
                   <p className="text-sm text-ink-soft leading-relaxed">{course.description}</p>
                </div>
                <div className="rounded-xl border border-ink-line bg-surface p-6">
                   <h3 className="font-semibold text-ink mb-4">Course Details</h3>
                   <dl className="grid grid-cols-2 gap-4 text-sm">
                      <div><dt className="text-ink-faint">Difficulty</dt><dd className="font-medium text-ink">{course.difficulty}</dd></div>
                      <div><dt className="text-ink-faint">Price</dt><dd className="font-medium text-ink">{course.type === "Paid" ? `₦${course.price.toLocaleString()}` : "Free"}</dd></div>
                      <div><dt className="text-ink-faint">Last Updated</dt><dd className="font-medium text-ink">{course.updated}</dd></div>
                      <div><dt className="text-ink-faint">Category</dt><dd className="font-medium text-ink">{course.category}</dd></div>
                   </dl>
                </div>
             </div>
             <div className="space-y-6">
                <div className="rounded-xl border border-ink-line bg-surface p-6">
                   <h3 className="font-semibold text-ink mb-4">Tutor Information</h3>
                   <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/10 font-bold text-ink">
                         {course.tutor.charAt(0)}
                      </div>
                      <div>
                         <p className="font-medium text-ink">{course.tutor}</p>
                         <p className="text-xs text-ink-soft">{course.tutorId}</p>
                      </div>
                   </div>
                   <button className="w-full rounded-md border border-ink-line py-2 text-sm font-medium text-ink hover:bg-ink/5">View Tutor Profile</button>
                </div>
             </div>
          </div>
        )}

        {activeTab === "curriculum" && (
          <div className="rounded-xl border border-ink-line bg-surface">
            <div className="p-5 border-b border-ink-line bg-ink/5">
              <h3 className="font-semibold text-ink">Course Curriculum</h3>
            </div>
            <div className="divide-y divide-ink-line">
              {course.curriculum.map(module => (
                <div key={module.id} className="p-4 flex items-center justify-between hover:bg-ink/5">
                   <div className="flex items-center gap-3">
                      <PlayCircle className="h-4 w-4 text-ink-soft" />
                      <span className="font-medium text-ink">{module.title}</span>
                   </div>
                   <span className="text-xs text-ink-soft">{module.lessons} lessons</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "students" && (
          <div className="rounded-xl border border-ink-line bg-surface p-6 text-center text-ink-soft">
            <Users className="h-10 w-10 mx-auto mb-3 opacity-50" />
            <p>Enrolled students will appear here.</p>
          </div>
        )}

        {activeTab === "history" && (
          <div className="rounded-xl border border-ink-line bg-surface p-6">
             <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-ink">Course Published</p>
                    <p className="text-xs text-ink-soft">Oct 20, 2026 · Admin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-ink-faint mt-0.5" />
                  <div>
                    <p className="text-sm text-ink">Course Submitted for Review</p>
                    <p className="text-xs text-ink-soft">Oct 18, 2026 · Tutor</p>
                  </div>
                </div>
             </div>
          </div>
        )}

      </div>

      {/* Suspend Modal */}
      {showSuspendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-surface p-6 shadow-2xl border border-ink-line">
            <div className="flex items-center gap-3 mb-4">
               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                 <AlertTriangle className="h-5 w-5" />
               </div>
               <div>
                 <h3 className="text-lg font-semibold text-ink">Suspend Course</h3>
                 <p className="text-sm text-ink-soft">This action removes the course from discovery.</p>
               </div>
            </div>
            
            <p className="text-sm text-ink-soft mb-4">
              Are you sure you want to suspend <strong>{course.title}</strong>? Existing student enrollments will be preserved.
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

    </div>
  );
}

function StatCard({ title, value, alert }) {
  return (
    <div className="rounded-2xl border border-ink-line bg-surface p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">{title}</p>
      <p className={`mt-2 text-2xl font-bold ${alert ? "text-red-600" : "text-ink"}`}>{value}</p>
    </div>
  );
}