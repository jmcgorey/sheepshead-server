import { Card, Suit } from "./Card.js";

export interface CardRanker {
	getCardRank(card: Card, extraCriteria: Record<string, any>): number;
	compareCards(cards: Card[]): Card;
}
