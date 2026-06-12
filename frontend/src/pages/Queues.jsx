import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  connectSocket,
  disconnectSocket
} from "../services/socket";
function Queues() {

  const [queues, setQueues] = useState([]);

  const [name, setName] = useState("");
  const [currentToken, setCurrentToken] = useState("");
  const [waitingUsers, setWaitingUsers] = useState("");

  useEffect(() => {

  fetchQueues();

  connectSocket(() => {
    fetchQueues();
  });

  return () => {
    disconnectSocket();
  };

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

  const createQueue = async () => {

    try {

      await axios.post(
        "http://localhost:8080/api/queues",
        {
          name,
          currentToken,
          waitingUsers,
        }
      );
      await axios.post(
  "http://localhost:8080/api/live/update",
  "Queue Created"
);
      fetchQueues();

      setName("");
      setCurrentToken("");
      setWaitingUsers("");

    } catch (error) {

      console.log(error);

    }
  };

  const deleteQueue = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/api/queues/${id}`
      );
      await axios.post(
  "http://localhost:8080/api/live/update",
  "Queue Deleted"
);
      fetchQueues();

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

          <h1 className="text-3xl font-bold mb-6">
            Queue Management
          </h1>

          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">

            <h2 className="text-xl font-bold mb-4">
              Create Queue
            </h2>

            <input
              type="text"
              placeholder="Queue Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
            />

            <input
              type="text"
              placeholder="Current Token"
              value={currentToken}
              onChange={(e) => setCurrentToken(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
            />

            <input
              type="number"
              placeholder="Waiting Users"
              value={waitingUsers}
              onChange={(e) => setWaitingUsers(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
            />

            <button
              onClick={createQueue}
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              Create Queue
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {queues.map((queue) => (

              <div
                key={queue.id}
                className="bg-white p-6 rounded-xl shadow-lg"
              >

                <h2 className="text-2xl font-bold">
                  {queue.name}
                </h2>

                <p className="mt-2">
                  Current Token: {queue.currentToken}
                </p>

                <p>
                  Waiting Users: {queue.waitingUsers}
                </p>

                <button
                  onClick={() => deleteQueue(queue.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
                >
                  Delete Queue
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