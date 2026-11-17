import { useState } from "react";
import { Download } from "lucide-react";
import { allUsers } from "@/mockData/users";

// Components
import StatCard from "@/components/allUsers/StatCard";
import SearchBar from "@/components/allUsers/SearchBar";
import Filters from "@/components/allUsers/Filters";
import UsersTable from "@/components/allUsers/UsersTable";
import Pagination from "@/components/allUsers/Pagination";
import UserDetails from "@/components/allUsers/UserDetails";
import ConfirmSuspendModal from "@/components/allUsers/ConfirmSuspendModal";

const AllUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  
  // Drawer state
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview"); // overview | activity | security

  // Suspend Modal state
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [suspendReason, setSuspendReason] = useState("");

  const filteredUsers = allUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === "All" || user.role === roleFilter;
    const matchesStatus = statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const openUserDrawer = (user) => {
    setSelectedUser(user);
    setActiveTab("overview");
  };

  const closeUserDrawer = () => {
    setSelectedUser(null);
    setShowSuspendModal(false);
  };

  const handleSuspend = () => {
    // In a real app, this would call an API
    alert(`User ${selectedUser.name} suspended for: ${suspendReason}`);
    setShowSuspendModal(false);
    closeUserDrawer();
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">All Users</h1>
          <p className="mt-1 text-sm text-ink-soft">Manage and monitor all platform accounts.</p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-ink-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 transition">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Total Users" value="2,583" desc="All registered accounts" />
        <StatCard title="Active Users" value="2,491" desc="Accounts in good standing" />
        <StatCard title="New This Month" value="86" desc="Recently registered" />
        <StatCard title="Restricted Accounts" value="12" desc="Suspended or disabled" alert />
      </div>

      {/* Search & Filters Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">

          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <Filters 
             roleFilter={roleFilter}
             setRoleFilter={setRoleFilter}
             statusFilter={statusFilter}
             setStatusFilter={setStatusFilter}

           />  
        </div>
      </div>

      {/* Users Table */}

      <UsersTable filteredUsers={filteredUsers}  openUserDrawer={openUserDrawer} />

      <Pagination filteredUsers={filteredUsers} />

      {/* --- USER DETAILS DRAWER --- */}

      <UserDetails 
         selectedUser={selectedUser}
         closeUserDrawer={closeUserDrawer}
         setActiveTab={setActiveTab}
         activeTab={activeTab}
         setShowSuspendModal={setShowSuspendModal}
      />   

      {/* --- SUSPEND CONFIRMATION MODAL --- */}

      <ConfirmSuspendModal 
         showSuspendModal={showSuspendModal}
         selectedUser={selectedUser}
         setSuspendReason={setSuspendReason}
         setShowSuspendModal={setShowSuspendModal}
         handleSuspend={handleSuspend}
         suspendReason={suspendReason}
       />  

    </div>
  );
}

export default AllUsers;