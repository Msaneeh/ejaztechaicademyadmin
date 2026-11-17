import { AlertTriangle } from "lucide-react";

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm, category }) {
  if (!isOpen || !category) return null;

  const hasCourses = category.courses > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-surface p-6 shadow-2xl border border-ink-line">
        
        <div className="flex items-center gap-3 mb-4">
           <div className={`flex h-10 w-10 items-center justify-center rounded-full ${hasCourses ? "bg-orange-100 text-orange-600" : "bg-red-100 text-red-600"}`}>
             <AlertTriangle className="h-5 w-5" />
           </div>
           <div>
             <h3 className="text-lg font-semibold text-ink">
                {hasCourses ? "Cannot Delete Category" : "Delete Category?"}
             </h3>
             <p className="text-sm text-ink-soft">
                {hasCourses ? "This category is currently in use." : "This action cannot be undone."}
             </p>
           </div>
        </div>

        {hasCourses ? (
          <p className="text-sm text-ink-soft mb-6">
            The category <strong>{category.name}</strong> has <strong>{category.courses} courses</strong> attached to it. You must reassign these courses to another category before you can delete this one.
          </p>
        ) : (
          <p className="text-sm text-ink-soft mb-6">
            Are you sure you want to permanently delete <strong>{category.name}</strong>? This will remove the category from the platform.
          </p>
        )}

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="rounded-md px-4 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5">
            {hasCourses ? "Close" : "Cancel"}
          </button>
          {!hasCourses && (
            <button 
              onClick={onConfirm}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
            >
              Yes, Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}