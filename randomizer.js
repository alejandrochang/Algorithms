const teams = [
  '1',
  '3',
  '4',
  '6',
];

const randomIndex = Math.floor(Math.random() * teams.length);
const randomTeam = teams[randomIndex];
console.log({ randomTeam });

// Teams
/*
  1. Matthew + Alejandro
  2. Danny + Peter
  3. Juan + Piers
  4. Mike + Erik
  5. Vikram + Ryan
  6. Frisco + Fermin

  Wild Card: Ball Differential (Closest to winning you move on - 2 teams leave)
  First Place (Ball Differential - Quickest winner)

  Semi-Final
  Final


  Game 1: Vikram + Ryan vs. Danny + Peter
  Game 2: Juan + Piers vs. Frisco + Fermin
  Game 3: Matthew + Alejandro vs. Mike + Erik
*/




