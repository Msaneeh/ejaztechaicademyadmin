
const StatCard = ({ title, value, desc, alert }) => {
  return (
    <div className="rounded-2xl border border-ink-line bg-surface p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">{title}</p>
      <p className={`mt-2 text-2xl font-bold ${alert ? "text-orange-600" : "text-ink"}`}>{value}</p>
      <p className="mt-1 text-xs text-ink-soft">{desc}</p>
    </div>
  );
}

export default StatCard;