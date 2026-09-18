import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

     
      <Navbar setSidebarOpen={setSidebarOpen} />

   
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

     
      <main className="pt-16 md:ml-64">

        <div className="p-6">

          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome to your dashboard
          </p>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">

          
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-500">
                Total Revenue
              </p>

              <h2 className="text-2xl font-bold mt-2">
                RS24,500
              </h2>

              <p className="text-green-500 mt-2">
                +12.5%
              </p>
            </div>


           
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-500">
                Total Users
              </p>

              <h2 className="text-2xl font-bold mt-2">
                12,450
              </h2>

              <p className="text-green-500 mt-2">
                +8.2%
              </p>
            </div>


          
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-500">
                Total Orders
              </p>

              <h2 className="text-2xl font-bold mt-2">
                1,250
              </h2>

              <p className="text-green-500 mt-2">
                +15.3%
              </p>
            </div>


         
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-500">
                Growth
              </p>

              <h2 className="text-2xl font-bold mt-2">
                24%
              </h2>

              <p className="text-green-500 mt-2">
                +5.4%
              </p>
            </div>

          </div>


        
          <Chart />

        </div>

      </main>

    </div>
  );
}

export default Dashboard;