import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Upload", path: "/" },
    { name: "Verify", path: "/verify" },
    { name: "Records", path: "/records" },
  ];

  return (
    <div className="w-60 bg-[#111827] p-5 flex flex-col border-r border-gray-800">
      <h1 className="text-2xl font-bold mb-8 text-blue-400">
        ProofVault
      </h1>

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-4 py-2 rounded-lg transition-all duration-200
              ${
                location.pathname === link.path
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-[#1f2937]"
              }
            `}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

