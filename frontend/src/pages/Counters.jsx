import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CounterCard from "../components/CounterCard";

function Counters() {

  const [counters, setCounters] = useState([]);
  const [counterName, setCounterName] = useState("");
  const [allocatedCounter, setAllocatedCounter] =
    useState(null);

  useEffect(() => {
    fetchCounters();
  }, []);

  const fetchCounters = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8080/api/counters"
      );

      setCounters(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const createCounter = async () => {

    try {

      await axios.post(
        "http://localhost:8080/api/counters",
        {
          counterName,
          currentLoad: 0
        }
      );

      setCounterName("");

      fetchCounters();

    } catch (error) {

      console.log(error);

    }
  };

  const increaseLoad = async (id) => {

    try {

      await axios.put(
        `http://localhost:8080/api/counters/${id}/increase`
      );

      fetchCounters();

    } catch (error) {

      console.log(error);

    }
  };

  const decreaseLoad = async (id) => {

    try {

      await axios.put(
        `http://localhost:8080/api/counters/${id}/decrease`
      );

      fetchCounters();

    } catch (error) {

      console.log(error);

    }
  };

  const deleteCounter = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/api/counters/${id}`
      );

      fetchCounters();

    } catch (error) {

      console.log(error);

    }
  };

  const allocateCounter = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8080/api/counters/allocate"
      );

      setAllocatedCounter(response.data);

      fetchCounters();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-8">
            Smart Counter Allocation
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

            <h2 className="text-2xl font-bold mb-4">
              Create Counter
            </h2>

            <input
              type="text"
              placeholder="Counter Name"
              value={counterName}
              onChange={(e) =>
                setCounterName(e.target.value)
              }
              className="border p-2 w-full mb-4 rounded"
            />

            <button
              onClick={createCounter}
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              Add Counter
            </button>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

            <h2 className="text-2xl font-bold mb-4">
              Smart Allocation Suggestion
            </h2>

            <button
              onClick={allocateCounter}
              className="bg-green-600 text-white px-6 py-2 rounded mb-4"
            >
              Allocate Next User
            </button>

            {allocatedCounter && (
              <p className="text-lg">
                Next User Should Go To:
                <span className="font-bold text-blue-600 ml-2">
                  {allocatedCounter.counterName}
                </span>
              </p>
            )}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {counters.map((counter) => (

              <div
                key={counter.id}
                className="bg-white rounded-xl shadow-lg p-6"
              >

                <h2 className="text-2xl font-bold">
                  {counter.counterName}
                </h2>

                <p className="mt-2">
                  Current Load: {counter.currentLoad}
                </p>

                <div className="mt-4 space-x-2">

                  <button
                    onClick={() =>
                      increaseLoad(counter.id)
                    }
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    + Load
                  </button>

                  <button
                    onClick={() =>
                      decreaseLoad(counter.id)
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    - Load
                  </button>

                  <button
                    onClick={() =>
                      deleteCounter(counter.id)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Counters;