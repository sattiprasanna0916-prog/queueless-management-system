import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DashboardCard
              title="Active Queues"
              value="12"
            />

            <DashboardCard
              title="Waiting Users"
              value="48"
            />

            <DashboardCard
              title="Avg Wait Time"
              value="15 mins"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;