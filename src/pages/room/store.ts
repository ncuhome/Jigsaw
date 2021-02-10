import { stateFactory } from "@/utils/state_factory";

export interface RoomMember {
  username: string;
  id: number;
  identity: string;
}

interface Room {
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
  },
  (set) => ({
    setValue: <T extends keyof Room>(key: T, value: Room[T]) => {
      set((state) => {
        state[key] = value;
        return state;
      });
    },
    setMutiValue: (data: { [P in keyof Room]?: Room[P] }) => {
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
