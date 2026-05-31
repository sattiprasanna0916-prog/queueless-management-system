import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NotificationCard from "../components/NotificationCard";

function Notifications() {

  const notifications = [

    {
      id: 1,
      title: "Queue Alert",
      message:
        "Your token A101 will be called soon.",
      time: "2 mins ago",
    },

    {
      id: 2,
      title: "Counter Assigned",
      message:
        "Please proceed to Counter 2.",
      time: "5 mins ago",
    },

    {
      id: 3,
      title: "Queue Updated",
      message:
        "Waiting time reduced to 10 mins.",
      time: "8 mins ago",
    },
  ];

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <div className="flex justify-between items-center mb-8">

            <h1 className="text-3xl font-bold">
              Notifications
            </h1>

            <div className="bg-red-500 text-white px-4 py-2 rounded-full">
              3 New
            </div>

          </div>
        <AlertPopup
  message="Your turn is approaching!"
/>
          {notifications.map((item) => (

            <NotificationCard
              key={item.id}
              title={item.title}
              message={item.message}
              time={item.time}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default Notifications;