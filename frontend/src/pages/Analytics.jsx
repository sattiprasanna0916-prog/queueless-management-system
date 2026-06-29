import { useEffect, useState } from "react";
import axios from "axios";

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

  const [tokens, setTokens] =
    useState([]);

  useEffect(() => {
    fetchTokens();
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

  const waitingTokens =
    tokens.filter(
      (token) =>
        token.status === "WAITING"
    ).length;

  const servingTokens =
    tokens.filter(
      (token) =>
        token.status === "SERVING"
    ).length;

  const completedTokens =
    tokens.filter(
      (token) =>
        token.status === "COMPLETED"
    ).length;

  const barData = [
    {
      name: "Waiting",
      count: waitingTokens,
    },
    {
      name: "Serving",
      count: servingTokens,
    },
    {
      name: "Completed",
      count: completedTokens,
    },
  ];

  const pieData = [
    {
      name: "Waiting",
      value: waitingTokens,
    },
    {
      name: "Serving",
      value: servingTokens,
    },
    {
      name: "Completed",
      value: completedTokens,
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2>Total Tokens</h2>
              <p className="text-4xl font-bold">
                {totalTokens}
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2>Waiting</h2>
              <p className="text-4xl font-bold">
                {waitingTokens}
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2>Serving</h2>
              <p className="text-4xl font-bold">
                {servingTokens}
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2>Completed</h2>
              <p className="text-4xl font-bold">
                {completedTokens}
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Token Status Bar
              </h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" />
                </BarChart>
              </ResponsiveContainer>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Token Distribution
              </h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {pieData.map(
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