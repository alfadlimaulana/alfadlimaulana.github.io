import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";

function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
