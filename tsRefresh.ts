// Interace: Used to describe the shape of objects, 
// can be extended by others

// Enums: constants
// boolean, number, string, bigint, number
// explicity/implicit
// readonly - only meant to be read



// const printHello = (): void => {
//   console.log('hello');
// }

// function multiply(a: number, b: number): number {
//   return a * b;
// };

// const result = multiply(5, 10);

// let firstName: string = 'Alejandro';

// type Car = {
//   type: string,
//   model: string,
//   year: number,
// }


// An enum is a special "class" that represents a group of constants (unchangeable variables).
const car: {
  type: string,
  model: string,
  year: number,
} = {
  type: 'Toyota',
  model: 'Corolla',
  year: 2012,
}