class Person {
	constructor(name = "Anonymous", age = 30) {
    this.name = name;
		this.age = age;
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

class Child extends Person {
	constructor(name, age, like = "Icecream") {
		super(name, age);
		this.like = like;
	}
	getGreeting() {
		return `Hello World! my name is ${this.name} and I like to play ${this.like}`;
	}
}

class Kids extends Person {
	constructor(name, age, hobby) {
		super(name, age);
		this.hobby = hobby;
	}
	getGreeting() {
		return `Hello folk. My name is ${this.name}, I am ${this.age} and I like to ${this.hobby}!!!`;
	}
}

var kid = new Kids("Sonya", 8, "read books")
var me = new Person("Sasha", 38);
var he = new Child("Misha", 10, "chess");
console.log(me.getGreeting());
console.log(he.getGreeting());
console.log(kid.getGreeting());
