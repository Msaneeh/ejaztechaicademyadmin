import { 
  AlertCircle,
} from "lucide-react";
import ToggleRow from "./ToggleRow";

const Security = ({ activeTab }) => {
  return (
    <>
               {activeTab === "security" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-lg font-semibold text-ink">Security & Access</h2>
                <p className="text-sm text-ink-soft mt-1">Sensitive platform security configurations.</p>
              </div>

              <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-500/20 dark:bg-orange-500/5 mb-6">
                <div className="flex items-center gap-2 text-orange-800 dark:text-orange-400">
                  <AlertCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">High-impact settings</p>
                </div>
                <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
                  Changes here affect the entire platform. Proceed with caution.
                </p>
              </div>

              <div className="space-y-4">
                <ToggleRow 
                  title="Require MFA for Administrators" 
                  description="All admins must set up multi-factor authentication." 
                  enabled={true} 
                  onToggle={() => {}} 
                />
                <ToggleRow 
                  title="Enforce Strong Passwords" 
                  description="Require minimum 12 characters, numbers, and symbols." 
                  enabled={true} 
                  onToggle={() => {}} 
                />
                <ToggleRow 
                  title="Enable Maintenance Mode" 
                  description="Temporarily restrict public access to the platform." 
                  enabled={false} 
                  onToggle={() => {}} 
                />
              </div>
            </div>
          )}
    </>
  )
}

export default Security;