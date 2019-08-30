import React from "react";
import "./Screen.css";

class Screen extends React.Component {
	render() {
		return (
			<div id="display">
				<span className="clean" onClick={this.props.onClickClean}>
					x
				</span>
				{this.props.displayText}
			</div>
		);
	}
}

export default Screen;
