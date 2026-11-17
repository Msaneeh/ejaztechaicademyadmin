import { useState } from "react";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, Users, GraduationCap, BookOpen, ShieldCheck, 
  Settings, FileText, Bell, LogOut, Menu, X, BarChart2,
  FolderTree, MessageSquare, History,
  Megaphone,
  UserLockIcon
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const NAV_GROUPS = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    ]
  },
  {
    title: "User Management",
    items: [
      { label: "All Users", icon: Users, path: "/users" },
      { label: "Students", icon: GraduationCap, path: "/students" },
      { label: "Tutors", icon: BookOpen, path: "/tutors" },
      { label: "Verification Requests", icon: ShieldCheck, path: "/verifications", badge: 5 },
    ]
  },
  {
    title: "Academic Management",
    items: [
      { label: "Courses", icon: BookOpen, path: "/courses" },
      { label: "Categories", icon: FolderTree, path: "/categories" },
    ]
  },
  {
    title: "Platform Operations",
    items: [
      { label: "Learning Activity", icon: History, path: "/activity" },
      { label: "Analytics", icon: BarChart2, path: "/analytics" },
      { label: "Reports", icon: FileText, path: "/reports" },
    ]
  },
  {
    title: "Communication & Support",
    items: [
      { label: "Announcements", icon: Megaphone, path: "/announcements" },
      { label: "Support Requests", icon: MessageSquare, path: "/support" },
    ]
  },
  {
    title: "System",
    items: [
      { label: "Audit Logs", icon: History, path: "/audit" },
      { label: "Settings", icon: Settings, path: "/settings" },
      { label: "Admin Profile", icon: UserLockIcon, path: "/profile" },
    ]
  }
];

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-canvas text-ink">
      
      {/* Mobile Drawer Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 transform border-r border-ink-line bg-surface transition-transform duration-200 ease-in-out
        lg:static lg:translate-x-0 flex flex-col
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        {/* Brand */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-ink-line px-6">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded-full" />
            <span className="text-sm font-bold tracking-tight">EJAZTECH ADMIN</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-ink-soft hover:text-ink">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Groups */}
        <div className="flex-1 overflow-y-auto py-4 px-3 [&::-webkit-scrollbar]:hidden">
          {NAV_GROUPS.map((group, idx) => (
            <div key={idx} className="mb-6">
              <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-ink-faint">
                {group.title}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) => `
                      flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition
                      ${isActive ? "bg-ink/5 text-ink" : "text-ink-soft hover:bg-ink/5 hover:text-ink"}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </div>
                    {item.badge && (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-ink px-1.5 text-[10px] text-canvas">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* User Footer */}
        <div className="border-t border-ink-line p-4">
          <div className="mb-3 flex items-center gap-3 px-2">
            <img src={user?.avatar} alt="User" className="h-9 w-9 rounded-full border border-ink-line" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{user?.name}</p>
              <p className="truncate text-xs text-ink-faint">{user?.title}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition">
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-ink-line bg-surface px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-ink-soft hover:text-ink">
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold tracking-tight hidden sm:block">Platform Administration</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/notifications" className="relative text-ink-soft hover:text-ink">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 ring-2 ring-surface" />
            </Link>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-ink-line">
              <img src={user?.avatar} alt="Profile" className="h-full w-full object-cover" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-canvas p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;