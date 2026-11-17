import { useState } from "react";
import { 
  AreaChart, 
  Area, 
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { 
  registrationTrendData, 
  engagementTrendData, 
  revenueTrendData, 
  funnelData,
  topCourses
} from "@/mockData/platformanalytics";

// Components
import StatCard from "@/components/analytics/StatCard";
import Filters from "@/components/analytics/Filters";
import RegistrationChart from "@/components/analytics/RegistrationChart";
import RevenueChart from "@/components/analytics/RevenueChart";
import EngagementChart from "@/components/analytics/EngagementChart";
import LearningChart from "@/components/analytics/LearningChart";
import CoursesTable from "@/components/analytics/CoursesTable";

export default function PlatformAnalytics() {
  const [dateRange, setDateRange] = useState("30");

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header & Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Platform Analytics</h1>
          <p className="mt-1 text-sm text-ink-soft">Understand platform growth, learning engagement, and business outcomes.</p>
        </div>
        

        <Filters dateRange={dateRange} setDateRange={setDateRange} />
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
        <StatCard title="Total Students" value="8,420" trend="+12.8%" />
        <StatCard title="Active Learners" value="3,840" trend="+8.4%" />
        <StatCard title="Published Courses" value="245" trend="+6.2%" />
        <StatCard title="Completions" value="1,280" trend="+15.2%" />
        <StatCard title="New Enrollments" value="1,640" trend="+9.6%" />
        <StatCard title="Net Revenue" value="₦4.8M" trend="+11.3%" alert />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        
        {/* Registration Growth Chart */}
        <RegistrationChart registrationTrendData={registrationTrendData} />

        {/* Revenue Chart */}
        <RevenueChart revenueTrendData={revenueTrendData} />

        {/* Engagement Chart */}
        <EngagementChart engagementTrendData={engagementTrendData} />

        {/* Learning Funnel Chart */}
        <LearningChart funnelData={funnelData} />

      </div>

      {/* Top Courses Table */}
      <CoursesTable topCourses={topCourses} />

    </div>
  );
}

