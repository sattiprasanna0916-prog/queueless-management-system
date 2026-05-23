import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-blue-700 text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <ul className="space-y-4">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/queues">Queues</Link>
        </li>

        <li>
          <Link to="/analytics">Analytics</Link>
        </li>

        <li>
          <Link to="/counters">Counters</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;