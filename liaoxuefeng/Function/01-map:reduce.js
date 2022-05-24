x = -5;
y = 6;
f = Math.abs;
// f(x) + f(y) ==> Math.abs(-5) + Math.abs(6) ==> 11;
// console.log(f(x) + f(y))
function add(x, y, f) {
	return f(x) + f(y)
}
var x1 = add(x, y, f)
// console.log(x1) 

// map
function pow(x) {
	return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow);
console.log(results);
console.log(arr.map(String));

//reduce
var arr2 = [1, 3, 5, 7, 9];
var sum = arr2.reduce(function(x, y) {
	return x + y;
});
// console.log(sum);

function product(arrQua) {
	return arrQua.reduce((x, y) => x*y)
};
console.log(product([99, 88, 77, 66]));

var i = arr2.reduce(function(x, y) {
	return x * 10 + y;
});
// console.log(i);

var char = '13579'
function stringToInt(s) {
	var tempArr = [];
	for (var c of s) {
		tempArr.push(c)
	}
	return tempArr.reduce(function(x,y) {
		console.log(x*1 + y)
		return x*1 + y
	});
	// return tempArr.map(c => (c*1)).reduce((x, y) => (x*10 + y))
}
console.log(stringToInt(char))

function normalize(arrStr) {
	return arrStr.map(name => name[0].toUpperCase() + name.substring(1).toLowerCase());
}
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
	console.log('测试通过!')
} else {
	console.log('测试不通过!')
}

var arr3 = ['1', '2', '3'];
var r = arr3.map(c => parseInt(c))
console.log(r)




















