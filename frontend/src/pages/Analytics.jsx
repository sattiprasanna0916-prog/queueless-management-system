
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Analytics() {

  const peakHourData = [
    {
      hour: "9 AM",
      users: 20,
    },

    {
      hour: "10 AM",
      users: 35,
    },

    {
      hour: "11 AM",
      users: 50,
    },

    {
      hour: "12 PM",
      users: 40,
    },

    {
      hour: "1 PM",
      users: 25,
    },
  ];

  const efficiencyData = [
    {
      name: "Completed",
      value: 80,
    },

    {
      name: "Pending",
      value: 20,
    },
  ];

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-8">
            Analytics Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h2 className="text-gray-500">
                Total Queues
              </h2>

              <p className="text-4xl font-bold mt-2">
                12
              </p>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h2 className="text-gray-500">
                Avg Wait Time
              </h2>

              <p className="text-4xl font-bold mt-2">
                15 mins
              </p>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h2 className="text-gray-500">
                Service Efficiency
              </h2>

              <p className="text-4xl font-bold mt-2">
                80%
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Peak Hours
              </h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <BarChart data={peakHourData}>

                  <XAxis dataKey="hour" />

                  <YAxis />

                  <Tooltip />

                  <Bar dataKey="users" />

                </BarChart>

              </ResponsiveContainer>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Service Efficiency
              </h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <PieChart>

                  <Pie
                    data={efficiencyData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >

                    {efficiencyData.map(
                      (entry, index) => (
                        <Cell key={index} />
                      )
                    )}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;

