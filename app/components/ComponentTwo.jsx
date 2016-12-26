import React from "react";

class ComponentTwo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: props.count,
			name: props.name,
			age: props.age
		}
	}
	// onClick() {
	// 	this.setState({
	// 		count: this.state.count += 10,
	// 		name: this.state.name = "Solomon",
	// 		age: this.state.age - 1
	// 	});
	// }
	render() {
		return(
			<div>
				<h2>Create Component Two using React.Component!!!</h2>
				<p>Current count: {this.state.count}</p>
				<p>Hello, my name is {this.state.name} and I am {this.state.age} years old!!!</p>
				<button className="button" onClick={() => {
					this.setState({
						count: this.state.count + 5,
						name: this.state.name = "Solomon",
						age: this.state.age - 1
					});
					}}>Button Two</button>
			</div>
		);
	}
};

ComponentTwo.defaultProps = {
	count: 100,
	name: "Mihail",
	age: 38
}

ComponentTwo.propTypes = {
	count: React.PropTypes.number,
	name: React.PropTypes.string,
	age: React.PropTypes.number
}

export default ComponentTwo;
