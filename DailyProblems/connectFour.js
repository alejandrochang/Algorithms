// Build conect four game via class


class ConnectFour {
  constructor({ row, col }) {
    this.board = Array(row).fill('.').map(() => Array(col).fill('.'));
  }

  play(){}
  print(){
    console.log('print', this.board);
  }
}

const game = new ConnectFour({ row: 6, col: 7 });
game.print();

// Board Game:
// [
//   ['.', '.', '.','.', '.', '.','.'],
//   ['.', '.', '.','.', '.', '.','.'],
//   ['.', '.', '.','.', '.', '.','.'],
//   ['.', '.', '.','.', '.', '.','.'],
//   ['.', '.', '.','.', '.', '.','.'],
//   ['.', '.', '.','.', '.', '.','.']
// ];