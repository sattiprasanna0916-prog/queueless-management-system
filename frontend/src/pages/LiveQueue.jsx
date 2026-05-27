import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import socket from "../services/socket";


function LiveQueue() {
   useEffect(() => {

  socket.on("queue-update", (data) => {
    console.log(data);
  });

  return () => {
    socket.off("queue-update");
  };

}, []);
  const currentToken = "A105";

  const waitingUsers = 12;

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-8">
            Live Queue Tracking
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white shadow-xl rounded-xl p-8">

              <h2 className="text-gray-500 text-xl">
                Current Token
              </h2>

              <p className="text-6xl font-bold text-blue-600 mt-4">
                {currentToken}
              </p>

            </div>

            <div className="bg-white shadow-xl rounded-xl p-8">

              <h2 className="text-gray-500 text-xl">
                Waiting Users
              </h2>

              <p className="text-6xl font-bold text-green-600 mt-4">
                {waitingUsers}
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default LiveQueue;