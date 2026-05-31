import { FaBell } from "react-icons/fa";
function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between">
      <h1 className="text-2xl font-bold text-blue-600">
        QueueLess
      </h1>

      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
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
    3
  </span>

</div>
    </div>
    
  );
}

export default Navbar;