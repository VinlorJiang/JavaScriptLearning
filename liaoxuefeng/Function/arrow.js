function fib(max) {
	// body...
	var t,
		a = 0,
		b = 1,
		arr = [0 , 1];
	while (arr.length < max) {
		[a, b] = [b, a + b];
		console.log("a: "+a)
		console.log("b: "+b)
		arr.push(b);
	}
	return arr;
}
// console.log(fib(5))

function* fib2(max) {
	// body...
	var 
		t,
		a = 0,
		b = 1,
		n = 0;
	while (n < max) {
		yield a;
		[a, b] = [b, a + b];
		n ++;
	}
	return;
}
for (var x of fib2(5)) {
	// console.log(x);
}

function* next_id() {
	var n = 0;
	while(n < 100) {
		yield n;
		n ++
	}
	return;
}

