import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NotificationCard from "../components/NotificationCard";

import {
  connectSocket,
  disconnectSocket
} from "../services/socket";

function Notifications() {

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    fetchNotifications();

    connectSocket(() => {
      fetchNotifications();
    });

    return () => {
      disconnectSocket();
    };

  }, []);

  const fetchNotifications = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8080/api/notifications"
      );

      setNotifications(response.data);

    } catch (error) {

      console.log(error);

    }
  };

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
              {notifications.length} New
            </div>

          </div>

          {notifications.length > 0 ? (

            notifications.map((item, index) => (

              <NotificationCard
                key={index}
                title="Queue Alert"
                message={item}
                time="Just now"
              />

            ))

          ) : (

            <div className="bg-white p-6 rounded-xl shadow-lg">
              No notifications yet
            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Notifications;