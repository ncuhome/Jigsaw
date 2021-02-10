import { stateFactory } from "@/utils/state_factory";

export const useSort = stateFactory(
  {
    list: []
  },
  (set) => ({
    updateSortList: (value) => {
      set((state) => {
        state.list = value;
      });
    }
  })
);
