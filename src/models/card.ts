import { CardDTO } from './../dto/card';

export interface ICardListResponse {
    nhits: number,
    cards: Array<CardDTO>
}