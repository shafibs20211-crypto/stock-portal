import { UserButton } from "@clerk/react";

function Navbar({ setSidebarOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b shadow-sm z-50">

      <div className="h-full flex items-center justify-between px-4">

      
        <div className="flex items-center gap-4">

         
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          <h1 className="text-2xl font-bold text-gray-800">
            Dash<span className="text-blue-600">board</span>
          </h1>

        </div>

      
        <div className="hidden md:block w-80">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

       
        <UserButton />

      </div>

    </nav>
  );
}

export default Navbar;