import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

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

      console.log(
        "Email from backend:",
        response.data.email
      );

      if (
        response.data.message ===
        "Login Successful"
      ) {

        localStorage.setItem(
          "token",
          "loggedin"
        );

        localStorage.setItem(
          "role",
          response.data.role
        );

        // Important fix
        // Always save typed login email
localStorage.setItem(
  "email",
  email
);

        console.log(
          "Saved email:",
          localStorage.getItem("email")
        );

        navigate("/dashboard");

      } else {

        alert(
          response.data.message
        );
      }

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