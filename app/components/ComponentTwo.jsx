import React from "react";

class ComponentTwo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 7,
			name: "Misha",
			age: 10
		}
	}
	render() {
		return(
			<div>
				<h2>Create Component Two using React.Component!!!</h2>
				<p>Current count: {this.state.count}</p>
				<p>Hello {this.state.name}!!!</p>
				<p>Hello, my name is {this.state.name} and I am {this.state.age} years old!!!</p>
			</div>
		);
	}
};

export default ComponentTwo;
