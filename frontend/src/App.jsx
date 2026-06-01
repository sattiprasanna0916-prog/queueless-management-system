import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Queues from "./pages/Queues";
import Tokens from "./pages/Tokens";
import Analytics from "./pages/Analytics";
import LiveQueue from "./pages/LiveQueue";
import Counters from "./pages/Counters";
import Prediction from "./pages/Prediction";
import Notifications from "./pages/Notifications";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
        <Dashboard />
       </ProtectedRoute>} />
       <Route path="/queues" element={
  <ProtectedRoute>
    <Queues />
  </ProtectedRoute>
} />
<Route
  path="/tokens"
  element={
    <ProtectedRoute>
      <Tokens />
    </ProtectedRoute>
  }
/>
<Route
  path="/counters"
  element={
    <ProtectedRoute>
      <Counters />
    </ProtectedRoute>
  }
/>
<Route path="/analytics" element={
  <ProtectedRoute>
    <Analytics />
  </ProtectedRoute>
} />
<Route
  path="/live-queue"
  element={
    <ProtectedRoute>
      <LiveQueue />
    </ProtectedRoute>
  }
/><Route
  path="/prediction"
  element={
    <ProtectedRoute>
      <Prediction />
    </ProtectedRoute>
  }
/><Route
  path="/notifications"
  element={
    <ProtectedRoute>
      <Notifications />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;