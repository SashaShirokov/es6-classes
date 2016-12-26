class Person {
	constructor(name = "Anonymous", age = 30) {
    this.name = name;
		this.age = age
	}
	getGreeting() {
		return `Hi I am ${this.name} and I am ${this.age}`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old!`;
	}
	toString() {

		return this.getGreeting();
	}
};

var me = new Person("Sasha", 38);
var he = new Person();
console.log(me.getDescription());
console.log(he.getDescription());
