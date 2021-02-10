import { stateFactory } from "@/utils/state_factory";

export const useRoom = stateFactory(
  {
    roomName: "",
    roomId: null,
    members: [],
    message: "",
    difficult: null,
  },
  (set) => ({
    setValue: (key, value) => {
      set((state) => {
        state[key] = value;
      });
    },
    setMutiValue: (data) => {
      set((state) => {
        Object.keys(data).forEach((i) => {
          if (state[i] !== undefined) {
            state[i] = data[i];
          }
        });
      });
    },
  })
);
