import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

interface CommonStore {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useCommonStore = create<CommonStore>()(
  persist(
    set => ({
      theme: 'light',
      setTheme: (theme: 'light' | 'dark') => set({theme}),
    }),
    {
      name: 'common-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
