var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
	// body...
	if (x < y) {
		return -1;
	}
	if (x > y) {return 1;}
	return 0;
})
console.log(arr);

var arr2 = ['Google', 'apple', 'Microsoft'];
arr2.sort(function(s1, s2) {
	x1 = s1.toUpperCase();
	x2 = s2.toUpperCase();
	if (x1 < x2) {return -1}
	if (x1 > x2) {return 1}
	return 0;
})
console.log(arr2)