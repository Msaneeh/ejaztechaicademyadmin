import { Users, BookOpen, ShieldIcon, FileText } from "lucide-react"
import { Link } from "react-router-dom"

const RecentActivity = ({ recentActivity }) => {
  return (
            <div className="space-y-8">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-ink">Recent Activity</h2>
              <Link to="/audit" className="text-sm font-medium text-ink hover:underline">View all</Link>
            </div>
            <div className="rounded-2xl border border-ink-line bg-surface p-5">
              <div className="space-y-6">
                {recentActivity.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative mt-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-ink">
                        {item.type === "student" && <Users className="h-4 w-4" />}
                        {item.type === "course" && <BookOpen className="h-4 w-4" />}
                        {item.type === "tutor" && <ShieldIcon className="h-4 w-4" />}
                        {item.type === "certificate" && <FileText className="h-4 w-4" />}
                      </div>
                      {/* Vertical Line */}
                      <div className="absolute top-10 left-4 h-full w-px bg-ink-line -translate-x-1/2 last:hidden" />
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-medium text-ink">{item.title}</p>
                      <p className="text-xs text-ink-soft mt-1">{item.desc}</p>
                      <p className="text-[10px] text-ink-faint mt-2">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
  )
}

export default RecentActivity