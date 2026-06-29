import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NotificationCard from "../components/NotificationCard";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  connectSocket,
  disconnectSocket
} from "../services/socket";

function LiveQueue() {

  const [notification, setNotification] =
    useState("");

  const [currentToken, setCurrentToken] =
  useState("");

const [waitingUsers, setWaitingUsers] =
  useState(0);
  const fetchLiveQueue = async () => {

  try {

    const response =
      await axios.get(
        "http://localhost:8080/api/tokens"
      );

    const tokens =
      response.data;

    const servingToken =
      tokens.find(
        (token) =>
          token.status === "SERVING"
      );

    const waitingCount =
      tokens.filter(
        (token) =>
          token.status === "WAITING"
      ).length;

    setCurrentToken(
      servingToken
        ? servingToken.tokenNumber
        : "No Active Token"
    );

    setWaitingUsers(
      waitingCount
    );

  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
fetchLiveQueue();
    connectSocket((message) => {

      console.log(message);

      setNotification(message);
        fetchLiveQueue();
    });

    return () => {
      disconnectSocket();
    };

  }, []);

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          {notification && (
            <NotificationCard
              title="Live Update"
              message={notification}
              time="Just now"
            />
          )}

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