import ToggleRow from "./ToggleRow";

const Notifications = ({ activeTab }) => {
  return (
    <>
        {activeTab === "notifications" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-lg font-semibold text-ink">Notification Preferences</h2>
                <p className="text-sm text-ink-soft mt-1">Choose which alerts you want to receive.</p>
              </div>

              <div className="space-y-4">
                <ToggleRow title="New Tutor Verification" description="When a tutor submits a verification request." enabled={true} />
                <ToggleRow title="Course Submissions" description="When a tutor submits a new course for review." enabled={true} />
                <ToggleRow title="Support Requests" description="When a new support ticket is created." enabled={true} />
                <ToggleRow title="Platform Announcements" description="News about new features and platform updates." enabled={false} />
              </div>
            </div>
          )}
    </>
  )
}

export default Notifications;