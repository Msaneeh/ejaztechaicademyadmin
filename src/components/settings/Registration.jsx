import ToggleRow from "./ToggleRow";

const Registration = ({ activeTab, registrationData, toggleState, setRegistrationData }) => {
  return (
    <>
              {activeTab === "registration" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-lg font-semibold text-ink">User & Registration</h2>
                <p className="text-sm text-ink-soft mt-1">Control how users enter the platform and verify their accounts.</p>
              </div>

              <div className="space-y-4">
                <ToggleRow 
                  title="Allow Student Registration" 
                  description="Public users can create new student accounts." 
                  enabled={registrationData.allowStudents} 
                  onToggle={() => toggleState(setRegistrationData, "allowStudents")}
                />
                <ToggleRow 
                  title="Allow Tutor Registration" 
                  description="Users can register to become tutors." 
                  enabled={registrationData.allowTutors} 
                  onToggle={() => toggleState(setRegistrationData, "allowTutors")}
                />
                <ToggleRow 
                  title="Require Email Verification" 
                  description="New users must verify their email before accessing the platform." 
                  enabled={registrationData.requireEmailVerification} 
                  onToggle={() => toggleState(setRegistrationData, "requireEmailVerification")}
                />
                <ToggleRow 
                  title="Require Tutor Verification" 
                  description="Tutors must be approved by an admin before publishing courses." 
                  enabled={registrationData.requireTutorVerification} 
                  onToggle={() => toggleState(setRegistrationData, "requireTutorVerification")}
                />
              </div>
            </div>
          )}
    </>
  )
}

export default Registration;