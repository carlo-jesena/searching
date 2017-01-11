// Given a number N, guess N without guessing higher than N more than once.
// Basically: binary search until you guess over, then linear search
// Split in half, if higher, linear search up to halfway point
// If lower, split in half again (etc.)

// 80
// 50 > 75 > 87
// 75 - 100

const findNum = (num, currentValue, start = 1, end = 100) => {

	if (currentValue < num) {

	} else {
		// linear search
	}

}

// Write an algorithm for finding a book using Dewey decimal system
// One section
// One shelf
// 1 of each number
// Cruel friend asks you to find the book she's guessing
// You create an algorithm to find the damn book


const stocks = (ary, max = 0, start = 0) => {
	let profit = max;

	if (ary.length === 0) return profit;

	for (val of ary) {
		if ((val - ary[0]) > profit) {
			profit = val - ary[0];
		}
	}

	return stocks(ary.slice(start++), profit, start++);
}

console.log(stocks([128, 97, 121, 123, 98, 97, 105]));
