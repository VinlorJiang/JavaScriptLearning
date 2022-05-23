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