import create from "zustand";
import produce from "immer";

export const stateFactory = (state, events) => {
  return create(
    immerMidware((set) => ({
      ...state,
      ...events(set),
    }))
  );
};

export const immerMidware = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);
