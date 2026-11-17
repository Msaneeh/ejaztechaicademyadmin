import { useState } from "react";
import { 
  Download, 
  X, 
  ShieldCheck,
  BookOpen,
  Mail,
  Ban,
  ShieldAlert
} from "lucide-react";
import { tutors } from "@/mockData/tutors";

// Components
import StatCard from "@/components/tutors/StatCard";
import SearchBar from "@/components/tutors/SearchBar";
import Filters from "@/components/tutors/Filters";
import TutorTable from "@/components/tutors/TutorTable";
import TutorDetail from "@/components/tutors/TutorDetail";


export default function TutorManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [verificationFilter, setVerificationFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Suspend Modal State
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [suspendReason, setSuspendReason] = useState("");

  const filteredTutors = tutors.filter(tutor => {
    const matchesSearch = 
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tutor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.expertise.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesVerification = verificationFilter === "All" || tutor.verification === verificationFilter;
    const matchesStatus = statusFilter === "All" || tutor.accountStatus === statusFilter;

    return matchesSearch && matchesVerification && matchesStatus;
  });

  const handleSuspend = () => {
    alert(`Tutor ${selectedTutor.name} suspended. Reason: ${suspendReason}`);
    setShowSuspendModal(false);
    setSelectedTutor(null);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Tutor Management</h1>
          <p className="mt-1 text-sm text-ink-soft">Manage tutor accounts, professional profiles, and teaching activity.</p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-ink-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition">
          <Download className="h-4 w-4" /> Export Tutors
        </button>
      </div>

      {/* Summary StatCards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Total Tutors" value="248" desc="All registered tutors" />
        <StatCard title="Verified Tutors" value="186" desc="Approved credentials" icon={ShieldCheck} iconColor="text-green-500" />
        <StatCard title="Active Tutors" value="211" desc="Accounts in good standing" />
        <StatCard title="Teaching Tutors" value="154" desc="With active published courses" icon={BookOpen} />
      </div>

      {/* Search & Filters Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <Filters 
            verificationFilter={verificationFilter}
            setVerificationFilter={setVerificationFilter}
            statusFilter={statusFilter} 
            setStatusFilter={setStatusFilter}
          />
        </div>
      </div>

      {/* Tutor Directory Table */}
      <TutorTable filteredTutors={filteredTutors} setSelectedTutor={setSelectedTutor} />

      {/* --- TUTOR DETAILS DRAWER --- */}
      <TutorDetail 
         selectedTutor={selectedTutor}
         setSelectedTutor={setSelectedTutor}
         activeTab={activeTab}
         setActiveTab={setActiveTab}
         setShowSuspendModal={setShowSuspendModal}
      />
      {/* --- SUSPEND CONFIRMATION MODAL --- */}
      {showSuspendModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-surface p-6 shadow-2xl border border-ink-line">
            <div className="flex items-center gap-3 mb-4">
               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                 <Ban className="h-5 w-5" />
               </div>
               <div>
                 <h3 className="text-lg font-semibold text-ink">Suspend Tutor</h3>
                 <p className="text-sm text-ink-soft">This action will restrict access.</p>
               </div>
            </div>
            
            <p className="text-sm text-ink-soft mb-4">
              Are you sure you want to suspend <strong>{selectedTutor.name}</strong>? Their courses will not be deleted, but they will lose access to the platform.
            </p>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-ink">Reason for suspension *</label>
              <select 
                value={suspendReason}
                onChange={(e) => setSuspendReason(e.target.value)}
                className="w-full rounded-xl border border-ink-line bg-canvas px-4 py-2 text-sm text-ink outline-none focus:border-ink/30"
              >
                <option value="">Select a reason...</option>
                <option value="policy">Violation of content policy</option>
                <option value="fraud">Suspected fraudulent activity</option>
                <option value="request">Tutor requested suspension</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowSuspendModal(false)} className="rounded-md px-4 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5">
                Cancel
              </button>
              <button 
                onClick={handleSuspend}
                disabled={!suspendReason}
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
              >
                Confirm Suspension
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
