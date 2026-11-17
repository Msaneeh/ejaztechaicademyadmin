import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ActionCard = ({ title, desc, count, icon: Icon, link }) => {
  return (
    <Link to={link} className="group flex items-center justify-between rounded-2xl border border-ink-line bg-surface p-4 transition hover:border-ink/30">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{title}</p>
          <p className="text-xs text-ink-soft mt-0.5">{desc}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold text-ink">{count}</span>
        <ArrowRight className="h-4 w-4 text-ink-faint transition group-hover:translate-x-1 group-hover:text-ink" />
      </div>
    </Link>
  );
}

export default ActionCard;