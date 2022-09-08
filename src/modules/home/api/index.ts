import { apiService } from './../../../services/index';
import { GET_CARDS } from './../../../utils/api-constant';
import { ICardListResponse } from './../../../models/card';



export const getCardList = (): Promise<ICardListResponse> => {
  return apiService.get(GET_CARDS);
};

