import React from "react";
import io, { Socket } from "socket.io-client";

interface Props {
  url: string;
}

type SocketIO = typeof Socket | null;
const initalInstance = null as SocketIO;

export const SocketContext = React.createContext(initalInstance);

export const Provider: React.FC<Props> = ({ url, children }) => {
  const [socketInstance, setSocketInstance] = React.useState(initalInstance);

  React.useEffect(() => {
    const socket = io(url);
    setSocketInstance(socket);

    return () => {
      console.log("断开连接");
      socket.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (socketInstance) {
      socketInstance.on("connect", () => {
        console.log('已成功建立 websocket 连接')
      })
    }
  }, [socketInstance]);

  return <SocketContext.Provider value={socketInstance}>{children}</SocketContext.Provider>;
};
