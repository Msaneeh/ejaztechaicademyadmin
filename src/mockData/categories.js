export const categories = [
  { 
    id: "CAT-001", 
    name: "Programming", 
    slug: "programming", 
    parentId: null, 
    courses: 48, 
    status: "Active", 
    visibility: "Visible",
    updated: "Nov 10, 2026" 
  },
  { 
    id: "CAT-002", 
    name: "Web Development", 
    slug: "web-development", 
    parentId: "CAT-001", 
    parentName: "Programming",
    courses: 28, 
    status: "Active", 
    visibility: "Visible",
    updated: "Nov 09, 2026" 
  },
  { 
    id: "CAT-003", 
    name: "Data Science", 
    slug: "data-science", 
    parentId: null, 
    courses: 18, 
    status: "Active", 
    visibility: "Visible",
    updated: "Nov 08, 2026" 
  },
  { 
    id: "CAT-004", 
    name: "UI/UX Design", 
    slug: "ui-ux-design", 
    parentId: null, 
    courses: 22, 
    status: "Active", 
    visibility: "Hidden",
    updated: "Nov 05, 2026" 
  },
  { 
    id: "CAT-005", 
    name: "Graphic Design", 
    slug: "graphic-design", 
    parentId: "CAT-004", 
    parentName: "UI/UX Design",
    courses: 0, 
    status: "Inactive", 
    visibility: "Hidden",
    updated: "Oct 28, 2026" 
  },
];