import { 
  CheckCircle2,
  AlertCircle,
  Clock
} from "lucide-react";

const RequestsTable = ({ filteredRequests, setSelectedRequest }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-ink">
          <thead className="border-b border-ink-line bg-ink/5 text-xs uppercase tracking-wider text-ink-faint">
            <tr>
              <th className="px-6 py-4 font-medium">Subject</th>
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Priority</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Created</th>
              <th className="px-6 py-4"></th>
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
                  <p className="font-medium text-ink">{req.subject}</p>
                  <p className="text-xs text-ink-soft font-mono">{req.id}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-ink">{req.user}</p>
                  <p className="text-xs text-ink-soft">{req.userType}</p>
                </td>
                <td className="px-6 py-4 text-xs text-ink-soft">{req.category}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                    req.priority === "High" || req.priority === "Critical" ? "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400" :
                    req.priority === "Normal" ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" :
                    "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400"
                  }`}>
                    {req.priority}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {req.status === "Open" ? <AlertCircle className="h-4 w-4 text-orange-500" /> :
                     req.status === "Resolved" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> :
                     <Clock className="h-4 w-4 text-blue-500" />}
                    <span className="text-xs font-medium text-ink">{req.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-ink-soft">{req.created}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-xs font-medium text-ink hover:underline">Open →</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestsTable;