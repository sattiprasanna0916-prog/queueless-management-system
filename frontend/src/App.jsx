import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Queues from "./pages/Queues";
import Analytics from "./pages/Analytics";
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
<Route path="/analytics" element={
  <ProtectedRoute>
    <Analytics />
  </ProtectedRoute>
} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;