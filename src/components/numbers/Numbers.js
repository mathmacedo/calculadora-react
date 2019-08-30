import React from "react";
import "./Numbers.css";

class Numbers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buttons: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]
		};
	}

	createButtonsElements = () => {
		var buttonElements = [];
		for (var i = 0; i < this.state.buttons; i++) {
			buttonElements.push();
		}
	};

	render() {
		return <div></div>;
	}
}

export default Numbers;
