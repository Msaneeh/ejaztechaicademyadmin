import { useState } from "react";
import {  
  Download, 
} from "lucide-react";
import { students } from "@/mockData/students";

// Components 
import StatCard from "@/components/students/StatCard";
import SearchBar from "@/components/students/SearchBar";
import Filters from "@/components/students/Filters";
import StudentTable from "@/components/students/StudentTable";
import StudentsDetails from "@/components/students/StudentsDetails";


export default function StudentManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [learningFilter, setLearningFilter] = useState("All");
  const [accountFilter, setAccountFilter] = useState("All");
  
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      student.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLearning = learningFilter === "All" || student.learningStatus === learningFilter;
    const matchesAccount = accountFilter === "All" || student.accountStatus === accountFilter;

    return matchesSearch && matchesLearning && matchesAccount;
  });

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Student Management</h1>
          <p className="mt-1 text-sm text-ink-soft">Manage student accounts and monitor learning activity.</p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-ink-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatCard title="Total Students" value="2,450" desc="Registered accounts" />
        <StatCard title="Active Students" value="2,310" desc="Good standing" />
        <StatCard title="Currently Learning" value="1,280" desc="Ongoing courses" />
        <StatCard title="Course Graduates" value="540" desc="Completed 1+ course" />
        <StatCard title="New This Month" value="86" desc="Recently registered" alert />
      </div>

      {/* Search & Filters Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <Filters 
            learningFilter={learningFilter}
            setLearningFilter={setLearningFilter}
            accountFilter={accountFilter}
            setAccountFilter={setAccountFilter}
          />  
        </div>
      </div>

      {/* Student Directory Table */}
      <StudentTable filteredStudents={filteredStudents} setSelectedStudent={setSelectedStudent} />

      {/* --- STUDENT DETAILS DRAWER --- */}
      <StudentsDetails selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} activeTab={activeTab} setActiveTab={setActiveTab} />

    </div>
  );
}

