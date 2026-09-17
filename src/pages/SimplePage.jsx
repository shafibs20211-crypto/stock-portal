function SimplePage({ title }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white p-10 rounded-xl shadow text-center">
        
        <h1 className="text-3xl font-bold text-gray-800">
          {title}
        </h1>

        <p className="text-gray-500 mt-2">
          This page is ready.
        </p>

      </div>

    </div>
  );
}

export default SimplePage;