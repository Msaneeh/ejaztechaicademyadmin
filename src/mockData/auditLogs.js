export const auditLogs = [
  {
    id: "AUD-2026-0001842",
    timestamp: "Nov 12, 2026 · 10:18 AM",
    actor: "Muhammad Ali",
    actorRole: "Admin",
    action: "Course Suspended",
    module: "Course Management",
    target: "React Fundamentals",
    targetId: "CRS-00128",
    result: "Success",
    severity: "Warning",
    reason: "Course temporarily suspended pending investigation of reported content.",
    changes: {
      before: { status: "Published", visibility: "Public" },
      after: { status: "Suspended", visibility: "Hidden" }
    }
  },
  {
    id: "AUD-2026-0001841",
    timestamp: "Nov 12, 2026 · 10:05 AM",
    actor: "Super Admin",
    actorRole: "Super Admin",
    action: "Tutor Verified",
    module: "Verification Requests",
    target: "Amina Yusuf",
    targetId: "TUT-0018",
    result: "Success",
    severity: "Informational",
    changes: {
      before: { verification: "Pending" },
      after: { verification: "Verified" }
    }
  },
  {
    id: "AUD-2026-0001840",
    timestamp: "Nov 12, 2026 · 09:54 AM",
    actor: "System",
    actorRole: "Automated",
    action: "Certificate Issued",
    module: "Certificates",
    target: "EJZ-CERT-2026-001",
    targetId: "STU-0042",
    result: "Success",
    severity: "Informational",
    changes: null
  },
  {
    id: "AUD-2026-0001839",
    timestamp: "Nov 12, 2026 · 09:30 AM",
    actor: "Fatima Yusuf",
    actorRole: "Admin",
    action: "Student Reactivated",
    module: "User Management",
    target: "Ibrahim Musa",
    targetId: "STU-0021",
    result: "Success",
    severity: "Informational",
    changes: {
      before: { status: "Suspended" },
      after: { status: "Active" }
    }
  },
  {
    id: "AUD-2026-0001838",
    timestamp: "Nov 12, 2026 · 08:12 AM",
    actor: "System",
    actorRole: "Automated",
    action: "Failed Login Attempt",
    module: "Security",
    target: "admin@ejaztech.ai",
    targetId: "ADM-0001",
    result: "Failure",
    severity: "Warning",
    changes: null
  }
];