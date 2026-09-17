function Chart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

      {/* Line Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-gray-800">
          Revenue Overview
        </h2>

        <div className="h-64 mt-6 flex items-end gap-3">
          {[40, 55, 45, 70, 60, 85, 75, 95].map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-blue-600 rounded-t-lg"
              style={{ height: `${value}%` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-gray-800">
          Sales Overview
        </h2>

        <div className="h-64 mt-6 flex items-end gap-4">
          {[60, 80, 45, 90, 70, 95].map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-green-500 rounded-t-lg"
              style={{ height: `${value}%` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Area Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-gray-800">
          Growth
        </h2>

        <div className="h-64 mt-6 flex items-end gap-2">
          {[30, 45, 40, 65, 55, 80, 70, 90].map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-purple-500 rounded-t-lg"
              style={{ height: `${value}%` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Donut Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-gray-800">
          Users
        </h2>

        <div className="flex justify-center items-center h-64">
          <div className="w-40 h-40 rounded-full bg-blue-500 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
              <span className="font-bold text-xl">
                75%
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Chart;