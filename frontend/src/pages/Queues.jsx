import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Queues() {

  const queues = [
    {
      id: 1,
      name: "Hospital Queue",
      waiting: 15,
      avgTime: "20 mins"
    },
    {
      id: 2,
      name: "Bank Queue",
      waiting: 8,
      avgTime: "10 mins"
    }
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Queue Management
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            {queues.map((queue) => (
              <div
                key={queue.id}
                className="bg-white shadow-lg rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold">
                  {queue.name}
                </h2>

                <p className="mt-3 text-gray-600">
                  Waiting Users: {queue.waiting}
                </p>

                <p className="text-gray-600">
                  Avg Wait Time: {queue.avgTime}
                </p>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                  View Queue
                </button>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Queues;