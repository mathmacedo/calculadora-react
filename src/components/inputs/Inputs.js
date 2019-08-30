import React from "react";
import "./Inputs.css";
import Numbers from "../numbers/Numbers";

class Inputs extends React.Component {
	render() {
		return (
			<div id="inputs">
				<Numbers
					onClick={this.props.onClickOperando}
					onClickTotal={this.props.onClickOperador}
				/>
				<Operations onClick={this.props.onClickOperador} />
			</div>
		);
	}
}

export default Inputs;
