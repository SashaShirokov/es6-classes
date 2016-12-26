var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";

// Load foundation
$(document).foundation();

// App css
require("style!css!sass!applicationStyles")

ReactDOM.render(
  <div>
    <ComponentOne count={25} name={"Aleksandr"}/>
    <ComponentTwo count={50} name={"David"} age={40}/>
	</div>,
	document.getElementById('app')
);
