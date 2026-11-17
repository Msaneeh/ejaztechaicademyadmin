import { CheckCircle2, AlertCircle, MoreVertical, } from "lucide-react"

const TutorTable = ({ filteredTutors, setSelectedTutor }) => {
  return (
          <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink">
            <thead className="border-b border-ink-line bg-ink/5 text-xs uppercase tracking-wider text-ink-faint">
              <tr>
                <th className="px-6 py-4 font-medium">Tutor</th>
                <th className="px-6 py-4 font-medium">Expertise</th>
                <th className="px-6 py-4 font-medium">Courses</th>
                <th className="px-6 py-4 font-medium">Students</th>
                <th className="px-6 py-4 font-medium">Verification</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-line">
              {filteredTutors.map((tutor) => (
                <tr 
                  key={tutor.id} 
                  onClick={() => setSelectedTutor(tutor)}
                  className="group cursor-pointer transition hover:bg-ink/5"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/10 text-xs font-semibold text-ink">
                        {tutor.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-ink">{tutor.name}</p>
                        <p className="text-xs text-ink-soft">{tutor.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-ink-soft">{tutor.expertise}</td>
                  <td className="px-6 py-4 text-xs font-medium text-ink">{tutor.courses}</td>
                  <td className="px-6 py-4 text-xs font-medium text-ink">{tutor.students}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                      tutor.verification === "Verified" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" :
                      tutor.verification === "Pending" ? "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400" :
                      "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                    }`}>
                      {tutor.verification}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {tutor.accountStatus === "Active" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <AlertCircle className="h-4 w-4 text-red-500" />}
                      <span className="text-xs font-medium text-ink">{tutor.accountStatus}</span>
                    </div>
                  </td>
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
  )
}

export default TutorTable