import { useState } from "react";
import { supportRequests } from "@/mockData/supportRequests";

// Components 
import StatCard from "@/components/supportRequests/StatCard";
import SearchBar from "@/components/supportRequests/SearchBar";
import Filters from "@/components/supportRequests/Filters";
import RequestsTable from "@/components/supportRequests/RequestsTable";
import SupportWorkspaceModal from "@/components/supportRequests/SupportWorkspaceModal";

export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [isInternalNote, setIsInternalNote] = useState(false);

  const filteredRequests = supportRequests.filter(req => {
    const matchesSearch = 
      req.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || req.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleSendReply = () => {
    alert(`Reply sent:\n${replyText}`);
    setReplyText("");
    setIsInternalNote(false);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Support Requests</h1>
          <p className="mt-1 text-sm text-ink-soft">Manage user complaints, questions, and technical support cases.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatCard title="Total Requests" value="128" desc="All recorded requests" />
        <StatCard title="Open Requests" value="34" desc="Awaiting resolution" alert />
        <StatCard title="High Priority" value="8" desc="Urgent or critical cases" />
        <StatCard title="Resolved" value="87" desc="Successfully closed" />
        <StatCard title="Avg. First Response" value="4.2 hrs" desc="Before human response" />
      </div>

      {/* Search & Filters Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <Filters statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
        </div>
      </div>

      {/* Requests Table */}
      <RequestsTable 
        filteredRequests={filteredRequests} 
        setSelectedRequest={setSelectedRequest} 
      />

      {/* --- SUPPORT WORKSPACE MODAL --- */}
      {/* FIXED: Passed selectedRequest instead of searchQuery, and passed all required props */}
      <SupportWorkspaceModal 
        selectedRequest={selectedRequest} 
        setSelectedRequest={setSelectedRequest} 
        isInternalNote={isInternalNote}
        setIsInternalNote={setIsInternalNote}
        replyText={replyText}
        setReplyText={setReplyText}
        handleSendReply={handleSendReply} 
      />

    </div>
  );
}