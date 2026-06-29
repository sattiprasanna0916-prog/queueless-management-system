import { BrowserRouter as Router, Routes, Route }
from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tokens from "./pages/Tokens";
import Queues from "./pages/Queues";
import Analytics from "./pages/Analytics";
import Counters from "./pages/Counters";
import Prediction from "./pages/Prediction";
import Notifications from "./pages/Notifications";
import LiveQueue from "./pages/LiveQueue";
import UserToken from "./pages/UserToken";
import MyToken from "./pages/MyToken";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>

      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Shared Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/live-queue"
          element={
            <ProtectedRoute>
              <LiveQueue />
            </ProtectedRoute>
          }
        />

        {/* Admin Only */}

        <Route
          path="/queues"
          element={
            <ProtectedRoute
              allowedRoles={["ADMIN"]}
            >
              <Queues />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              allowedRoles={["ADMIN"]}
            >
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/prediction"
          element={
            <ProtectedRoute
              allowedRoles={["ADMIN"]}
            >
              <Prediction />
            </ProtectedRoute>
          }
        />

        {/* Admin + Staff */}

        <Route
          path="/tokens"
          element={
            <ProtectedRoute
              allowedRoles={["ADMIN", "STAFF"]}
            >
              <Tokens />
            </ProtectedRoute>
          }
        />

        <Route
          path="/counters"
          element={
            <ProtectedRoute
              allowedRoles={["ADMIN", "STAFF"]}
            >
              <Counters />
            </ProtectedRoute>
          }
        />

        {/* User Only */}

        <Route
          path="/user-token"
          element={
            <ProtectedRoute
              allowedRoles={["USER"]}
            >
              <UserToken />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-token"
          element={
            <ProtectedRoute
              allowedRoles={["USER"]}
            >
              <MyToken />
            </ProtectedRoute>
          }
        />

      </Routes>

    </Router>
  );
}

export default App;