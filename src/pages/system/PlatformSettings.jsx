import { useState } from "react";
import { 
  Settings, 
  Image, 
  UserPlus, 
  BookOpen, 
  ShieldCheck, 
  Save,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

const SETTINGS_TABS = [
  // { id: "general", label: "General Settings", icon: Settings },
  { id: "registration", label: "User & Registration", icon: UserPlus },
  { id: "courses", label: "Learning & Courses", icon: BookOpen },
  { id: "security", label: "Security & Access", icon: ShieldCheck },
];

// Components
import ToggleRow from "@/components/settings/ToggleRow";
import SettingsSidebar from "@/components/settings/SettingsSidebar";
import Registration from "@/components/settings/Registration";
import Courses from "@/components/settings/Courses";
import Security from "@/components/settings/Security";

export default function PlatformSettings() {
  const [activeTab, setActiveTab] = useState("general");
  const [showToast, setShowToast] = useState(false);
  
  // Mock state for form fields
  const [generalData, setGeneralData] = useState({
    platformName: "Ejaztech E-Learning Platform",
    description: "A platform for learning, teaching and professional development.",
    supportEmail: "support@ejaztech.com",
    websiteUrl: "https://ejaztech.com"
  });

  const [registrationData, setRegistrationData] = useState({
    allowStudents: true,
    allowTutors: true,
    allowAdmins: false,
    requireEmailVerification: true,
    requireTutorVerification: true
  });

  const [courseData, setCourseData] = useState({
    requireApproval: true,
    allowFree: true,
    allowPaid: true,
    enableCertificates: true
  });

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleState = (setter, key) => {
    setter(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-12 relative">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 shadow-lg animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          Settings saved successfully.
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Platform Settings</h1>
          <p className="mt-1 text-sm text-ink-soft">Configure platform behavior, security, and operational preferences.</p>
        </div>
        <button 
          onClick={handleSave}
          className="flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas hover:opacity-90 transition"
        >
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        
        {/* Settings Sidebar Navigation */}
        <SettingsSidebar Tabs={SETTINGS_TABS} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Settings Content Area */}
        <div className="flex-1 rounded-2xl border border-ink-line bg-surface p-6 sm:p-8">
          
          {/* TAB: General */}
          {/* {activeTab === "general" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-lg font-semibold text-ink">General Settings</h2>
                <p className="text-sm text-ink-soft mt-1">Basic platform identity and contact information.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink">Platform Name</label>
                  <input 
                    type="text" 
                    value={generalData.platformName}
                    onChange={(e) => setGeneralData({ ...generalData, platformName: e.target.value })}
                    className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" 
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink">Platform Description</label>
                  <textarea 
                    rows="2"
                    value={generalData.description}
                    onChange={(e) => setGeneralData({ ...generalData, description: e.target.value })}
                    className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30 resize-none" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink">Support Email</label>
                    <input 
                      type="email" 
                      value={generalData.supportEmail}
                      onChange={(e) => setGeneralData({ ...generalData, supportEmail: e.target.value })}
                      className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" 
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink">Website URL</label>
                    <input 
                      type="url" 
                      value={generalData.websiteUrl}
                      onChange={(e) => setGeneralData({ ...generalData, websiteUrl: e.target.value })}
                      className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30" 
                    />
                  </div>
                </div>
              </div>
            </div>
          )} */}

          {/* TAB: Registration */}
          <Registration activeTab={activeTab} registrationData={registrationData} toggleState={toggleState} setRegistrationData={setRegistrationData} />

          {/* TAB: Courses */}
          <Courses activeTab={activeTab} toggleState={toggleState} courseData={courseData} setCourseData={setCourseData} />

          {/* TAB: Security */}
          <Security activeTab={activeTab} />

        </div>
      </div>
    </div>
  );
}
