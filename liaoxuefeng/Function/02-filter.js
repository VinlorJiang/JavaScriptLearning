var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function(x) {
	return x % 2 == 0;
});
console.log(r)

var arr1 = ['A', '', 'B', null, undefined, 'C', ' '];
var f1 = arr1.filter(function(s) {
	return s && s.trim();
})
console.log(f1);

var arr2 = ['A','B',"C"];
var f2 = arr2.filter(function(element, index, self) {
	// console.log(element)
	// console.log(index)
	// console.log(self)
	return true;
})
// console.log(f2)

var r3,
	arr3 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'strawberry'];
r3 = arr3.filter(function(element, index, self) {
	return self.indexOf(element) == index;
}); 
console.log(r3.toString());

function get_primes(arr) {
	return arr.filter(x => {
		if(x ==1) return false;
		let result = true;
		let halfNum = x / 2;
		for (var i = 2; i <= halfNum; i++) {
			if(x % i == 0) {
				result = false;
				break;
			}
		}
		console.log(result)
		return result;
	})
}

var x4,
	r4,
	arr4 = [];
for (var i = 0; i < 100; i++) {
	arr4.push(i);
}
r4 = get_primes(arr4);
if (r4.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
	console.log('测试通过！')
} else {
	console.log('测试不通过！')
}
















