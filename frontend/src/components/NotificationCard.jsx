function NotificationCard({
  title,
  message,
  time,
}) {

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 mb-4">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <span className="text-gray-500 text-sm">
          {time}
        </span>

      </div>

      <p className="mt-4 text-gray-700">
        {message}
      </p>

    </div>
  );
}

export default NotificationCard;