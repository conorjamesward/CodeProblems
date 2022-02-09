for (i = 0; i <= 100; i++) {
	console.log((i % 5 ? "" : "Buzz") + (i % 3 ? "" : "Fizz") || i);
}