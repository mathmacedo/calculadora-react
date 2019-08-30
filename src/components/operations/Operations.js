import React from "react";
import "./Operations.css";

import Button from "../button/Button";

class Operations extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buttons: ["+", "-", "/", "x"]
		};
	}

	createButtonsElements = () => {
		var buttonElements = [];
		for (var i = 0; i < this.state.buttons.length; i++) {
			buttonElements.push(
				<Button
					label={this.state.buttons[i]}
					onClick={this.props.onClick}
				/>
			);
		}

		return buttonElements;
	};

	render() {
		return <div id="operations">{this.createButtonsElements()}</div>;
	}
}

export default Operations;
