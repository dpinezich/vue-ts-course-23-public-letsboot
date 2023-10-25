// program to shuffle the deck of cards

// declare card elements
const suits: string[] = ["Spades", "Diamonds", "Club", "Heart"];
const values: string[] = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
];

interface cardType {
    Value: string,
    Suit: string
}

// empty array to contain cards
let deck: cardType[] = [];


// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card: cardType = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j: number = Math.floor(Math.random() * i);
    let temp: cardType = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log('The first five cards are:');

// display 5 results
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}
