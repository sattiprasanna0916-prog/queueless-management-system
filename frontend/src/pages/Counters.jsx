import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CounterCard from "../components/CounterCard";

function Counters() {

  const counters = [

    {
      id: 1,
      name: "Counter 1",
      status: "Active",
      load: 70,
    },

    {
      id: 2,
      name: "Counter 2",
      status: "Active",
      load: 35,
    },

    {
      id: 3,
      name: "Counter 3",
      status: "Busy",
      load: 90,
    },
  ];

  return (
    <div className="flex">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

  <h2 className="text-2xl font-bold mb-4">
    Smart Allocation Suggestion
  </h2>

  <p className="text-lg">
    Next User Should Go To:
    <span className="font-bold text-blue-600 ml-2">
      Counter 2
    </span>
  </p>

</div>
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-8">
            Smart Counter Allocation
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {counters.map((counter) => (

              <CounterCard
                key={counter.id}
                counter={counter}
              />

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Counters;