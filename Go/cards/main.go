// Executable type package
package main

import "fmt"

var deckSize int

func main() {
	// var card string = "Ace of spades"
	card := "Ace of Spades"
	card = "Five of Diamonds"
	deckSize := 50
	divisibleNum := 50
	fmt.Println(card)

	var result int = addNumbers(deckSize, deckSize)
	fmt.Println(result)

	var additionRes, multipRes, diviRes = calculateOperations(deckSize, divisibleNum)
	fmt.Println("addition:", additionRes, "multiplication", multipRes, "division", diviRes)
}

func addNumbers(num1 int, num2 int) int {
	return num1 + num2
}

func calculateOperations(num1, num2 int) (int, int, int) {
	return num1 + num2, num1 * num2, num1 / num2
}
