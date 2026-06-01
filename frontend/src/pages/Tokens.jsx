import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Tokens() {

  const tokens = [
    {
      token: "A101",
      user: "Ravi",
      status: "Waiting"
    },
    {
      token: "A102",
      user: "Sai",
      status: "Completed"
    }
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Token List
          </h1>

          <table className="w-full bg-white shadow rounded-xl">

            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4">Token</th>
                <th className="p-4">User</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {tokens.map((token, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="p-4">{token.token}</td>
                  <td>{token.user}</td>
                  <td>{token.status}</td>
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