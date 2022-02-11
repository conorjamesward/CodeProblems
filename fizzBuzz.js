const fizzBuzz = (n) => {
	let range = Array.from({length: n + 1}, (_, i) => i)
	range.shift()
	return range.map(n => (n % 3 ? "" : "Fizz") + (n % 5 ? "" : "Buzz") || `${n}`)
}

console.log(fizzBuzz(8))