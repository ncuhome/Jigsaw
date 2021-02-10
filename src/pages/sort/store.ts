import { stateFactory } from "@/utils/state_factory";

type User = {
  userId: string | number;
  mine: boolean
}

type List = {
  members: User[];
  score: number;
  sort: number;
  backgroundColor: string;
  textColor: string;
  myGroup: boolean;
}[];

export const useSort = stateFactory(
  {
    list: [] as List,
  },
  (set) => ({
    updateSortList: (value) => {
      set((state) => {
        state.list = value;

        return state;
      });
    },
  })
);
