class Person {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  initiate() {
    console.log(`Hello my name is ${this.name} and Im a ${this.type} player`);
  }
}

class NBAPlayer extends Person {
  constructor(name, type) {
    super(name, type);
  }

  sup(){
    console.log(`My name is ${this.name}`)
  }
}

const player1 = new NBAPlayer('Steph Curry', 'NBA PLAYER');
player1.initiate();
player1.sup();