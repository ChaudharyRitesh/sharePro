import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

interface CommonStore {
  theme: 'light' | 'dark';
  openModal: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  setOpenModal: (openModal: boolean) => void;
}

export const useCommonStore = create<CommonStore>()(
  persist(
    set => ({
      theme: 'light',
      setTheme: (theme: 'light' | 'dark') => set({theme}),
      openModal: false,
      setOpenModal: (openModal: boolean) => set({openModal}),
    }),
    {
      name: 'common-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
