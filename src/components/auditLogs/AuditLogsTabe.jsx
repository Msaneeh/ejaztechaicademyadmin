import { CheckCircle2, AlertCircle } from "lucide-react";

const AuditLogsTabe = ({ filteredLogs, setSelectedLog }) => {
  return (
    <>
            <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink">
            <thead className="border-b border-ink-line bg-ink/5 text-xs uppercase tracking-wider text-ink-faint">
              <tr>
                <th className="px-6 py-4 font-medium">Timestamp</th>
                <th className="px-6 py-4 font-medium">Actor</th>
                <th className="px-6 py-4 font-medium">Action</th>
                <th className="px-6 py-4 font-medium">Target</th>
                <th className="px-6 py-4 font-medium">Result</th>
                <th className="px-6 py-4 font-medium">Severity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-line">
              {filteredLogs.map((log) => (
                <tr 
                  key={log.id} 
                  onClick={() => setSelectedLog(log)}
                  className="group cursor-pointer transition hover:bg-ink/5"
                >
                  <td className="px-6 py-4 text-xs text-ink-soft whitespace-nowrap">{log.timestamp}</td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-ink">{log.actor}</p>
                    <p className="text-xs text-ink-soft">{log.actorRole}</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-ink">{log.action}</td>
                  <td className="px-6 py-4 text-xs text-ink-soft">{log.target}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-ink">
                       {log.result === "Success" ? <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> : <AlertCircle className="h-3.5 w-3.5 text-red-500" />}
                       {log.result}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                      log.severity === "Critical" ? "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400" :
                      log.severity === "Warning" ? "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400" :
                      "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400"
                    }`}>
                      {log.severity}
                    </span>
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

export default AuditLogsTabe;