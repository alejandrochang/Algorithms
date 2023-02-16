// Executable type package
package main

import "fmt"

func main() {
	// printState()
	card := newCard()

	fmt.Println(card)
}

type CardDetail struct {
	number   int
	cardType string
}

type Cards struct {
	CardDetail CardDetail
}

func newCard() string {
	return "Five of Diamonds"
}

// Testing different functions
// func test() {
// 	// var card string = "Ace of spades"
// 	card := "Ace of Spades"
// 	card = "Five of Diamonds"
// 	var deckSize int = 50
// 	divisibleNum := 50
// 	fmt.Println(card)

// 	var result int = addNumbers(deckSize, deckSize)
// 	fmt.Println(result)

// 	var additionRes, multipRes, diviRes = calculateOperations(deckSize, divisibleNum)
// 	fmt.Println("addition:", additionRes, "multiplication", multipRes, "division", diviRes)
// }

// func addNumbers(num1 int, num2 int) int {
// 	return num1 + num2
// }

// func calculateOperations(num1, num2 int) (int, int, int) {
// 	return num1 + num2, num1 * num2, num1 / num2
// }
