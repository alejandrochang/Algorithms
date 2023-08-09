import { useState } from "react";
import '../App.css';

// Create a four card system of 4 suits


const cards = [];
const suits = ['♤','♢','♧','♥'];
const faceCards = {
  0: 'A',
  11: 'J',
  12: 'Q',
  13: 'K'
};

for (let suit of suits) {
  for (let i = 0; i < 13; i++) {
    cards.push({ num: faceCards[i] || i, suit });
  }
}

const Poker = () => {
  // Shuffle logic - bubble sort type
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[rand]] = [arr[rand], arr[i]];
    }

    return arr;
  }
  const [deck, setDeck] = useState(shuffle(cards));
  const [activeCards, setActiveCards] = useState(deck.slice(0,4));

  console.log({ deck, activeCards });
  const Card = ({ card }) => <div className="card">{`${card.suit} ${card.num}`}</div>
  return (
    <div className="poker-container">
      {activeCards.map((card) => {
        return <Card card={card} />
      })}
    </div>
  )
}

export default Poker;
