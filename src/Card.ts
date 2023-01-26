export enum Suit {
	CLUBS = "CLUBS",
	DIAMONDS = "DIAMONDS",
	HEARTS = "HEARTS",
	SPADES = "SPADES"
}
export enum CardValue {
	TWO = 2,
	THREE = 3,
	FOUR = 4,
	FIVE = 5,
	SIX = 6,
	SEVEN = 7,
	EIGHT = 8,
	NINE = 9,
	TEN = 10,
	JACK = 11,
	QUEEN = 12,
	KING = 13,
	ACE = 14
}

export class Card {
	suit: Suit;
	value: CardValue;

	constructor(suit: Suit, value: CardValue) {
		this.suit = suit;
		this.value = value;
	}

	print() {
		let printVal;
		switch (this.value) {
			case CardValue.ACE:
				printVal = "Ace";
				break;
			case CardValue.KING:
				printVal = "King";
				break;
			case CardValue.QUEEN:
				printVal = "Queen";
				break;
			case CardValue.JACK:
				printVal = "Jack";
				break;
			default:
				printVal = this.value;
		}
		console.log(`Card - Suit: ${this.suit} - Value: ${printVal}`);
	}
}
