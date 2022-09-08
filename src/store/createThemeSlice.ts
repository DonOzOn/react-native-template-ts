

import { StateCreator } from 'zustand';

export interface IThemeSlice {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const createThemeSlice: StateCreator<IThemeSlice> = set => ({
  isDarkMode: true,
  toggleTheme: () => { 
    set(state => ({ isDarkMode: !state.isDarkMode }));
  },
});