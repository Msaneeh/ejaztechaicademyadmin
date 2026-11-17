import ToggleRow from "./ToggleRow";

const Courses = ({ activeTab, toggleState, courseData, setCourseData }) => {
  return (
    <>
              {activeTab === "courses" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-lg font-semibold text-ink">Learning & Courses</h2>
                <p className="text-sm text-ink-soft mt-1">Configure global rules for course creation and publication.</p>
              </div>

              <div className="space-y-4">
                <ToggleRow 
                  title="Require Course Approval" 
                  description="Courses must be reviewed by an admin before becoming public." 
                  enabled={courseData.requireApproval} 
                  onToggle={() => toggleState(setCourseData, "requireApproval")}
                />
                <ToggleRow 
                  title="Allow Free Courses" 
                  description="Tutors can publish courses without a price." 
                  enabled={courseData.allowFree} 
                  onToggle={() => toggleState(setCourseData, "allowFree")}
                />
                <ToggleRow 
                  title="Enable Certificates" 
                  description="Automatically issue certificates upon course completion." 
                  enabled={courseData.enableCertificates} 
                  onToggle={() => toggleState(setCourseData, "enableCertificates")}
                />
              </div>
            </div>
          )}
    </>
  )
}

export default Courses;