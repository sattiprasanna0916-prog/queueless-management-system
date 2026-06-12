import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

let stompClient = null;

export const connectSocket = (
  onMessageReceived
) => {

  const socket = new SockJS(
    "http://localhost:8080/ws"
  );

  stompClient = new Client({
    webSocketFactory: () => socket,

    reconnectDelay: 5000,

    onConnect: () => {

      console.log(
        "Connected to WebSocket"
      );

      stompClient.subscribe(
        "/topic/queue",
        (message) => {

          if (onMessageReceived) {
            onMessageReceived(
              message.body
            );
          }
        }
      );
    },
  });

  stompClient.activate();
};

export const disconnectSocket = () => {

  if (stompClient) {
    stompClient.deactivate();
  }
};