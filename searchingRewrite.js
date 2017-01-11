const stocks = (ary, max = 0, start = 0) => {
	let profit = max;

	if (ary.length === 0) {
		return profit;
	}

	for (let i = 0; i < ary.length; i++) {
		if ((ary[i] - ary[0]) > profit) {
			profit = ary[i] - ary[0];
		}
	}

	return stocks(ary.slice(start++), profit, start++);
}

console.log(stocks([128, 97, 121, 123, 98, 97, 105]));
