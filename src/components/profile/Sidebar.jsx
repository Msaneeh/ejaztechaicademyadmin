import { Camera } from "lucide-react";

const Sidebar = ({ TABS, activeTab, setActiveTab, user, profileData }) => {
  return (
    <>
            <aside className="w-full shrink-0 lg:w-64">
          <div className="mb-6 flex flex-col items-center rounded-2xl border border-ink-line bg-surface p-6 text-center">
             <div className="relative mb-4">
                <img src={user?.avatar || "/logo.jpg"} alt="Admin" className="h-20 w-20 rounded-full border-2 border-ink-line object-cover" />
                <button className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border border-ink-line bg-surface text-ink-soft hover:bg-ink/5">
                  <Camera className="h-3.5 w-3.5" />
                </button>
             </div>
             <h2 className="font-semibold text-ink">{profileData.name}</h2>
             <p className="text-xs text-ink-soft mb-2">{profileData.email}</p>
             <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[10px] font-medium text-ink uppercase tracking-wider">
                Super Admin
             </span>
          </div>

          <nav className="flex space-x-1 overflow-x-auto pb-2 lg:flex-col lg:space-x-0 lg:space-y-1 lg:pb-0">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "flex items-center gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-medium transition",
                    isActive
                      ? "bg-ink text-canvas"
                      : "text-ink-soft hover:bg-ink/5 hover:text-ink",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>
    </>
  )
}

export default Sidebar