import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col">
      <Outlet />
    </div>
  );
}
