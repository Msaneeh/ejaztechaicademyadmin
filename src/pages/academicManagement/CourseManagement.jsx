import { useState } from "react";
import { 
  Download, 
  CheckCircle2, 
  Ban,
} from "lucide-react";
import { courses } from "@/mockData/courses";

// Components
import StatCard from "@/components/courses/StatCard";
import SearchBar from "@/components/courses/SearchBar";
import Filters from "@/components/courses/Filters";
import CoursesTable from "@/components/courses/CoursesTable";
import ReviewModal from "@/components/courses/ReviewModal";
import ModerationDrawer from "@/components/courses/ModerationDrawer";
import SuspendModal from "@/components/courses/SuspendModal";

export default function CourseManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  
  // Drawer State (For Published/Suspended Courses)
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  
  // Review Modal State (For Pending Courses)
  const [reviewingCourse, setReviewingCourse] = useState(null);
  const [checklist, setChecklist] = useState({
    info: false,
    curriculum: false,
    materials: false,
    assessments: false,
    policy: false
  });
  const [reviewDecision, setReviewDecision] = useState("");
  const [reviewNote, setReviewNote] = useState("");

  // Suspend Modal State
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [suspendReason, setSuspendReason] = useState("");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      course.tutor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || course.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // --- Handlers ---

  const handleRowClick = (course) => {
    if (course.status === "Pending") {
      setReviewingCourse(course);
      setChecklist({ info: false, curriculum: false, materials: false, assessments: false, policy: false });
      setReviewDecision("");
      setReviewNote("");
    } else {
      setSelectedCourse(course);
      setActiveTab("overview");
    }
  };

  const handleSuspend = () => {
    alert(`Course ${selectedCourse.title} suspended. Reason: ${suspendReason}`);
    setShowSuspendModal(false);
    setSelectedCourse(null);
  };

  const handleReviewSubmit = () => {
    alert(`Decision: ${reviewDecision}\nNote: ${reviewNote}`);
    setReviewingCourse(null);
  };

  const toggleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checklist).every(Boolean);

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Course Management</h1>
          <p className="mt-1 text-sm text-ink-soft">Manage, inspect, and review all courses across the platform.</p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-ink-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition">
          <Download className="h-4 w-4" /> Export Courses
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Total Courses" value="486" desc="All course records" />
        <StatCard title="Published" value="342" desc="Available to students" icon={CheckCircle2} iconColor="text-green-500" />
        <StatCard title="Awaiting Review" value="24" desc="Needs review" alert />
        <StatCard title="Suspended" value="7" desc="Restricted courses" icon={Ban} iconColor="text-red-500" />
      </div>

      {/* Search & Filters Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <Filters statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
        </div>
      </div>

      {/* Unified Courses Table */}
      <CoursesTable filteredCourses={filteredCourses} handleRowClick={handleRowClick} />

      {/* ========================================================= */}
      {/* 1. REVIEW MODAL (For Pending Courses)                     */}
      {/* ========================================================= */}
      <ReviewModal 
        reviewingCourse={reviewingCourse}
        setReviewingCourse={setReviewingCourse}
        checklist={checklist}
        reviewDecision={reviewDecision}
        setReviewDecision={setReviewDecision}
        reviewNote={reviewNote}
        setReviewNote={setReviewNote}
        handleReviewSubmit={handleReviewSubmit}
        allChecked={allChecked}
        toggleCheck={toggleCheck}
      />  

      {/* ========================================================= */}
      {/* 2. MODERATION DRAWER (For Published/Suspended/Draft)      */}
      {/* ========================================================= */}
      <ModerationDrawer 
        selectedCourse={selectedCourse} 
        setSelectedCourse={setSelectedCourse} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setShowSuspendModal={setShowSuspendModal}
      />  

      {/* --- SUSPEND CONFIRMATION MODAL --- */}
      <SuspendModal 
        showSuspendModal={showSuspendModal}
        selectedCourse={selectedCourse}
        suspendReason={suspendReason}
        setSuspendReason={setSuspendReason}
        setShowSuspendModal={setShowSuspendModal}
        handleSuspend={handleSuspend}
      />  

    </div>
  );
}
