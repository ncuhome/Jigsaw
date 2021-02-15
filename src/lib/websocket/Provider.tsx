import React, { useEffect } from "react";
import { useConnect } from "@/lib/websocket/hooks";
import { useSocketStore } from "@/lib/websocket/store";

interface Props {
  url: string;
  opts?: any;
  lazy?: boolean;
}

export const Provider: React.FC<Props> = ({ url, opts, lazy = false, children }) => {
  const { socketInstance, setMutiValue, socketURL, socketOpts } = useSocketStore((state) => ({
    socketInstance: state.socket,
    socketURL: state.url,
    socketOpts: state.opts,
    setMutiValue: state.setMutiValue,
  }));
  const { connect, disconnect } = useConnect();

  useEffect(() => {
    setMutiValue({ url, opts });
  }, []);

  useEffect(() => {
    if (lazy) return;

    connect();
    return disconnect;
  }, [socketURL, socketOpts, lazy]);

  useEffect(() => {
    if (!socketInstance) return;

    socketInstance.on("connect", () => {
      setMutiValue({ isConnect: true });
      console.log("已成功建立 websocket 连接");
    });
    socketInstance.on("disconnect", () => {
      setMutiValue({ isConnect: false });
      console.log("已断开连接");
    });

    return () => {
      socketInstance.off("connect", () => {});
      socketInstance.off("disconnect", () => {});
    };
  }, [socketInstance]);

  return <>{children}</>;
};
