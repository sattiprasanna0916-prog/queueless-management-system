import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {

  const [queues, setQueues] = useState([]);

  useEffect(() => {
    fetchQueues();
  }, []);

  const fetchQueues = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8080/api/queues"
      );

      setQueues(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const totalQueues = queues.length;

  const totalWaitingUsers = queues.reduce(
    (sum, queue) =>
      sum + queue.waitingUsers,
    0
  );

  const avgWaitTime =
    totalQueues > 0
      ? Math.round(
          totalWaitingUsers /
          totalQueues
        )
      : 0;

  const busiestQueue =
    queues.length > 0
      ? queues.reduce(
          (max, queue) =>
            queue.waitingUsers >
            max.waitingUsers
              ? queue
              : max
        )
      : null;

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
              value={`${avgWaitTime} mins`}
            />

          </div>

          {busiestQueue && (

            <div className="bg-white p-6 rounded-xl shadow-lg mt-8">

              <h2 className="text-2xl font-bold mb-4">
                Busiest Queue
              </h2>

              <p className="text-lg">
                Queue Name:
                {" "}
                {busiestQueue.name}
              </p>

              <p className="text-lg">
                Current Token:
                {" "}
                {busiestQueue.currentToken}
              </p>

              <p className="text-lg">
                Waiting Users:
                {" "}
                {busiestQueue.waitingUsers}
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;