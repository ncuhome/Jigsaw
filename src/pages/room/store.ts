import { stateFactory } from "@/utils/state_factory";

export interface RoomMember {
  username: string;
  id: number;
  identity: string;
}

interface RoomData {
  [key: string]: any;
  roomName: string;
  roomId: number;
  members: RoomMember[];
  message: string;
  difficult: number;
}

export const useRoom = stateFactory(
  {
    roomName: "",
    roomId: null,
    members: [],
    message: "",
    difficult: null,
  } as RoomData,
  (set) => ({
    setValue: <T extends keyof RoomData>(key: T, value: RoomData[T]) => {
      set((state) => {
        state[key] = value;
        return state;
      });
    },
    setMutiValue: (data: { [P in keyof RoomData]?: RoomData[P] }) => {
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
