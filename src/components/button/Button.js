import React from "react";
import "./Button.css";

class Button extends React.Component {
	render() {
		var classes = ["defaultButton"];
		classes.push(this.props.className);
		return (
			<button
				type="button"
				className={classes.join(" ")}
				onClick={e => this.props.onClick(e, this.props.label)}
			>
				{this.props.label}
			</button>
		);
	}
}

export default Button;
