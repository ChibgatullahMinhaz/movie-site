import { Outlet, NavLink } from "react-router";
import { useState } from "react";
import { Menu, X, LayoutDashboard, Film, Settings } from "lucide-react";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={18} /> },
    { name: "Movies", path: "/admin/movies", icon: <Film size={18} /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex h-screen adminSide">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-[#151617] shadow-md transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h1 className="text-xl font-semibold text-gray-800">🎬 Admin</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0  bg-opacity-40 lg:hidden"
        />
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="flex items-center justify-between px-4 py-3 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700 lg:hidden"
          >
            <Menu size={22} />
          </button>
          <h2 className="text-lg font-semibold text-gray-800">
            Admin Dashboard
          </h2>
          <div className="flex items-center gap-3">
            <img
              src="https://ui-avatars.com/api/?name=Admin"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Router Outlet */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
