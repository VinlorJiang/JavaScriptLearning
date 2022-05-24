// every
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.every(function (s) {
	// body...
	return s.length > 0
}))

console.log(arr.every(function (s) {
	// body...
	return s.toLowerCase() === s;
}))

// find
console.log(arr.find(function (s) {
	console.log(s)
	return s.toLowerCase() === s; 
}))

console.log(arr.find(function (s) {
	// body...
	return s.toUpperCase() === s
}))

// findIndex
console.log(arr.findIndex(function (s) {	
	// body...
	return s.toLowerCase() === s;
}))
console.log(arr.findIndex(function(s) {
	return s.toUpperCase() === s;
}))

//forEach
arr.forEach(console.log)



















