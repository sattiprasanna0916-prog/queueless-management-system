
import { useEffect, useState }
from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {

  const [queues, setQueues]
    = useState([]);

  useEffect(() => {

    fetchQueues();

  }, []);

  const fetchQueues = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8080/api/queues"
        );

      setQueues(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const totalQueues =
    queues.length;

  const totalWaitingUsers =
    queues.reduce(
      (sum, queue) =>
        sum + queue.waitingUsers,
      0
    );

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
              value={totalQueues}
            />

            <DashboardCard
              title="Waiting Users"
              value={totalWaitingUsers}
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

