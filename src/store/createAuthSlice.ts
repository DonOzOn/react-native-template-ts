import { StateCreator } from 'zustand';

export interface IAuthSlice {
  token: string; // don't keep in AsyncStorage
  setToken: (token: string) => void;
}

export const createAuthSlice: StateCreator<IAuthSlice> = (set) => ({
  token: '',
  setToken: (token: string) => {
    set({ token: token })
  },
});


