function lazy_sum(arr) {
	var sum = function () {
		return arr.reduce(function(x, y) {
			return x + y;
		});
	}
	return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]);
console.log(f());

function count() {
	// body...
	var arr = [];
	for (var i = 1; i <= 3; i++) {
		arr.push(function () {
			// body...
			return i * i;
		});
	}
	return arr;
}
var results = count()
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1())
console.log(f2())
