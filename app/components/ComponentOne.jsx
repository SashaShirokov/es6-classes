import React from "react";

var ComponentOne = React.createClass({
	getInitialState: function() {
		return {
			count: this.props.count,
			name: this.props.name
		};
	},
	getDefaultProps: function() {
		return {
			count: 8,
			name: "Anonymous"
		};
	},
	propTypes: {
		count: React.PropTypes.number,
		name: React.PropTypes.string
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
