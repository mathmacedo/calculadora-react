import React from "react";
import "./Numbers.css";

import Button from "../button/Button";

class Numbers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buttons: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]
		};
	}

	createButtonsElements = () => {
		var buttonElements = [];
		for (var i = 0; i < this.state.buttons.length; i++) {
			buttonElements.push(
				<Button
					key={"button" + [i]}
					label={this.state.buttons[i]}
					onClick={this.props.onClick}
				/>
			);
		}

		return buttonElements;
	};

	render() {
		return (
			<div id="numbers">
				{this.createButtonsElements()}
				<Button
					label="="
					onClick={this.props.onClickTotal}
					className="greenBtn"
				/>
			</div>
		);
	}
}

export default Numbers;
