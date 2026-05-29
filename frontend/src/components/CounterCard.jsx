function CounterCard({ counter }) {

  return (
    <div className="bg-white shadow-xl rounded-xl p-6">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          {counter.name}
        </h2>

        <span
          className={
            counter.status === "Active"
              ? "bg-green-100 text-green-700 px-3 py-1 rounded-full"
              : "bg-red-100 text-red-700 px-3 py-1 rounded-full"
          }
        >
          {counter.status}
        </span>

      </div>

      <div className="mt-6">

        <p className="text-gray-500">
          Current Load
        </p>

        <p className="text-4xl font-bold mt-2">
          {counter.load}
        </p>

      </div>

      <div className="mt-6">

        <div className="w-full bg-gray-200 rounded-full h-4">

          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{
              width: `${counter.load}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default CounterCard;