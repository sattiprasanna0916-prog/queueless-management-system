import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AIPredictionCard from "../components/AIPredictionCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar
} from "recharts";

function Analytics() {

  const waitingData = [
    { day: "Mon", waiting: 20 },
    { day: "Tue", waiting: 35 },
    { day: "Wed", waiting: 18 },
    { day: "Thu", waiting: 40 },
    { day: "Fri", waiting: 28 }
  ];

  const peakHourData = [
    { hour: "10 AM", users: 15 },
    { hour: "11 AM", users: 25 },
    { hour: "12 PM", users: 40 },
    { hour: "1 PM", users: 18 }
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

          {/* Cards */}

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white shadow-xl rounded-xl p-6">
              <h2 className="text-gray-500">
                Average Waiting Time
              </h2>

              <p className="text-4xl font-bold mt-3 text-blue-600">
                18 mins
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-xl p-6">
              <h2 className="text-gray-500">
                Service Efficiency
              </h2>

              <p className="text-4xl font-bold mt-3 text-green-600">
                89%
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-xl p-6">
              <h2 className="text-gray-500">
                Total Tokens Today
              </h2>

              <p className="text-4xl font-bold mt-3 text-purple-600">
                320
              </p>
            </div>

          </div>
          <div className="mb-10">
  <AIPredictionCard />
</div>
          {/* Charts */}

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-xl">

              <h2 className="text-xl font-bold mb-6">
                Weekly Waiting Analysis
              </h2>

              <LineChart
                width={450}
                height={300}
                data={waitingData}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="waiting"
                  stroke="#2563eb"
                />
              </LineChart>

            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl">

              <h2 className="text-xl font-bold mb-6">
                Peak Hour Analysis
              </h2>

              <BarChart
                width={450}
                height={300}
                data={peakHourData}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="users"
                  fill="#16a34a"
                />
              </BarChart>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;