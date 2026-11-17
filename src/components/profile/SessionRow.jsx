const SessionRow = ({ icon: Icon, device, location, lastActive, isCurrent, onRevoke }) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-ink-line bg-canvas p-4">
      <div className="flex items-center gap-4">
        <Icon className="h-6 w-6 text-ink-soft" />
        <div>
          <p className="text-sm font-medium text-ink">{device}</p>
          <p className="text-xs text-ink-soft">{location} · {lastActive}</p>
        </div>
      </div>
      {isCurrent ? (
        <span className="rounded-full bg-green-100 text-green-700 px-2 py-1 text-[10px] font-medium">Current</span>
      ) : (
        <button onClick={onRevoke} className="text-xs font-medium text-red-600 hover:underline">Revoke</button>
      )}
    </div>
  );
}

export default SessionRow;