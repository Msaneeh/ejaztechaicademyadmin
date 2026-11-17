import { useState } from "react";
import { 
  Download, 
} from "lucide-react";
import { activityTrendData, recentActivity } from "@/mockData/activity";

// Components 
import StatCard from "@/components/learningActivity/StatCard";
import Chart from "@/components/learningActivity/Chart";

export default function LearningActivity() {


  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Learning Activity</h1>
          <p className="mt-1 text-sm text-ink-soft">Monitor student engagement, lesson completion and learning interactions.</p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-ink-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatCard title="Active Learners" value="3,840" desc="In selected period" />
        <StatCard title="Lessons Completed" value="18,420" desc="Completion events" />
        <StatCard title="Assessments" value="5,260" desc="Quiz & assignment attempts" />
        <StatCard title="Learning Time" value="42.5 hrs" desc="Estimated tracked time" />
        <StatCard title="Avg. Engagement" value="76.4%" desc="Defined engagement metric" />
      </div>

      {/* Activity Trend Chart */}
      <Chart activityTrendData={activityTrendData} />


    </div>
  );
}

