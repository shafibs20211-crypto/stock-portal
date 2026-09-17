import { NavLink } from "react-router";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "🏠",
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: "📊",
  },
  {
    name: "Users",
    path: "/users",
    icon: "👥",
  },
  {
    name: "Products",
    path: "/products",
    icon: "📦",
  },
  {
    name: "Orders",
    path: "/orders",
    icon: "🛒",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: "⚙️",
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0
          w-64 h-[calc(100vh-64px)]
          bg-gray-900 text-white
          p-5 z-50
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >

        {/* Mobile Close */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden absolute right-4 top-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-gray-400 text-sm font-bold mb-5">
          MAIN MENU
        </h2>

        <div className="space-y-2">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              <span className="text-lg">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>
            </NavLink>
          ))}

        </div>

      </aside>
    </>
  );
}

export default Sidebar;