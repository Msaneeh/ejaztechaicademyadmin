const CheckItem = ({ label, checked, onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center gap-3 cursor-pointer group">
      <div className={`flex h-5 w-5 items-center justify-center rounded border transition ${
        checked ? "bg-ink border-ink text-canvas" : "border-ink-line bg-canvas group-hover:border-ink/50"
      }`}>
        {checked && <Check className="h-3.5 w-3.5" />}
      </div>
      <span className={`text-sm ${checked ? "text-ink font-medium" : "text-ink-soft"}`}>{label}</span>
    </div>
  );
}

export default CheckItem;