import React from 'react'

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const AnalyticsChart = ({ platformGrowthData }) => {
  return (
          <div className="rounded-2xl border border-ink-line bg-surface p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">Platform Growth</h2>
            <p className="text-sm text-ink-soft">Student and tutor registrations over time</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-ink">
              <span className="h-2 w-2 rounded-full bg-ink"></span> Students
            </span>
            <span className="flex items-center gap-1.5 text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-ink/40"></span> Tutors
            </span>
          </div>
        </div>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={platformGrowthData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0A0A0A" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#0A0A0A" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#6B7280" }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#6B7280" }} 
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E5E5', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                labelStyle={{ fontWeight: 'bold', color: '#111827' }}
              />
              <Area 
                type="monotone" 
                dataKey="students" 
                stroke="#0A0A0A" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorStudents)" 
              />
              <Area 
                type="monotone" 
                dataKey="tutors" 
                stroke="#9CA3AF" 
                strokeWidth={2}
                fillOpacity={0} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
  )
}

export default AnalyticsChart