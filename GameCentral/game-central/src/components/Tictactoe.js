import { useState } from 'react';
import '../App.css';

const board = [];

let temp = [];
for (let i = 1; i < 10; i++) {

  if (temp.length === 3) {
    board.push(temp);
    temp = [];
  }

  temp.push(null);
}

if (temp) board.push(temp);

const TicTacToe = () => {
  const [boardState, setBoard] = useState(board);
  const [currPlayer, setCurrPlayer] = useState('player1');

  const handlePlayerChange = () => {
    if (currPlayer === 'player1') {
      setCurrPlayer('player2');
    } else {
      setCurrPlayer('player1');
    }
  }

  const handlePositionChange = () => {};
  // console.log({ board });
  const Square = ({ r }) => <div className="toe-row">{r.map((c) => <div className="toe-cell">{c}</div>)}</div>
  return (
    <>
      <div className='toe-container'>
        <div className='toe-title'>
          <h4>Tic Tac Toe</h4>
        </div>
        <div className='board-container'>
          {boardState.map((row) => {
            return <Square r={row} />
          })}
        </div>
        <div className='footer'>
          <span>Current {currPlayer} turn</span>
        </div>
      </div>
    </>
  )
}

export default TicTacToe;