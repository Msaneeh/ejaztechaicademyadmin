import { useState } from "react";
import { Plus } from "lucide-react";
import { reports } from "@/mockData/reports";

// Components
import StatCard from "@/components/reports/StatCard";
import SearchBar from "@/components/reports/SearchBar";
import ReportsTable from "@/components/reports/ReportsTable";
import CreateReportModal from "@/components/reports/CreateReportModal"


const REPORT_CATEGORIES = [
  { id: "user", label: "User Report", desc: "Registrations, active accounts" },
  { id: "course", label: "Course Report", desc: "Enrollments, completion rates" },
  { id: "learning", label: "Learning Report", desc: "Progress, assessment results" },
  { id: "enrollment", label: "Enrollment Report", desc: "Paid vs free, revocations" },
  { id: "financial", label: "Financial Report", desc: "Revenue, refunds, payments" },
  { id: "admin", label: "Admin Report", desc: "Audit logs, moderation actions" },
];

export default function Reports() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Wizard State
  const [wizardStep, setWizardStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [reportFormat, setReportFormat] = useState("PDF");
  const [dateRange, setDateRange] = useState("Last 30 Days");

  const filteredReports = reports.filter(report => 
    report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGenerate = () => {
    alert(`Generating ${selectedCategory} Report in ${reportFormat} format.`);
    setIsModalOpen(false);
    setWizardStep(1);
    setSelectedCategory("");
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Reports</h1>
          <p className="mt-1 text-sm text-ink-soft">Generate, manage and export reports about platform operations.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas hover:opacity-90 transition"
        >
          <Plus className="h-4 w-4" /> Create Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Total Reports" value="128" desc="Reports generated" />
        <StatCard title="This Month" value="24" desc="Generated this month" />
        <StatCard title="Scheduled" value="6" desc="Active recurring schedules" />
        <StatCard title="Exports" value="86" desc="Successful exports" />
      </div>

      {/* Search Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {/* Reports Table */}
      <ReportsTable filteredReports={filteredReports} />

      {/* --- CREATE REPORT MODAL --- */}
       
      <CreateReportModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        wizardStep={wizardStep}
        setWizardStep={setWizardStep}
        dateRange={dateRange}
        setDateRange={setDateRange}
        RefCat={REPORT_CATEGORIES}
        reportFormat={reportFormat}
        setReportFormat={setReportFormat}
        handleGenerate={handleGenerate}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />  


    </div>
  );
}
