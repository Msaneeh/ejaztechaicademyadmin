import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Layouts
import AdminLayout from "@/layouts/AdminLayout";

// Public Pages
import Auth from "@/pages/public/Auth";
import Landing from "@/pages/public/Landing"; // Optional
import NotFound from "@/pages/public/NotFound";

// Admin Pages 

/* Overview main Dashbord */
import Overview from "@/pages/overview/Overview";

// User Management
import AllUsers from "@/pages/userManagement/AllUsers";
import StudentManagement from "@/pages/userManagement/StudentManagement";
import TutorManagement from "@/pages/userManagement/TutorManagement";
import Verification from "@/pages/userManagement/Verification";

// Academic Management
import CourseManagement from "@/pages/academicManagement/CourseManagement";
import CourseModeration from "@/pages/academicManagement/CourseModeration";
import CategoriesManagement from "@/pages/academicManagement/CategoriesManagement";

// Platform Operations
import LearningActivity from "@/pages/platformOperations/LearningActivity";
import PlatformAnalytics from "@/pages/platformOperations/PlatformAnalytics";
import Reports from "@/pages/platformOperations/Reports";

// Communication & Support
import Announcements from "@/pages/communicationAndSupport/Announcements";
import SupportRequests from "@/pages/communicationAndSupport/SupportRequests";

// System
import AuditLogs from "@/pages/system/AuditLogs";
import PlatformSettings from "@/pages/system/PlatformSettings";
import AdminProfile from "@/pages/system/AdminProfile";
import Notifications from "@/pages/system/Notifications";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />

      {/* Admin Dashboard */}
      <Route
        element={
          <ProtectedRoute role="ADMIN">
            <AdminLayout />
          </ProtectedRoute>
        }
      >

        {/* Overview main Dashbord */}
        <Route path="/dashboard" element={<Overview />} />

        {/* User Management */}
        <Route path="/users" element={<AllUsers />} />
        <Route path="/students" element={<StudentManagement />} />
        <Route path="/tutors" element={<TutorManagement />} />
        <Route path="/verifications" element={<Verification />} />

        {/* Academic Management */}
        <Route path="/courses" element={<CourseManagement />} />
        <Route path="/courses/:courseId/moderation" element={<CourseModeration />} />
        <Route path="/categories" element={<CategoriesManagement />} />
        

        {/* Platform Operations */}
        <Route path="/activity" element={<LearningActivity />} />
        <Route path="/analytics" element={<PlatformAnalytics />} />
        <Route path="/reports" element={<Reports />} />

        {/* Communication & Support */}
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/support" element={<SupportRequests />} />

        {/* System */}
        <Route path="/audit" element={<AuditLogs />} />
        <Route path="/settings" element={<PlatformSettings />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="notifications" element={<Notifications />} />


      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound /> } />
    </Routes>
  );
}