import React from 'react'

const LearningChart = ({ funnelData }) => {
  return (
    <>
            <div className="rounded-2xl border border-ink-line bg-surface p-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-ink">Learning Funnel</h2>
                <p className="text-sm text-ink-soft">Student journey from registration to completion</p>
              </div>
              <div className="h-72 w-full flex items-end gap-4">
                {funnelData.map((stage, index) => {
                  const height = (stage.count / funnelData[0].count) * 100;
                  return (
                    <div key={stage.stage} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                      {/* Tooltip on hover */}
                      <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition bg-ink text-canvas text-xs py-1 px-2 rounded">
                        {stage.count.toLocaleString()}
                      </div>
                      <div 
                        className="w-full bg-ink/80 rounded-t-sm transition-all hover:bg-ink"
                        style={{ height: `${height}%` }}
                      />
                      <p className="text-[10px] text-center text-ink-soft mt-2 h-8 flex items-end">{stage.stage}</p>
                    </div>
                  );
                })}
              </div>
            </div>
    </>
  )
}

export default LearningChart