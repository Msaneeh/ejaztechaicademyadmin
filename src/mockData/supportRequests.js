export const supportRequests = [
  {
    id: "SUP-2026-001",
    subject: "Payment successful but course locked",
    user: "Amina Bello",
    userType: "Student",
    email: "amina@example.com",
    category: "Payments & Billing",
    priority: "High",
    status: "Open",
    created: "12 min ago",
    assignedTo: "Unassigned",
    messages: [
      { id: "m1", sender: "Amina Bello", type: "USER", text: "Hello, I paid for the React Fundamentals course. My payment was successful, but the course is still showing as locked in my learning dashboard. Please help me resolve this.", time: "10:32 AM" }
    ]
  },
  {
    id: "SUP-2026-002",
    subject: "Unable to upload course video",
    user: "Muhammad Ali",
    userType: "Tutor",
    email: "muhammad@example.com",
    category: "Technical Issues",
    priority: "Normal",
    status: "In Progress",
    created: "45 min ago",
    assignedTo: "Admin A",
    messages: [
      { id: "m1", sender: "Muhammad Ali", type: "USER", text: "I'm trying to upload a lesson video but it keeps failing at 90%. The file is an MP4 and under 500MB. Can you check if there's a server issue?", time: "09:50 AM" },
      { id: "m2", sender: "Admin A", type: "ADMIN", text: "Hi Muhammad. We are currently investigating potential issues with our media server. Could you try again in 15 minutes?", time: "10:05 AM" }
    ]
  },
  {
    id: "SUP-2026-003",
    subject: "Certificate name correction",
    user: "Fatima Yusuf",
    userType: "Student",
    email: "fatima@example.com",
    category: "Certificates",
    priority: "Normal",
    status: "Resolved",
    created: "2 hours ago",
    assignedTo: "Admin B",
    messages: [
      { id: "m1", sender: "Fatima Yusuf", type: "USER", text: "My name on my certificate is spelled 'Fatma' instead of 'Fatima'. Can this be corrected?", time: "08:00 AM" },
      { id: "m2", sender: "Admin B", type: "ADMIN", text: "We've corrected the spelling and issued a new certificate. You should see it in your dashboard now.", time: "08:30 AM" },
      { id: "m3", sender: "Admin B", type: "INTERNAL_NOTE", text: "Verified student ID and corrected via the admin workflow. Old cert revoked.", time: "08:35 AM" }
    ]
  }
];