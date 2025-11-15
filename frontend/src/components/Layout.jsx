import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
export default function Layout() {
  return (
    <div className="flex h-screen bg-[#0b0f19] text-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
      <TopNavbar />
      <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

