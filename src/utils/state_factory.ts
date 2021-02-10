import create, { SetState, StateCreator, State } from "zustand";
import produce from "immer";

export const stateFactory = <T extends State, K extends State>(
  state: T,
  events: (set: SetState<T>) => K
) => {
  return create(
    immer<T & K>((set) => ({
      ...state,
      ...events(set),
    }))
  );
};

export const immer = <T extends State>(config: StateCreator<T>): StateCreator<T> => (
  set,
  get,
  api
) => config((fn: any) => set(produce(fn) as (state: T) => T), get, api);
