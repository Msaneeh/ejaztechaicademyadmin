import { useState } from "react";
import { Plus } from "lucide-react";
import { categories } from "@/mockData/categories";

// Components
import StatCard from "@/components/categories/StatCard";
import SearchBar from "@/components/categories/SearchBar";
import CategoriesTable from "@/components/categories/CategoriesTable";
import CategoryModal from "@/components/categories/CategoryModal";
import DeleteConfirmModal from "@/components/categories/DeleteConfirmModal";

export default function CategoriesManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal States
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingCategory, setDeletingCategory] = useState(null);

  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // --- Handlers ---
  
  const handleCreateClick = () => {
    setEditingCategory(null);
    setIsCategoryModalOpen(true);
  };

  const handleEditClick = (cat) => {
    setEditingCategory(cat);
    setIsCategoryModalOpen(true);
  };

  const handleDeleteClick = (cat) => {
    setDeletingCategory(cat);
    setIsDeleteModalOpen(true);
  };

  const handleSaveCategory = (formData, isEditing) => {
    alert(`${isEditing ? "Updated" : "Created"} category: ${formData.name}`);
    setIsCategoryModalOpen(false);
  };

  const handleConfirmDelete = () => {
    alert(`Category "${deletingCategory.name}" deleted.`);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Categories Management</h1>
          <p className="mt-1 text-sm text-ink-soft">Create, organize and manage course classifications.</p>
        </div>
        <button 
          onClick={handleCreateClick}
          className="flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas hover:opacity-90 transition"
        >
          <Plus className="h-4 w-4" /> Add Category
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Total Categories" value="24" desc="All categories & subcategories" />
        <StatCard title="Active Categories" value="20" desc="Available for classification" />
        <StatCard title="Assigned Courses" value="245" desc="Courses linked to categories" />
        <StatCard title="Parent Categories" value="8" desc="Top-level subject areas" />
      </div>

      {/* Search */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {/* Categories Table */}
      <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
        <CategoriesTable 
          filteredCategories={filteredCategories} 
          openEditModal={handleEditClick} 
          handleDelete={handleDeleteClick} 
        />
      </div>

      {/* Modals */}
      <CategoryModal 
        isOpen={isCategoryModalOpen} 
        onClose={() => setIsCategoryModalOpen(false)} 
        onSave={handleSaveCategory} 
        category={editingCategory} 
      />

      <DeleteConfirmModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setIsDeleteModalOpen(false)} 
        onConfirm={handleConfirmDelete} 
        category={deletingCategory} 
      />

    </div>
  );
}