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
  const [currPlayer, setCurrPlayer] = useState({ name: 'player1', move: 'X'});
  const [hasWon, setHasWon] = useState(false);

  const handleWon = () => {
    // handle win logic (checkRow, checkCol, checkDiagnol)
    const checkWon = (list) => {
      if (list.every(el => el === 'X')) setHasWon(true);
      if (list.every(el => el === 'O')) setHasWon(true);
    }

    let columns = [[],[],[]];
    let z = 0;
    for (let i = 0; i < boardState.length; i++) {
      // check row
      checkWon(boardState[i]);
      for (let j = 0; j < boardState[0].length; j++) {
        let col = boardState[j][i];
        if (columns[z].length < 3) {
          columns[z].push(col);
        } else {
          z++;
          columns[z].push(col);
        }
      }
    }

    columns.map((row) => checkWon(row));
  }

  const handlePlayerChange = () => {
    if (currPlayer.name === 'player1') {
      setCurrPlayer({ name: 'player2', move: 'O'});
    } else {
      setCurrPlayer({ name: 'player1', move: 'X'});
    }
  }


  const handlePositionMark = (r, c) => {
    boardState[r][c] = currPlayer.move;
    setBoard(boardState);
    const won = handleWon();
    console.log('plop', won);
    handlePlayerChange(currPlayer);
  };

  const Square = ({ r, rI }) => <div className="toe-row">{r.map((c, cI) => <div onClick={() => handlePositionMark(rI,cI)} className="toe-cell">{c}</div>)}</div>
  return (
    <>
      <div className='toe-container'>
        <div className='toe-title'>
          <h4>Tic Tac Toe</h4>
        </div>
        {hasWon && <div>Congrats you won!</div>}
        <div className='board-container'>
          {boardState.map((row, rI) => {
            return <Square r={row} rI={rI} />
          })}
        </div>
        <div className='footer'>
          <span>Current {currPlayer.name} turn</span>
        </div>
      </div>
    </>
  )
}

export default TicTacToe;