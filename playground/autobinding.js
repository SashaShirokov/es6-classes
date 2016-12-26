var primer = {
	name: "Sasha",
	printName: function() {
		console.log(`My name is ${this.name}.`);
	}
};

primer.printName();
setTimeout(primer.printName.bind({name: "Mike"}), 3000);
