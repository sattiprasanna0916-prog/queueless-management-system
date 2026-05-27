import { useState } from "react";

function CreateQueue() {

  const [queueName, setQueueName] = useState("");

  const handleSubmit = () => {
    console.log(queueName);
  };

  return (
    <div className="p-8">

      <div className="bg-white shadow-lg rounded-xl p-6 w-[400px]">

        <h1 className="text-2xl font-bold mb-4">
          Create Queue
        </h1>

        <input
          type="text"
          placeholder="Queue Name"
          className="border p-2 rounded w-full mb-4"
          onChange={(e) => setQueueName(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Create Queue
        </button>

      </div>

    </div>
  );
}

export default CreateQueue;