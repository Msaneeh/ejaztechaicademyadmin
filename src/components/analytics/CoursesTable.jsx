import React from 'react'

const CoursesTable = ({ topCourses }) => {
  return (
    <>
          <div>
        <h2 className="text-lg font-semibold text-ink mb-4">Top Courses by Enrollment</h2>
        <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink/5 text-xs uppercase tracking-wider text-ink-faint border-b border-ink-line">
              <tr>
                <th className="px-6 py-4 font-medium">Course</th>
                <th className="px-6 py-4 font-medium">Enrollments</th>
                <th className="px-6 py-4 font-medium">Completion Rate</th>
                <th className="px-6 py-4 font-medium">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-line">
              {topCourses.map(course => (
                <tr key={course.id} className="hover:bg-ink/5 transition">
                  <td className="px-6 py-4 font-medium text-ink">{course.title}</td>
                  <td className="px-6 py-4 text-ink-soft">{course.enrollments}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <div className="h-1.5 w-24 overflow-hidden rounded-full bg-ink/10">
                         <div className="h-full rounded-full bg-ink" style={{ width: `${course.completionRate}%` }} />
                       </div>
                       <span className="text-xs font-medium text-ink">{course.completionRate}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-ink-soft">{course.rating}</td>
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