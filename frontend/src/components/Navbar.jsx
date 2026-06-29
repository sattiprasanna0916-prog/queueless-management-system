import { FaBell } from "react-icons/fa";

function Navbar() {

  const notifications =
    JSON.parse(
      localStorage.getItem("notifications")
    ) || [];

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.location.href = "/";
  };

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-600">
        QueueLess
      </h1>

      <div className="flex items-center gap-6">

        <div className="relative">

          <FaBell className="text-2xl cursor-pointer" />

          <span
            className="
              absolute
              -top-2
              -right-2
              bg-red-500
              text-white
              text-xs
              rounded-full
              px-2
            "
          >
            {notifications.length}
          </span>

        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;