import { stateFactory } from "@/utils/state_factory";
import type { SocketIO } from "@/lib/websocket/interface";

interface SocketData {
  [key: string]: any;
  socket: SocketIO;
  url: string;
  opts: any;
  isConnect: boolean
}

export const useSocketStore = stateFactory(
  {
    socket: null as SocketIO,
    url: null,
    opts: null,
    isConnect: false
  } as SocketData,
  (set) => ({
    setSocket: (socket: SocketIO) => {
      set((state) => {
        state.socket = socket;
        return state;
      });
    },
    setMutiValue: (data: { [P in keyof SocketData]?: SocketData[P] }) => {
      set((state) => {
        Object.keys(data).forEach((i) => {
          if (state[i] !== undefined) {
            state[i] = data[i];
          }
        });

        return state;
      });
    },
  })
);
