// function one(name, location) {
//   console.log(name, location);
// }
//
// function two() {
// 	console.log("Args", arguments);
// 	one.apply(undefined, arguments)
// }
//
// two("Sasha", "Minsk");
// two.apply(undefined, ["Misha", "Starobin"]);

var add = (a, b) => a + b;
var square = (a) => a * a;

var callAndLog = (func) => {
	return function () {
		var res = func.apply(undefined, arguments);
		console.log("Result is " + res);
		return res;
	}
};
console.log(add(5, 8));

var addAndLog = callAndLog(add);
console.log(addAndLog(10, 40));

var squareAndLog = callAndLog(square);
console.log(squareAndLog(9));
squareAndLog(7);
