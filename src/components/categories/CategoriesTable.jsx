import { FolderTree, Eye, Edit, Ban, EyeOff } from "lucide-react"

const CategoriesTable = ({ filteredCategories, openEditModal, handleDelete }) => {
  return (
    <>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-ink">
                  <thead className="border-b border-ink-line bg-ink/5 text-xs uppercase tracking-wider text-ink-faint">
                    <tr>
                      <th className="px-6 py-4 font-medium">Category</th>
                      <th className="px-6 py-4 font-medium">Parent</th>
                      <th className="px-6 py-4 font-medium">Courses</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium">Visibility</th>
                      <th className="px-6 py-4 font-medium">Updated</th>
                      <th className="px-6 py-4 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-line">
                    {filteredCategories.map((cat) => (
                      <tr key={cat.id} className="group hover:bg-ink/5 transition">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-md ${cat.parentId ? "bg-ink/5 ml-6" : "bg-ink/10"}`}>
                              <FolderTree className={`h-4 w-4 ${cat.parentId ? "text-ink-soft" : "text-ink"}`} />
                            </div>
                            <div>
                              <p className={`font-medium ${cat.parentId ? "text-ink-soft" : "text-ink"}`}>{cat.name}</p>
                              <p className="text-xs text-ink-faint">/{cat.slug}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-ink-soft">
                          {cat.parentName || "—"}
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-ink">{cat.courses}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                            cat.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" :
                            "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400"
                          }`}>
                            {cat.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-xs text-ink-soft">
                            {cat.visibility === "Visible" ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                            {cat.visibility}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-ink-soft">{cat.updated}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition">
                            <button 
                              onClick={() => openEditModal(cat)}
                              className="rounded-md p-1.5 text-ink-soft hover:bg-ink/10 hover:text-ink"
                              title="Edit"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => handleDelete(cat)}
                              className="rounded-md p-1.5 text-ink-soft hover:bg-red-50 hover:text-red-600"
                              title={cat.courses > 0 ? "Cannot delete while courses are attached" : "Delete"}
                            >
                              <Ban className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
    </>
  )
}

export default CategoriesTable