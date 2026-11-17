import { useState } from "react";
import { 
  Bell, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  ShieldCheck, 
  MessageSquare,
  Check,
  Search
} from "lucide-react";
import { adminNotifications } from "@/mockData/adminNotifications";
import SearchBar from "@/components/notifications/SearchBar";
import Filters from "@/components/notifications/Filters";
import NotificationList from "@/components/notifications/NotificationList";

export default function Notifications() {
  const [notifications, setNotifications] = useState(adminNotifications);
  const [activeTab, setActiveTab] = useState("all"); // all | unread
  const [searchQuery, setSearchQuery] = useState("");

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = notifications.filter(n => {
    const matchesTab = activeTab === "unread" ? !n.read : true;
    const matchesSearch = 
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const getIconData = (type) => {
    switch (type) {
      case "security": return { icon: AlertTriangle, color: "text-red-600", bg: "bg-red-100 dark:bg-red-500/10" };
      case "verification": return { icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-500/10" };
      case "course": return { icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-500/10" };
      case "support": return { icon: MessageSquare, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-500/10" };
      default: return { icon: Bell, color: "text-ink-soft", bg: "bg-ink/5" };
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Notifications</h1>
          <p className="mt-1 text-sm text-ink-soft">You have {unreadCount} unread {unreadCount === 1 ? "message" : "messages"}.</p>
        </div>
        
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="flex items-center gap-2 rounded-md border border-ink-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition"
          >
            <Check className="h-4 w-4" />
            Mark all as read
          </button>
        )}
      </div>

      {/* Search & Filters Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        
        <Filters activeTab={activeTab} setActiveTab={setActiveTab} unreadCount={unreadCount} />

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {/* Notification List */}
      <NotificationList filteredNotifications={filteredNotifications} markAsRead={markAllAsRead} getIconData={getIconData}/>
    </div>
  );
}