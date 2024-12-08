import {create} from 'zustand';

interface TestStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useTestStore = create<TestStore>(set => {
  return {
    count: 0,
    increment: () => set(state => ({count: state.count + 1})),
    decrement: () =>
      set(state => ({count: Math.max((state.count || 0) - 1, 0)})),
  };
});
