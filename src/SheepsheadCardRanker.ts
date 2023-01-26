import { Card, CardValue, Suit } from "./Card.js";
import type { CardRanker } from "./ICardRanker.js";

export class SheepsheadCardRanker implements CardRanker {
	/**
	 * Finds the card that wins among the given cards
	 *
	 * @param cards The list of cards to compare
	 * @returns A reference to the card that "won" the comparison
	 */
	compareCards(cards: Card[]): Card {
		const cardsWithRanks = [];
		for (const c of cards) {
			cardsWithRanks.push({
				card: c,
				rank: this.getCardRank(c, { currentSuit: Suit.HEARTS })
			});
		}

		// Card with the lowest rank value wins
		cardsWithRanks.sort((cr1, cr2) => {
			if (cr1.rank > cr2.rank) return 1;
			else if (cr1.rank < cr2.rank) return -1;
			return 0;
		});

		return cardsWithRanks[0].card;
	}

	getCardRank(card: Card, extraCriteria: { currentSuit: Suit }): number {
		const suit = card.suit;
		const value = card.value;
		let rank = 1000;
		switch (true) {
			case value === CardValue.QUEEN && suit === Suit.CLUBS:
				return 0;
			case value === CardValue.QUEEN && suit === Suit.SPADES:
				return 1;
			case value === CardValue.QUEEN && suit === Suit.HEARTS:
				return 2;
			case value === CardValue.QUEEN && suit === Suit.DIAMONDS:
				return 3;
			case value === CardValue.JACK && suit === Suit.CLUBS:
				return 4;
			case value === CardValue.JACK && suit === Suit.SPADES:
				return 5;
			case value === CardValue.JACK && suit === Suit.HEARTS:
				return 6;
			case value === CardValue.JACK && suit === Suit.DIAMONDS:
				return 7;
			case value === CardValue.ACE && suit === Suit.DIAMONDS:
				return 8;
			case value === CardValue.TEN && suit === Suit.DIAMONDS:
				return 9;
			case value === CardValue.KING && suit === Suit.DIAMONDS:
				return 10;
			case value === CardValue.NINE && suit === Suit.DIAMONDS:
				return 11;
			case value === CardValue.EIGHT && suit === Suit.DIAMONDS:
				return 12;
			case value === CardValue.SEVEN && suit === Suit.DIAMONDS:
				return 13;

			// Handle the non-trump suits
			case value === CardValue.ACE:
				rank = 14;
				break;
			case value === CardValue.TEN:
				rank = 15;
				break;
			case value === CardValue.KING:
				rank = 16;
				break;
			case value === CardValue.NINE:
				rank = 17;
				break;
			case value === CardValue.EIGHT:
				rank = 18;
				break;
			case value === CardValue.SEVEN:
				rank = 19;
				break;
		}
		// Add 100 points if the card is off-suit (trump returns early)
		if (suit !== extraCriteria.currentSuit) rank += 100;
		return rank;
	}
}
