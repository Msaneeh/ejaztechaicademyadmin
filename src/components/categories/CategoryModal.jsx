import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { categories } from "@/mockData/categories";

export default function CategoryModal({ isOpen, onClose, onSave, category }) {
  const isEditing = !!category;
  
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    parentId: "",
    description: "",
    isActive: true,
  });

  // Populate form if editing
  useEffect(() => {
    if (isOpen) {
      if (category) {
        setFormData({
          name: category.name,
          slug: category.slug,
          parentId: category.parentId || "",
          description: "", // Mock
          isActive: category.status === "Active",
        });
      } else {
        setFormData({ name: "", slug: "", parentId: "", description: "", isActive: true });
      }
    }
  }, [isOpen, category]);

  if (!isOpen) return null;

  const handleNameChange = (e) => {
    const newName = e.target.value;
    const newSlug = newName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    setFormData({ ...formData, name: newName, slug: newSlug });
  };

  const handleSubmit = () => {
    onSave(formData, isEditing);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-surface shadow-2xl border border-ink-line">
        
        <div className="flex items-center justify-between border-b border-ink-line p-6">
          <h2 className="text-xl font-bold text-ink">
            {isEditing ? "Edit Category" : "Add Category"}
          </h2>
          <button onClick={onClose} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 bg-canvas space-y-4">
          
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink">Category Name *</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={handleNameChange}
              placeholder="e.g. Artificial Intelligence"
              className="w-full rounded-xl border border-ink-line bg-surface px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" 
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink">Slug (URL path)</label>
            <input 
              type="text" 
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="artificial-intelligence"
              className="w-full rounded-xl border border-ink-line bg-surface px-4 py-2 text-sm text-ink outline-none focus:border-ink/30 font-mono text-xs" 
            />
            <p className="text-xs text-ink-soft mt-1">Must be unique across the platform.</p>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink">Parent Category</label>
            <select 
              value={formData.parentId}
              onChange={(e) => setFormData({ ...formData, parentId: e.target.value })}
              className="w-full rounded-xl border border-ink-line bg-surface px-4 py-2 text-sm text-ink outline-none"
            >
              <option value="">No parent (Top-level category)</option>
              {categories.filter(c => !c.parentId && c.id !== category?.id).map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink">Description</label>
            <textarea 
              rows="2"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description of what belongs here..."
              className="w-full rounded-xl border border-ink-line bg-surface p-3 text-sm text-ink outline-none focus:border-ink/30 resize-none" 
            />
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-ink-line">
            <div>
              <p className="text-sm font-medium text-ink">Active</p>
              <p className="text-xs text-ink-soft">Available for course assignment</p>
            </div>
            <button 
              onClick={() => setFormData({ ...formData, isActive: !formData.isActive })}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors ${
                formData.isActive ? "bg-ink" : "bg-ink/20"
              }`}
            >
              <span className={`inline-block h-4 w-4 rounded-full bg-surface transition-transform ${
                formData.isActive ? "translate-x-6" : "translate-x-1"
              }`} />
            </button>
          </div>
        </div>

        <div className="border-t border-ink-line bg-surface p-4 flex items-center justify-end gap-3">
          <button onClick={onClose} className="rounded-md px-4 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5">
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            disabled={!formData.name || !formData.slug}
            className="rounded-md bg-ink px-6 py-2 text-sm font-medium text-canvas hover:opacity-90 disabled:opacity-50 transition"
          >
            {isEditing ? "Save Changes" : "Create Category"}
          </button>
        </div>
      </div>
    </div>
  );
}