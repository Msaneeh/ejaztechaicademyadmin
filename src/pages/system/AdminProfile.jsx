import { useState } from "react";
import { 
  User, 
  Shield, 
  Monitor, 
  Bell, 
  Save,
  CheckCircle2,
  Camera,
  Smartphone,
  Laptop,
  X
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

// components
import SessionRow from "@/components/profile/SessionRow";
import ToggleRow from "@/components/profile/ToggleRow";
import Sidebar from "@/components/profile/Sidebar";
import PersonalInfo from "@/components/profile/PersonalInfo";
import Security from "@/components/profile/Security";
import Sessions from "@/components/profile/Sessions";
import Notifications from "@/components/profile/Notifications";

const TABS = [
  { id: "personal", label: "Personal Info", icon: User },
  { id: "security", label: "Security", icon: Shield },
  { id: "sessions", label: "Active Sessions", icon: Monitor },
  { id: "notifications", label: "Notifications", icon: Bell },
];

export default function AdminProfile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("personal");
  const [showToast, setShowToast] = useState(false);
  
  // Form State
  const [profileData, setProfileData] = useState({
    name: user?.name || "Muhammad Admin",
    email: user?.email || "admin@ejaztech.ai",
    phone: "+234 XXX XXX XXXX",
    jobTitle: "Platform Administrator",
    bio: "Administrator responsible for managing platform operations."
  });

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleRevokeSession = (deviceId) => {
    alert(`Revoked session for ${deviceId}`);
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-12 relative">
      
      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 shadow-lg animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          Profile updated successfully.
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Admin Profile</h1>
        <p className="mt-1 text-sm text-ink-soft">Manage your personal information and account security.</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        
        {/* Sidebar Navigation */}
        <Sidebar TABS={TABS} activeTab={activeTab} setActiveTab={setActiveTab} user={user} profileData={profileData} />

        {/* Content Area */}
        <div className="flex-1 rounded-2xl border border-ink-line bg-surface p-6 sm:p-8">
          
          {/* TAB: Personal Info */}
          <PersonalInfo activeTab={activeTab} profileData={profileData} setProfileData={setProfileData} handleSave={handleSave} />

          {/* TAB: Security */}
          <Security activeTab={activeTab} />

          {/* TAB: Sessions */}
          <Sessions activeTab={activeTab} handleRevokeSession={handleRevokeSession} />

          {/* TAB: Notifications */}
          <Notifications activeTab={activeTab} />

        </div>
      </div>
    </div>
  );
}
