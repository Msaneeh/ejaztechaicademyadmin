import {   X, ShieldAlert } from "lucide-react";

const AuditEventDrawer = ({ selectedLog, setSelectedLog, }) => {
  return (
    <>
          {selectedLog && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="fixed inset-0" onClick={() => setSelectedLog(null)} />
          
          <div className="relative flex h-full w-full max-w-xl flex-col bg-surface shadow-2xl animate-in slide-in-from-right duration-200">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink-line p-6">
              <div>
                <h2 className="text-xl font-bold text-ink">{selectedLog.action}</h2>
                <p className="text-sm text-ink-soft font-mono">{selectedLog.id}</p>
              </div>
              <button onClick={() => setSelectedLog(null)} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 bg-canvas space-y-6">
              
              {/* Metadata */}
              <div className="grid grid-cols-2 gap-4 rounded-xl border border-ink-line bg-surface p-4">
                <div>
                  <p className="text-xs font-medium text-ink-faint uppercase">Timestamp</p>
                  <p className="text-sm font-medium text-ink mt-1">{selectedLog.timestamp}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-faint uppercase">Module</p>
                  <p className="text-sm font-medium text-ink mt-1">{selectedLog.module}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-faint uppercase">Result</p>
                  <p className="text-sm font-medium text-ink mt-1">{selectedLog.result}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-faint uppercase">Severity</p>
                  <p className={`text-sm font-medium mt-1 ${selectedLog.severity === "Warning" ? "text-orange-600" : "text-ink"}`}>{selectedLog.severity}</p>
                </div>
              </div>

              {/* Actor & Target */}
              <div className="rounded-xl border border-ink-line bg-surface p-4 space-y-4">
                <div>
                  <p className="text-xs font-medium text-ink-faint uppercase mb-1">Actor</p>
                  <p className="text-sm font-medium text-ink">{selectedLog.actor}</p>
                  <p className="text-xs text-ink-soft">{selectedLog.actorRole}</p>
                </div>
                <div className="h-px w-full bg-ink-line" />
                <div>
                  <p className="text-xs font-medium text-ink-faint uppercase mb-1">Target</p>
                  <p className="text-sm font-medium text-ink">{selectedLog.target}</p>
                  <p className="text-xs text-ink-soft font-mono">{selectedLog.targetId}</p>
                </div>
              </div>

              {/* Reason (if applicable) */}
              {selectedLog.reason && (
                <div className="rounded-xl border border-ink-line bg-surface p-4">
                  <p className="text-xs font-medium text-ink-faint uppercase mb-1">Reason</p>
                  <p className="text-sm text-ink-soft leading-relaxed">{selectedLog.reason}</p>
                </div>
              )}

              {/* Changes Comparison */}
              {selectedLog.changes && (
                <div className="rounded-xl border border-ink-line bg-surface overflow-hidden">
                  <div className="p-4 border-b border-ink-line bg-ink/5">
                    <h3 className="text-sm font-semibold text-ink">Changes</h3>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-medium text-ink-faint uppercase mb-2">Before</p>
                      <pre className="text-xs text-ink-soft bg-canvas p-2 rounded border border-ink-line">
                        {JSON.stringify(selectedLog.changes.before, null, 2)}
                      </pre>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-ink-faint uppercase mb-2">After</p>
                      <pre className="text-xs text-ink bg-canvas p-2 rounded border border-ink-line">
                        {JSON.stringify(selectedLog.changes.after, null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="border-t border-ink-line bg-surface p-4 flex items-center justify-between">
               <p className="text-xs text-ink-soft flex items-center gap-1"><ShieldAlert className="h-3.5 w-3.5" /> Audit records are read-only.</p>
               <button onClick={() => setSelectedLog(null)} className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas hover:opacity-90">
                 Close
               </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AuditEventDrawer;