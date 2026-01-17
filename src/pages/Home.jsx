import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        CA Monk Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT PANEL */}
        <div className="md:col-span-1 bg-white rounded shadow p-4">
          <BlogList onSelect={setSelectedId} />
        </div>

        {/* RIGHT PANEL */}
        <div className="md:col-span-2 bg-white rounded shadow p-6">
          <BlogDetail blogId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
