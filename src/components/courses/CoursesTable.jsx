import { BookOpen } from "lucide-react"

const CoursesTable = ({ filteredCourses, handleRowClick }) => {
  return (
    <>
          <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink">
            <thead className="border-b border-ink-line bg-ink/5 text-xs uppercase tracking-wider text-ink-faint">
              <tr>
                <th className="px-6 py-4 font-medium">Course</th>
                <th className="px-6 py-4 font-medium">Tutor</th>
                <th className="px-6 py-4 font-medium">Enrollments</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Updated</th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-line">
              {filteredCourses.map((course) => (
                <tr 
                  key={course.id} 
                  onClick={() => handleRowClick(course)}
                  className="group cursor-pointer transition hover:bg-ink/5"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-16 items-center justify-center rounded-md bg-ink/5 text-ink-soft">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-ink line-clamp-1">{course.title}</p>
                        <p className="text-xs text-ink-soft">{course.id} · {course.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-ink-soft">{course.tutor}</td>
                  <td className="px-6 py-4 text-xs font-medium text-ink">{course.enrollments}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                      course.status === "Published" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" :
                      course.status === "Pending" ? "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400" :
                      course.status === "Suspended" ? "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400" :
                      "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400"
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-ink-soft">{course.updated}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs font-medium text-ink hover:underline">
                      {course.status === "Pending" ? "Review →" : "Manage →"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CoursesTable