import { getCardList } from '../modules/home/api/index';
import { CardDTO } from '../dto/card';
import { StateCreator } from 'zustand';

export interface ICardSlice {
  cardList: Array<CardDTO>;
  getCards: () => void;
}

export const createCardSlice: StateCreator<ICardSlice> = (set) => ({
  cardList: [],
  getCards: async () => {
    const listCard = await getCardList();
    console.log('listCard', listCard)
    set({ cardList: [...listCard?.cards] })
  },
});


