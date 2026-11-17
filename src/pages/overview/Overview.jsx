import { useState } from "react";
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  DollarSign, 
  AlertCircle, 
  TrendingUp
} from "lucide-react";

import { platformGrowthData, recentActivity, topCourses } from "@/mockData/analytics";

// Components
import StatCard from "@/components/overview/StatCard";
import DateRangeelector from "@/components/overview/DateRangeelector";
import AnalyticsChart from "@/components/overview/AnalyticsChart";
import CoursesTable from "@/components/overview/CoursesTable";
import NeedAttention from "@/components/overview/NeedAttention";
import RecentActivity from "@/components/overview/RecentActivity";

export default function Overview() {
  const [dateRange, setDateRange] = useState("30");

  const hour = new Date().getHours();
  let greetings;
  
  if (hour < 12) {
    greetings = "Good Morning";
  } else if (hour < 18) {
    greetings = "Good afternoon";
  } else {
    greetings = "Good evening";
  }


  return (
    <div className="space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Overview</h1>
          <p className="mt-1 text-sm text-ink-soft">
             {greetings}, Admin. Here's what's happening across your platform today.
          </p>
        </div>
        
        {/* Date Range Selector */}
        <DateRangeelector  dateRange={dateRange} setDateRange={setDateRange} />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard title="Total Students" value="2,450" trend="+12.5%" icon={GraduationCap} />
        <StatCard title="Total Tutors" value="128" trend="+8.2%" icon={Users} />
        <StatCard title="Total Courses" value="186" trend="+6.4%" icon={BookOpen} />
        <StatCard title="Enrollments" value="8,320" trend="+18.1%" icon={TrendingUp} />
        <StatCard title="Total Revenue" value="₦4.8M" trend="+9.3%" icon={DollarSign} />
        <StatCard title="Pending Reviews" value="12" trend="Action needed" icon={AlertCircle} alert />
      </div>

      {/* Analytics Chart */}

      <AnalyticsChart platformGrowthData={platformGrowthData} />

      <div className="grid gap-8 lg:grid-cols-3">
        
        {/* Left Column (Pending Actions + Top Courses) */}
        <div className="space-y-8 lg:col-span-2">
          
          {/* Pending Actions */}

          <NeedAttention />

          {/* Top Courses Table */}
          <CoursesTable topCourses={topCourses} />
        </div>

        {/* Right Column (Recent Activity) */}

        <RecentActivity recentActivity={recentActivity} />

      </div>
    </div>
  );
}
/* Fallback icon for verification */
function ShieldIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}