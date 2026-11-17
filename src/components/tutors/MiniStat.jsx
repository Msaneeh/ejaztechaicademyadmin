const MiniStat = ({ label, value }) => {
  return (
    <div className="rounded-xl border border-ink-line bg-surface p-4 text-center">
      <p className="text-xl font-bold text-ink">{value}</p>
      <p className="text-xs text-ink-soft mt-1">{label}</p>
    </div>
  );
}

export default MiniStat;