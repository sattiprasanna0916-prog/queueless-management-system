function QueueCard({ queue }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5">
      <h2 className="text-2xl font-bold text-blue-600">
        {queue.name}
      </h2>

      <p className="mt-2">
        Current Token:
        <span className="font-bold ml-2">
          {queue.currentToken}
        </span>
      </p>

      <p className="mt-2">
        Waiting Users:
        <span className="font-bold ml-2">
          {queue.waitingUsers}
        </span>
      </p>
    </div>
  );
}

export default QueueCard;