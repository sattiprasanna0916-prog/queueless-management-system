import { Link } from "react-router-dom";

function Sidebar() {

  const role =
    localStorage.getItem("role");

  return (
    <div className="w-64 bg-blue-700 text-white h-screen p-5">

      <h2 className="text-2xl font-bold mb-8">
        QueueLess
      </h2>

      <ul className="space-y-4">

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        {role === "ADMIN" && (
          <>
            <li>
              <Link to="/queues">
                Queues
              </Link>
            </li>

            <li>
              <Link to="/analytics">
                Analytics
              </Link>
            </li>

            <li>
              <Link to="/prediction">
                Prediction
              </Link>
            </li>

            <li>
              <Link to="/counters">
                Counters
              </Link>
            </li>

            <li>
              <Link to="/tokens">
                Manage Tokens
              </Link>
            </li>
          </>
        )}

        {role === "STAFF" && (
          <>
            <li>
              <Link to="/tokens">
                Manage Tokens
              </Link>
            </li>

            <li>
              <Link to="/counters">
                Counters
              </Link>
            </li>
          </>
        )}

        {role === "USER" && (
          <>
            <li>
              <Link to="/user-token">
                Generate Token
              </Link>
            </li>

            <li>
              <Link to="/my-token">
                My Tokens
              </Link>
            </li>
          </>
        )}

        <li>
          <Link to="/notifications">
            Notifications
          </Link>
        </li>

        <li>
          <Link to="/live-queue">
            Live Queue
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;