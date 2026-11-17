import { CheckCircle2, MoreVertical, AlertCircle } from "lucide-react"

const StudentTable = ({ filteredStudents, setSelectedStudent }) => {
  return (
    <>
        <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink">
            <thead className="border-b border-ink-line bg-ink/5 text-xs uppercase tracking-wider text-ink-faint">
              <tr>
                <th className="px-6 py-4 font-medium">Student</th>
                <th className="px-6 py-4 font-medium">Enrolled</th>
                <th className="px-6 py-4 font-medium">Avg. Progress</th>
                <th className="px-6 py-4 font-medium">Learning Status</th>
                <th className="px-6 py-4 font-medium">Account Status</th>
                <th className="px-6 py-4 font-medium">Joined</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-line">
              {filteredStudents.map((student) => (
                <tr 
                  key={student.id} 
                  onClick={() => setSelectedStudent(student)}
                  className="group cursor-pointer transition hover:bg-ink/5"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/10 text-xs font-semibold text-ink">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-ink">{student.name}</p>
                        <p className="text-xs text-ink-soft">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-ink-soft">
                    {student.courses} {student.courses === 1 ? 'course' : 'courses'}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-ink/10">
                        <div 
                          className={`h-full rounded-full ${student.avgProgress === 100 ? "bg-green-500" : "bg-ink"}`}
                          style={{ width: `${student.avgProgress}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-ink">{student.avgProgress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                      student.learningStatus === "Completed" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" :
                      student.learningStatus === "In Progress" ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" :
                      student.learningStatus === "Inactive" ? "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400" :
                      "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400"
                    }`}>
                      {student.learningStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {student.accountStatus === "Active" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <AlertCircle className="h-4 w-4 text-red-500" />}
                      <span className="text-xs font-medium text-ink">{student.accountStatus}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-ink-soft">{student.joined}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="rounded-md p-1.5 text-ink-faint opacity-0 transition hover:bg-ink/10 hover:text-ink group-hover:opacity-100">
                      <MoreVertical className="h-4 w-4" />
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

export default StudentTable