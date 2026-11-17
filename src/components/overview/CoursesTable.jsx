import { Link } from "react-router-dom"

const CoursesTable = ({ topCourses }) => {
  return (
              <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-ink">Top-performing courses</h2>
              <Link to="/courses" className="text-sm font-medium text-ink hover:underline">View all</Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink/5 text-xs uppercase tracking-wider text-ink-faint border-b border-ink-line">
                  <tr>
                    <th className="px-6 py-3 font-medium">Course</th>
                    <th className="px-6 py-3 font-medium">Tutor</th>
                    <th className="px-6 py-3 font-medium">Enrollments</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-line">
                  {topCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-ink/5 transition">
                      <td className="px-6 py-4 font-medium text-ink">{course.title}</td>
                      <td className="px-6 py-4 text-ink-soft">{course.tutor}</td>
                      <td className="px-6 py-4 text-ink-soft">{course.enrollments}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-medium text-green-700 dark:bg-green-500/10 dark:text-green-400">
                          {course.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
  )
}

export default CoursesTable