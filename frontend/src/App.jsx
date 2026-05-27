import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Queues from "./pages/Queues";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;