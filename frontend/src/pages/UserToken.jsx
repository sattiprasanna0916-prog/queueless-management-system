import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function UserToken() {

  const [customerName, setCustomerName] =
    useState("");

  // Always get latest email from localStorage
  const email =
    localStorage.getItem("email");

  const [serviceType, setServiceType] =
    useState("");

  const [generatedToken, setGeneratedToken] =
    useState(null);

  const createToken = async () => {

    try {

      console.log(
        "Current email:",
        email
      );

      const response =
        await axios.post(
          "http://localhost:8080/api/tokens",
          {
            customerName,
            email,
            serviceType
          }
        );

      setGeneratedToken(
        response.data
      );

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
            Generate Your Token
          </h1>

          <div className="bg-white p-6 rounded-xl shadow-lg w-[500px]">

            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 w-full mb-4 rounded"
              value={customerName}
              onChange={(e) =>
                setCustomerName(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Service Type"
              className="border p-2 w-full mb-4 rounded"
              value={serviceType}
              onChange={(e) =>
                setServiceType(
                  e.target.value
                )
              }
            />

            <button
              onClick={createToken}
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              Generate Token
            </button>

          </div>

          {generatedToken && (

            <div className="bg-green-100 p-6 rounded-xl mt-8">

              <h2 className="text-2xl font-bold">
                Token Generated Successfully
              </h2>

              <p>
                Token:
                {generatedToken.tokenNumber}
              </p>

              <p>
                Status:
                {generatedToken.status}
              </p>

              <p>
                Counter:
                {generatedToken.assignedCounter}
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default UserToken;