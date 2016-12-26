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
	onClick: function() {
		this.setState({
			count: this.state.count += 10,
			name: this.state.name = "Yonatan"
		});
	},
	render: function() {
		return(
			<div>
				<h2>ComponentOne using React.createClass!</h2>
				<p>Current count: {this.state.count}</p>
				<p>Hello {this.state.name}!!!</p>
				<button className="button" onClick={this.onClick}>Button One</button>
			</div>
		);
	}
});

export default ComponentOne;
