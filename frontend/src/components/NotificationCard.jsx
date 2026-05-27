function NotificationCard({ message }) {

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">

      <p className="font-semibold">
        {message}
      </p>

    </div>
  );
}

export default NotificationCard;