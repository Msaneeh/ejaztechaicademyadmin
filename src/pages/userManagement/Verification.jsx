import { useState } from "react";
import { verifications } from "@/mockData/verifications";

// Components 
import StatCard from "@/components/verification/StatCard";
import SearchBar from "@/components/verification/SearchBar";
import Filters from "@/components/verification/Filters";
import QueueTable from "@/components/verification/QueueTable";
import VerificationModel from "@/components/verification/VerificationModel";

export default function Verification() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [reviewDecision, setReviewDecision] = useState("");
  const [reviewNote, setReviewNote] = useState("");

  const filteredRequests = verifications.filter(req => {
    const matchesSearch = 
      req.tutorName.toLowerCase().includes(searchQuery.toLowerCase()) || 
      req.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || req.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleDecision = () => {
    alert(`Decision submitted: ${reviewDecision}\nNote: ${reviewNote}`);
    setSelectedRequest(null);
    setReviewDecision("");
    setReviewNote("");
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Verification Requests</h1>
          <p className="mt-1 text-sm text-ink-soft">Review tutor credentials and manage verification applications.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Pending Review" value="24" desc="Needs attention" alert />
        <StatCard title="Under Review" value="8" desc="Being reviewed" />
        <StatCard title="Approved (Month)" value="42" desc="Successfully verified" />
        <StatCard title="Rejected (Month)" value="6" desc="Unsuccessful applications" />
      </div>

      {/* Search & Filters Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <Filters statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
        </div>
      </div>

      {/* Verification Queue Table */}

      <QueueTable filteredRequests={filteredRequests} setSelectedRequest={setSelectedRequest} />

      {/* --- REVIEW WORKSPACE MODAL --- */}
      <VerificationModel 
         selectedRequest={selectedRequest}
         setSelectedRequest={setSelectedRequest}
         reviewDecision={reviewDecision}
         setReviewDecision={setReviewDecision}
         reviewNote={reviewNote}
         setReviewNote={setReviewNote}
         handleDecision={handleDecision}
      />

    </div>
  );
}

