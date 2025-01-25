// socket.ts
import { io, Socket } from "socket.io-client";

class SocketManager {
  private static instance: Socket | null = null;

  static getInstance(): Socket {
    if (!this.instance) {
      this.instance = io(import.meta.env.VITE_SERVER_URL, {
        withCredentials: true,
        reconnection: true,
        reconnectionDelay: 2000,
        reconnectionAttempts: 3,
      }); // Replace with your socket server URL
      this.instance.on("connect", () => {
        console.log("Socket connected with ID:", this.instance?.id);
      });
      this.instance.on("connect_timeout", () => {
        console.error("Connection timeout");
      });

      this.instance.on("reconnect_failed", () => {
        console.error("Reconnection failed");
      });

      this.instance.on("error", (err) => {
        console.error("Socket error:", err);
      });
      this.instance.on("disconnect", () => {
        console.log("Socket disconnected");
      });
    }
    return this.instance;
  }

  static disconnectInstance(): void {
    if (this.instance) {
      this.instance.disconnect();
      this.instance = null;
      console.log("Socket instance disconnected and cleared.");
    }
  }
}

export default SocketManager;
