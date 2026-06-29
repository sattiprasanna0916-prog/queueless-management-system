import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Welcome to QueueLess
      </h1>

      <div className="flex gap-6">

        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Register
        </Link>

      </div>

    </div>
  );
}

export default Home;