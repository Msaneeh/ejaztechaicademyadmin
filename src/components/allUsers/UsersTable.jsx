import { MoreVertical, CheckCircle2, AlertCircle } from "lucide-react"

const UsersTable = ({ filteredUsers, openUserDrawer }) => {
  return (
          <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink">
            <thead className="border-b border-ink-line bg-ink/5 text-xs uppercase tracking-wider text-ink-faint">
              <tr>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">ID</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Joined</th>
                <th className="px-6 py-4 font-medium">Last Active</th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-line">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-ink-soft">
                    No users found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr 
                    key={user.id} 
                    onClick={() => openUserDrawer(user)}
                    className="group cursor-pointer transition hover:bg-ink/5"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/10 text-xs font-semibold text-ink">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-ink">{user.name}</p>
                          <p className="text-xs text-ink-soft">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-mono text-ink-soft">{user.id}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                        user.role === "Admin" ? "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400" :
                        user.role === "Tutor" ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" :
                        "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {user.status === "Active" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
                         user.status === "Suspended" ? <AlertCircle className="h-4 w-4 text-red-500" /> : 
                         <AlertCircle className="h-4 w-4 text-orange-500" />}
                        <span className="text-xs font-medium text-ink">{user.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-ink-soft">{user.joined}</td>
                    <td className="px-6 py-4 text-xs text-ink-soft">{user.lastActive}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="rounded-md p-1.5 text-ink-faint opacity-0 transition hover:bg-ink/10 hover:text-ink group-hover:opacity-100">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default UsersTable