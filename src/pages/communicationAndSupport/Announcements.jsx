import { useState } from "react";
import { 
  Plus
} from "lucide-react";
import { announcements } from "@/mockData/announcements";

// Components
import StatCard from "@/components/announcements/StatCard";
import SearchBar from "@/components/announcements/SearchBar";
import AnnouncementsTable from "@/components/announcements/AnnouncementsTable";
import CreateAnnouncementModal from "@/components/announcements/CreateAnnouncementModal";
import PreviewAnnouncementModal from "@/components/announcements/PreviewAnnouncementModal";

export default function Announcements() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [audience, setAudience] = useState("All Students");
  const [channels, setChannels] = useState(["in-app", "email"]);
  
  // Preview Modal State
  const [previewAnnouncement, setPreviewAnnouncement] = useState(null);

  const filteredAnnouncements = announcements.filter(ann => 
    ann.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePublish = () => {
    alert(`Publishing "${title}" to ${audience}`);
    setIsModalOpen(false);
    // Reset form
    setTitle("");
    setMessage("");
  };

  const toggleChannel = (channel) => {
    setChannels(prev => 
      prev.includes(channel) ? prev.filter(c => c !== channel) : [...prev, channel]
    );
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Announcements</h1>
          <p className="mt-1 text-sm text-ink-soft">Manage platform broadcasts and targeted communications.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas hover:opacity-90 transition"
        >
          <Plus className="h-4 w-4" /> Create Announcement
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Total Announcements" value="24" desc="Published broadcasts" />
        <StatCard title="Notifications Sent" value="18,420" desc="During selected period" />
        <StatCard title="Scheduled" value="3" desc="Upcoming broadcasts" />
        <StatCard title="Delivery Failures" value="12" desc="Requires investigation" alert />
      </div>

      {/* Search  Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {/* Announcements Table */}
      <div className="overflow-hidden rounded-2xl border border-ink-line bg-surface">
        <AnnouncementsTable filteredAnnouncements={filteredAnnouncements} setPreviewAnnouncement={setPreviewAnnouncement} />
      </div>

      {/* --- CREATE ANNOUNCEMENT MODAL --- */}
      <CreateAnnouncementModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title={title}
        setTitle={setTitle}
        message={message}
        setMessage={setMessage}
        audience={audience}
        setAudience={setAudience}
        channels={channels}
        toggleChannel={toggleChannel}
        handlePublish={handlePublish}
      />

      {/* --- PREVIEW ANNOUNCEMENT MODAL --- */}
      <PreviewAnnouncementModal previewAnnouncement={previewAnnouncement} setPreviewAnnouncement={setPreviewAnnouncement} />

    </div>
  );
}
