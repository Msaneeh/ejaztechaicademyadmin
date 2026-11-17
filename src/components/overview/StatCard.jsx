const StatCard = ({ title, value, trend, icon: Icon, alert }) => {
  return (
    <div className="rounded-2xl border border-ink-line bg-surface p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">{title}</p>
        <Icon className={`h-4 w-4 ${alert ? "text-orange-500" : "text-ink-faint"}`} />
      </div>
      <p className="text-2xl font-bold text-ink">{value}</p>
      <p className={`text-xs mt-1 font-medium ${alert ? "text-orange-500" : "text-green-600"}`}>
        {trend}
      </p>
    </div>
  );
}

export default StatCard