// Build conect four game via class


class ConnectFour {
  constructor({ row, col }) {
    this.board = Array(row).fill('.').map(() => Array(col).fill('.'));
    this.player = 'A'; // 'A' | 'B'
    this.row = row - 1;
    this.col = col - 1;
  }

  switchPlayer() {
    if (this.player === 'A') {
      this.player = 'B';
    } else {
      this.player === 'A'
    }
  }

  play(colIdx){
    this.board[this.row][colIdx] = this.player;
    // handle same column index scenario

    this.switchPlayer();
  }

  print(){
    console.log(JSON.stringify(this.board, null));
    console.log(`Its ${this.player}'s turn`);
  }
}

const game = new ConnectFour({ row: 6, col: 7 });
game.play(4);
game.play(3);
game.play(5);
game.print();


// Adding a Piece
// Adding a Piece in same Column
// Checking if Player has won

// Board Game:
// [
//   ['.', '.', '.','.', '.', '.','.'],
//   ['.', '.', '.','.', '.', '.','.'],
//   ['.', '.', '.','.', '.', '.','.'],
//   ['.', '.', '.','.', '.', '.','.'],
//   ['.', '.', '.','.', '.', '.','.'],
//   ['.', '.', '.','.', '.', '.','.']
// ];