import { 
  Smartphone,
  Laptop
} from "lucide-react";
import SessionRow from "./SessionRow";

const Sessions = ({ activeTab, handleRevokeSession }) => {
  return (
    <>
              {activeTab === "sessions" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-lg font-semibold text-ink">Active Sessions</h2>
                <p className="text-sm text-ink-soft mt-1">Devices currently signed into your account.</p>
              </div>

              <div className="space-y-3">
                <SessionRow 
                  icon={Laptop} 
                  device="Windows PC — Chrome" 
                  location="Kano, Nigeria" 
                  lastActive="Just now" 
                  isCurrent 
                />
                <SessionRow 
                  icon={Smartphone} 
                  device="Android — Chrome" 
                  location="Lagos, Nigeria" 
                  lastActive="2 hours ago" 
                  onRevoke={() => handleRevokeSession("Android")}
                />
              </div>

              <div className="pt-4 border-t border-ink-line">
                <button className="text-sm font-medium text-red-600 hover:text-red-700">
                  Sign out all other sessions
                </button>
              </div>
            </div>
          )}
    </>
  )
}

export default Sessions;