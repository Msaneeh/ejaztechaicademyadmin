import { FileText } from "lucide-react"

const QueueTable = ({ filteredRequests, setSelectedRequest }) => {
  return (
    <>
          <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink">
            <thead className="border-b border-ink-line bg-ink/5 text-xs uppercase tracking-wider text-ink-faint">
              <tr>
                <th className="px-6 py-4 font-medium">Tutor</th>
                <th className="px-6 py-4 font-medium">Request ID</th>
                <th className="px-6 py-4 font-medium">Expertise</th>
                <th className="px-6 py-4 font-medium">Documents</th>
                <th className="px-6 py-4 font-medium">Submitted</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-line">
              {filteredRequests.map((req) => (
                <tr 
                  key={req.id} 
                  onClick={() => setSelectedRequest(req)}
                  className="group cursor-pointer transition hover:bg-ink/5"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/10 text-xs font-semibold text-ink">
                        {req.tutorName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-ink">{req.tutorName}</p>
                        <p className="text-xs text-ink-soft">{req.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono text-ink-soft">{req.id}</td>
                  <td className="px-6 py-4 text-xs text-ink-soft">{req.expertise}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink">
                      <FileText className="h-3.5 w-3.5" /> {req.documents.length} files
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-ink-soft">{req.submitted}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                      req.status === "Approved" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" :
                      req.status === "Under Review" ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" :
                      req.status === "Rejected" ? "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400" :
                      "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-ink hover:underline">Review →</button>
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

export default QueueTable