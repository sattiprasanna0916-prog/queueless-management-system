function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-lg p-8 rounded-xl w-96">
        <h1 className="text-2xl font-bold text-center mb-5">
          QueueLess Login
        </h1>

        <input
          type="text"
          placeholder="Email"
          className="border w-full p-2 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4 rounded"
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
