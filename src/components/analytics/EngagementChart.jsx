import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const EngagementChart = ({ engagementTrendData }) => {
  return (
    <>
              <div className="rounded-2xl border border-ink-line bg-surface p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-ink">Active Learners</h2>
                  <p className="text-sm text-ink-soft">Unique students with meaningful activity</p>
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={engagementTrendData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                       <defs>
                        <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                      <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                      <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #E5E5E5' }} />
                      <Area type="monotone" dataKey="activeLearners" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorActive)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
    </>
  )
}

export default EngagementChart