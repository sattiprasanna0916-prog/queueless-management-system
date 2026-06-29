import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  connectSocket,
  disconnectSocket
} from "../services/socket";
function Tokens() {

  const [tokens, setTokens] = useState([]);

  
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

      const response = await axios.get(
        "http://localhost:8080/api/tokens"
      );

      setTokens(response.data);

    } catch (error) {

      console.log(error);

    }
  };
    

  const callToken = async (id) => {

    try {

      await axios.put(
        `http://localhost:8080/api/tokens/${id}/call`
      );
      await axios.post(
  "http://localhost:8080/api/live/update",
  "Token Called"
);
      fetchTokens();

    } catch (error) {

      console.log(error);

    }
  };

  const completeToken = async (id) => {

    try {

      await axios.put(
        `http://localhost:8080/api/tokens/${id}/complete`
      );
      await axios.post(
  "http://localhost:8080/api/live/update",
  "Token Completed"
);
      fetchTokens();

    } catch (error) {

      console.log(error);

    }
  };

  const deleteToken = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/api/tokens/${id}`
      );
      await axios.post(
  "http://localhost:8080/api/live/update",
  "Token Deleted"
);
      fetchTokens();

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
            Token Management
          </h1>

          <table className="w-full bg-white shadow rounded-xl">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="p-4">
                  Token
                </th>

                <th className="p-4">
                  Customer
                </th>

                <th className="p-4">
                  Status
                </th>

                <th className="p-4">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {tokens.map((token) => (

                <tr
                  key={token.id}
                  className="text-center border-b"
                >

                  <td className="p-4">
                    {token.tokenNumber}
                  </td>

                  <td>
                    {token.customerName}
                  </td>

                  <td>
                    {token.status}
                  </td>

                  <td className="space-x-2">

                    <button
                      onClick={() =>
                        callToken(token.id)
                      }
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Call
                    </button>

                    <button
                      onClick={() =>
                        completeToken(token.id)
                      }
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Complete
                    </button>

                    <button
                      onClick={() =>
                        deleteToken(token.id)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Tokens;