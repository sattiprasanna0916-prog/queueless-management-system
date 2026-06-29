import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("USER");

  const handleRegister = async () => {

    try {

      await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          name,
          email,
          password,
          role
        }
      );

      alert(
        "Registered Successfully"
      );
      localStorage.setItem(
  "token",
  "loggedin"
);

localStorage.setItem(
  "role",
  role
);
localStorage.setItem(
  "email",
  email
);

console.log(
  "Saved after register:",
  localStorage.getItem("email")
);
navigate("/dashboard");
     

    } catch (error) {

      console.log(error);

      alert("Register Failed");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white shadow-lg p-8 rounded-xl w-96">

        <h1 className="text-2xl font-bold text-center mb-5">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-2 mb-4 rounded"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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

        <select
          className="border w-full p-2 mb-4 rounded"
          onChange={(e) =>
            setRole(e.target.value)
          }
        >
          <option value="USER">
            USER
          </option>
          <option value="STAFF">
            STAFF
          </option>
          <option value="ADMIN">
            ADMIN
          </option>
        </select>

        <button
          onClick={handleRegister}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;