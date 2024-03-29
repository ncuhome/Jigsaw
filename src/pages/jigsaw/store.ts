import { stateFactory } from "@/utils/state_factory";

export interface GameMember {
  identity: string;
  username: string;
  id: number;
  pics: number[];
}

export interface GridData {
  [key: string]: any;
  roomName: string;
  score: number;
  picKind: number;
  difficult: number;
  endTime: number;
  jigsawList: number[][];
  pics: number[];
  members: GameMember[];
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
    // endTime: 10000000000,
    // jigsawList: [
    //   [0, 0, 0],
    //   [1, 0, 0],
    //   [0, 2, 0],
    // ],
    // pics: [3, 4, 5],
    // members: [
    //   {
    //     id: 1,
    //     username: "sxy",
    //     identity: "leader",
    //   },
    //   {
    //     id: 2,
    //     username: "bbb",
    //     identity: "member",
    //   },
    //   {
    //     id: 3,
    //     username: "ccc",
    //     identity: "member",
    //   },
    // ],
    endTime: null,
    jigsawList: [],
    pics: [],
    members: [],
    images: Array.from({ length: 3 }).fill(""),
  } as GridData,
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
        let temp = state.jigsawList[x][y];
        state.jigsawList[x][y] = state.jigsawList[i][j];
        state.jigsawList[i][j] = temp;
        return state;
      });
    },
    remove: (event: RemoveEvent) => {
      const { prePos } = event;
      const [i, j] = prePos;

      set((state) => {
        state.jigsawList[i][j] = 0;
        return state;
      });
    },
  })
);
