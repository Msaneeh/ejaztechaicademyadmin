const MiniStat = ({ label, value, alert }) => {
  return (
    <div className="rounded-xl border border-ink-line bg-surface p-4 text-center">
      <p className={`text-xl font-bold ${alert ? "text-red-600" : "text-ink"}`}>{value}</p>
      <p className="text-xs text-ink-soft mt-1">{label}</p>
    </div>
  );
}

export default MiniStat;