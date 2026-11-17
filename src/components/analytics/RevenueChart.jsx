import { 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const RevenueChart = ({ revenueTrendData }) => {
  return (
    <>
              <div className="rounded-2xl border border-ink-line bg-surface p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-ink">Revenue Trend</h2>
                  <p className="text-sm text-ink-soft">Gross revenue from successful payments</p>
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueTrendData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} tickFormatter={(value) => `₦${value / 1000000}M`} />
                      <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #E5E5E5' }} formatter={(value) => `₦${value.toLocaleString()}`} />
                      <Line type="monotone" dataKey="revenue" stroke="#0A0A0A" strokeWidth={2} dot={{ r: 4, fill: "#0A0A0A" }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
    </>
  )
}

export default RevenueChart