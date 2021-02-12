import React from "react";
import { SocketContext } from "@/lib/websocket/Provider";
import type { EmitNamesType, ListenerNamesType, Emit, Listener } from "@/lib/websocket/interface";

/**
 * 返回可发送事件的函数
 * - event 事件名
 */
export const useEmit = <T extends EmitNamesType>(event: T) => {
  const socket = React.useContext(SocketContext);
  const send = React.useCallback(
    (data: Emit[T]) => {
      if (!socket) return;

      socket.emit(event, JSON.stringify(data));
    },
    [socket]
  );

  return send;
};

/**
 * 添加监听器
 * - event 事件名
 * - fn 监听器出发的回调函数
 */
export const useListener = <T extends ListenerNamesType>(
  event: T,
  fn: (data: Listener[T]) => void
) => {
  const socket = React.useContext(SocketContext);

  React.useEffect(() => {
    if (!socket) return;

    socket.on(event, (data: Listener[T]) => {
      fn(data);
      console.log(data);
    });
    return () => socket.off(event);
  }, [socket]);
};
