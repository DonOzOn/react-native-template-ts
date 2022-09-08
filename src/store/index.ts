import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { GetState, SetState, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';
import { createAuthSlice, IAuthSlice } from './createAuthSlice';
import { createThemeSlice, IThemeSlice } from './createThemeSlice';
import { createCardSlice, ICardSlice } from './createCardSlice';


interface IStore extends IAuthSlice, IThemeSlice,ICardSlice {}

/**
 * Make sure to enforce type for each slice
 */

export const useStore = create<IStore>(
  persist(
    (set, get, api) => ({
      ...createAuthSlice(
        set as unknown as SetState<IAuthSlice>,
        get as GetState<IAuthSlice>,
        api as unknown as StoreApi<IAuthSlice>,
      ),
      ...createThemeSlice(
        set as unknown as SetState<IThemeSlice>,
        get as GetState<IThemeSlice>,
        api as unknown as StoreApi<IThemeSlice>,
      ),
      ...createCardSlice(
        set as unknown as SetState<ICardSlice>,
        get as GetState<ICardSlice>,
        api as unknown as StoreApi<ICardSlice>,
      )
    }),
    {
      name: 'app-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);