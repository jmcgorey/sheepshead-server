import { SheepsheadCardRanker } from "./SheepsheadCardRanker.js";
import { Card, Suit, CardValue } from "./Card.js";

function main() {
	const card1 = new Card(Suit.HEARTS, CardValue.QUEEN);
	const card2 = new Card(Suit.CLUBS, CardValue.QUEEN);

	let ranker = new SheepsheadCardRanker();
	let winner = ranker.compareCards([card1, card2]);

	winner.print();
}

main();
