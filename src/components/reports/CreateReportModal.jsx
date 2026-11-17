import { 
  FileText, 
  X,
  CheckCircle2,
} from "lucide-react";

const CreateReportModal = ({ 
    isModalOpen, 
    setIsModalOpen, 
    wizardStep,
    setWizardStep, 
    dateRange, 
    setDateRange, 
    RefCat, 
    reportFormat,
    setReportFormat,
    selectedCategory,
    setSelectedCategory,
    handleGenerate
}) => {

  return (
    <>
          {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-surface shadow-2xl border border-ink-line">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-ink-line p-6">
              <div>
                <h2 className="text-xl font-bold text-ink">Create Report</h2>
                <p className="text-sm text-ink-soft">Step {wizardStep} of 3</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="rounded-full p-2 text-ink-soft hover:bg-ink/5 hover:text-ink transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 bg-canvas min-h-[300px]">
              
              {/* Step 1: Select Category */}
              {wizardStep === 1 && (
                <div>
                  <h3 className="font-semibold text-ink mb-4">Select report category</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                     {RefCat.map(cat => (
                       <button
                         key={cat.id}
                         onClick={() => setSelectedCategory(cat.label)}
                         className={`flex flex-col items-start rounded-xl border p-4 text-left transition ${
                           selectedCategory === cat.label 
                             ? "border-ink bg-ink/5" 
                             : "border-ink-line bg-surface hover:border-ink/30"
                         }`}
                       >
                         <FileText className="h-5 w-5 text-ink mb-2" />
                         <span className="font-medium text-ink">{cat.label}</span>
                         <span className="text-xs text-ink-soft mt-1">{cat.desc}</span>
                       </button>
                     ))}
                  </div>
                </div>
              )}

              {/* Step 2: Configuration */}
              {wizardStep === 2 && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-ink mb-4">Configure your report</h3>
                  
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink">Report Title</label>
                    <input type="text" defaultValue={`${selectedCategory} - Nov 2026`} className="w-full rounded-xl border border-ink-line bg-surface px-4 py-2 text-sm text-ink outline-none" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-ink">Date Range</label>
                      <select 
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="w-full rounded-xl border border-ink-line bg-surface px-4 py-2 text-sm text-ink outline-none"
                      >
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                        <option>Custom Range</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-ink">Format</label>
                      <select 
                        value={reportFormat}
                        onChange={(e) => setReportFormat(e.target.value)}
                        className="w-full rounded-xl border border-ink-line bg-surface px-4 py-2 text-sm text-ink outline-none"
                      >
                        <option value="PDF">PDF (Formal)</option>
                        <option value="CSV">CSV (Raw Data)</option>
                        <option value="XLSX">XLSX (Spreadsheet)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Review & Generate */}
              {wizardStep === 3 && (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink/5 mb-4">
                     <CheckCircle2 className="h-8 w-8 text-ink" />
                   </div>
                   <h3 className="text-lg font-semibold text-ink">Ready to Generate</h3>
                   <p className="text-sm text-ink-soft mt-2 max-w-md">
                     You are about to generate a <strong>{selectedCategory}</strong> in <strong>{reportFormat}</strong> format for the period: <strong>{dateRange}</strong>.
                   </p>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="border-t border-ink-line bg-surface p-4 flex items-center justify-between">
              <button 
                onClick={() => setWizardStep(prev => Math.max(1, prev - 1))}
                disabled={wizardStep === 1}
                className="rounded-md px-4 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5 disabled:opacity-30 transition"
              >
                Back
              </button>
              
              {wizardStep < 3 ? (
                <button 
                  onClick={() => setWizardStep(prev => prev + 1)}
                  disabled={wizardStep === 1 && !selectedCategory}
                  className="rounded-md bg-ink px-6 py-2 text-sm font-medium text-canvas hover:opacity-90 disabled:opacity-50 transition"
                >
                  Continue
                </button>
              ) : (
                <button 
                  onClick={handleGenerate}
                  className="rounded-md bg-ink px-6 py-2 text-sm font-medium text-canvas hover:opacity-90 transition"
                >
                  Generate Report
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateReportModal