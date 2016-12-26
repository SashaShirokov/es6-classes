import React from "react";

var ComponentOne = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			name: "Aleksandr"
		};
	},
	render: function() {
		return(
			<div>
				<h2>ComponentOne using React.createClass!</h2>
				<p>Current count: {this.state.count}</p>
				<p>Hello {this.state.name}!!!</p>
			</div>
		);
	}
});

export default ComponentOne;
