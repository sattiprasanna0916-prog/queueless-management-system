
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail]
    = useState("");

  const [password, setPassword]
    = useState("");

  const handleLogin = async () => {

    try {

      const response =
        await axios.post(
          "http://localhost:8080/api/auth/login",
          {
            email,
            password,
          }
        );

      console.log(response.data);

      localStorage.setItem(
        "token",
        response.data
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white shadow-lg p-8 rounded-xl w-96">

        <h1 className="text-2xl font-bold text-center mb-5">
          QueueLess Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-4 rounded"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4 rounded"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;

