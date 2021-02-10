import { stateFactory } from "@/utils/state_factory";

interface Members {
  identity: string;
  username: string;
  id: number;
  pics: number[]
}

interface GridData {
  roomName: string;
  score: number;
  picKind: number;
  difficult: number;
  endTime: number;
  jigsawList: number[][];
  pics: number[];
  members: Members[];
  images: string[];
}

interface AddEvent {
  nextPos: number[];
  value: number;
}

interface MoveEvent {
  prePos: number[];
  nextPos: number[];
}

interface RemoveEvent {
  prePos: number[];
}

export const useGrid = stateFactory(
  {
    roomName: "",
    score: 0,
    picKind: 2,
    difficult: 3,
    endTime: null,
    jigsawList: [],
    pics: [],
    members: [],
    images: Array.from({ length: 3 }).fill(""),
  },
  (set) => ({
    setValue: <T extends keyof GridData>(key: T, value: GridData[T]) => {
      set((state) => {
        state[key] = value;
        return state;
      });
    },
    setMutiValue: (data: { [P in keyof GridData]?: GridData[P] }) => {
      set((state) => {
        Object.keys(data).forEach((i) => {
          if (state[i] !== undefined) {
            state[i] = data[i];
          }
        });

        return state;
      });
    },
    add: (event: AddEvent) => {
      const { nextPos, value } = event;
      const [x, y] = nextPos;

      set((state) => {
        state.jigsawList[x][y] = value;
        return state;
      });
    },
    move: (event: MoveEvent) => {
      const { nextPos, prePos } = event;
      const [i, j] = prePos;
      const [x, y] = nextPos;

      set((state) => {
        state.jigsawList[x][y] = state.jigsawList[i][j];
        return state;
      });
    },
    remove: (event: RemoveEvent) => {
      const { prePos } = event;
      const [i, j] = prePos;

      set((state) => {
        state.jigsawList[i][j] = null;
        return state;
      });
    },
  })
);
