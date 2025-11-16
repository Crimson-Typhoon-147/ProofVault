import { useState } from "react";

export default function TopNavbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-full bg-white text-gray-800 border-b border-gray-200 h-16 flex items-center justify-between px-8 shadow-sm">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-10">
        <div className="text-2xl font-bold text-violet-600 cursor-pointer">
          ProofVault
        </div>

        {/* Menu Options */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          
          {/* Solutions */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("solutions")}
              className="hover:text-violet-600 transition"
            >
              Solutions ▾
            </button>

            {openMenu === "solutions" && (
              <div className="absolute bg-white shadow-lg rounded-lg p-4 top-full mt-2 w-48 z-50">
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">Evidence Vault</div>
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">Verification Engine</div>
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">Records Ledger</div>
              </div>
            )}
          </div>

          {/* Developers */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("developers")}
              className="hover:text-violet-600 transition"
            >
              Developers ▾
            </button>

            {openMenu === "developers" && (
              <div className="absolute bg-white shadow-lg rounded-lg p-4 top-full mt-2 w-48 z-50">
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">API Docs</div>
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">SDKs</div>
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">Guides</div>
              </div>
            )}
          </div>

          {/* Pricing */}
          <button className="hover:text-violet-600 transition">Pricing</button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          Log In
        </button>

        <button className="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition">
          Sign Up
        </button>
      </div>
    </div>
  );
}
