
const StatCard = ({ title, value, desc, icon: Icon, iconColor = "text-ink-faint", alert }) => {
  return (
    <div className="rounded-2xl border border-ink-line bg-surface p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">{title}</p>
        {Icon && <Icon className={`h-4 w-4 ${iconColor}`} />}
      </div>
      <p className={`mt-2 text-2xl font-bold ${alert ? "text-orange-600" : "text-ink"}`}>{value}</p>
      <p className="mt-1 text-xs text-ink-soft">{desc}</p>
    </div>
  );
}

export default StatCard;