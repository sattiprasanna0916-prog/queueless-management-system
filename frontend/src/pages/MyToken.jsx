import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MyToken() {

  const [tokens, setTokens] =
    useState([]);

  useEffect(() => {
    fetchMyTokens();
  }, []);

  const fetchMyTokens = async () => {

    try {

      const email =
        localStorage.getItem("email");

      const response =
        await axios.get(
          `http://localhost:8080/api/tokens/user/${email}`
        );

      setTokens(response.data);

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
            My Tokens
          </h1>

          <table className="w-full bg-white shadow rounded-xl">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="p-4">
                  Token
                </th>

                <th className="p-4">
                  Status
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

                  <td className="p-4">
                    {token.status}
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

export default MyToken;