import { useEffect, useState } from "react";
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
    for (let i = arr.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[rand]] = [arr[rand], arr[i]];
    }

    return arr;
  }
  const [deck, setDeck] = useState(shuffle(cards));

  const handleNextCards = () => {
    const newDeck = deck.splice(4);
    setDeck(newDeck);
  }

  const handleCardReset = () => {
    const newDeck = shuffle(cards);
    setDeck(newDeck);
  }

  const Card = ({ card }) => <div className="card">{`${card.suit} ${card.num}`}</div>
  return (
    <div className="poker-container">
      <div className="card-container">
          {deck.slice(0,4).map((card, idx) => {
            return <Card key={idx} card={card} />
          })}
      </div>
      <div>
        <button onClick={handleNextCards}>Shuffle</button>
        {deck.length === 0 && <button onClick={handleCardReset}>Reset</button>}
      </div>
    </div>
  )
}

export default Poker;
