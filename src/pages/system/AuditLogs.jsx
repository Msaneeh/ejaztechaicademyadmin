import { useState } from "react";
import { 
  Download, 
} from "lucide-react";
import { auditLogs } from "@/mockData/auditLogs";

// Components
import StatCard from "@/components/auditLogs/StatCard";
import SearchBar from "@/components/auditLogs/SearchBar";
import Filters from "@/components/auditLogs/Filters";
import AuditLogsTabe from "@/components/auditLogs/AuditLogsTabe";
import AuditEventDrawer from "@/components/auditLogs/AuditEventDrawer";

export default function AuditLogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");
  
  const [selectedLog, setSelectedLog] = useState(null);

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = 
      log.actor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSeverity = severityFilter === "All" || log.severity === severityFilter;

    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Audit Logs</h1>
          <p className="mt-1 text-sm text-ink-soft">Monitor, inspect, and investigate important administrative and system activities.</p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-ink-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition">
          <Download className="h-4 w-4" /> Export Logs
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Total Events" value="18,420" desc="Recorded audit events" />
        <StatCard title="Admin Actions" value="1,240" desc="Performed by administrators" />
        <StatCard title="Security Events" value="12" desc="Require security attention" alert />
        <StatCard title="Latest Activity" value="Today" desc="Most recent event" />
      </div>

      {/* Search & Filters Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <Filters severityFilter={severityFilter} setSeverityFilter={setSeverityFilter} />
        </div>
      </div>

      {/* Audit Logs Table */}
      <AuditLogsTabe filteredLogs={filteredLogs} setSelectedLog={setSelectedLog} />

      {/* --- AUDIT EVENT DRAWER --- */}
      <AuditEventDrawer selectedLog={selectedLog} setSelectedLog={setSelectedLog} />

    </div>
  );
}
