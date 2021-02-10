import { stateFactory } from "@/utils/state_factory";

export const useGrid = stateFactory(
  {
    roomName: "",
    score: 0,
    picKind: 2,
    difficult: 3,
    endTime: null,
    jigsawList: [],
    pics: [],
    currentVer: null,
    members: [],
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
    add: (event) => {
      const { nextPos, value } = event;
      const [x, y] = nextPos;
      
      set((state) => {
        state.jigsawList[x][y] = value;
      });
    },
    move: (event) => {
      const { nextPos, prePos } = event;
      const [i, j] = prePos;
      const [x, y] = nextPos;

      set((state) => {
        state.jigsawList[x][y] = state.jigsawList[i][j];
      });
    },
    remove: (event) => {
      const { prePos } = event;
      const [i, j] = prePos;

      set((state) => {
        state.jigsawList[i][j] = null;
      });
    },
  })
);
