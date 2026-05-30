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
  <Link to="/tokens">Tokens</Link>
</li>
        <li>
          <Link to="/queues">Queues</Link>
        </li>

        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
  <Link to="/live-queue">
    Live Queue
  </Link>
</li>
        <li>
          <Link to="/counters">Counters</Link>
        </li>
        <Link to="/analytics">
  <li className="p-3 hover:bg-blue-700 rounded">
    Analytics
  </li>
  <li>
  <Link to="/counters">
    Counters
  </Link>
</li>
<li>
  <Link to="/prediction">
    AI Prediction
  </Link>
</li>
</Link>
      </ul>
    </div>
  );
}

export default Sidebar;