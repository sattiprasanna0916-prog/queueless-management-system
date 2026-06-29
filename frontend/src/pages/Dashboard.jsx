import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import {
  connectSocket,
  disconnectSocket
} from "../services/socket";

function Dashboard() {

  const [tokens, setTokens] =
    useState([]);

  useEffect(() => {

    fetchTokens();

    connectSocket(() => {
      fetchTokens();
    });

    return () => {
      disconnectSocket();
    };

  }, []);

  const fetchTokens = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8080/api/tokens"
        );

      setTokens(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const totalTokens =
    tokens.length;

  const waitingUsers =
    tokens.filter(
      (token) =>
        token.status === "WAITING"
    ).length;

  const servingUsers =
    tokens.filter(
      (token) =>
        token.status === "SERVING"
    ).length;

  const completedTokens =
    tokens.filter(
      (token) =>
        token.status === "COMPLETED"
    ).length;

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <DashboardCard
              title="Total Tokens"
              value={totalTokens}
            />

            <DashboardCard
              title="Waiting Users"
              value={waitingUsers}
            />

            <DashboardCard
              title="Serving Now"
              value={servingUsers}
            />

            <DashboardCard
              title="Completed"
              value={completedTokens}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;