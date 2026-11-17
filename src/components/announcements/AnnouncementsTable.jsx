import { Eye } from "lucide-react"

const AnnouncementsTable = ({ filteredAnnouncements, setPreviewAnnouncement }) => {
  return (
    <>
            <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink">
            <thead className="border-b border-ink-line bg-ink/5 text-xs uppercase tracking-wider text-ink-faint">
              <tr>
                <th className="px-6 py-4 font-medium">Announcement</th>
                <th className="px-6 py-4 font-medium">Audience</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-line">
              {filteredAnnouncements.map((ann) => (
                <tr key={ann.id} className="hover:bg-ink/5 transition">
                  <td className="px-6 py-4">
                    <p className="font-medium text-ink">{ann.title}</p>
                    <p className="text-xs text-ink-soft">By {ann.createdBy}</p>
                  </td>
                  <td className="px-6 py-4 text-xs text-ink-soft">{ann.audience}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-ink bg-ink/5 px-2 py-1 rounded">{ann.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                      ann.status === "Published" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" :
                      ann.status === "Scheduled" ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" :
                      "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400"
                    }`}>
                      {ann.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-ink-soft">{ann.date}</td>
                  <td className="px-6 py-4 text-right">
                     <button 
                       onClick={() => setPreviewAnnouncement(ann)}
                       className="rounded-md p-2 text-ink-soft hover:bg-ink/10 hover:text-ink transition"
                       title="Preview"
                     >
                        <Eye className="h-4 w-4" />
                     </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default AnnouncementsTable