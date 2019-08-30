import React from "react";
import "./App.css";

import Screen from "./components/screen/Screen";
import Inputs from "./components/inputs/Inputs";
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			operando: "",
			operador: "",
			display: "0",
			resultDisplayed: false
		};
	}

	onClickOperando = (e, label) => {
		var display;
		if (
			this.state.display === "0" ||
			isNaN(this.state.display) ||
			this.state.resultDisplayed
		) {
			display = label;
			this.setState({ resultDisplayed: false });
		} else {
			display = this.state.display + label;
		}

		this.setState({ display: display });
	};

	onClickOperador = (e, label) => {
		if (this.state.operador.length > 0) {
			this.calculate();
			if (label === "=") {
				this.setState({
					resultDisplayed: true,
					operador: ""
				});
			} else {
				this.setState({
					resultDisplayed: true,
					operador: label
				});
			}
		} else {
			this.setState({
				operando: this.state.display,
				operador: label,
				display: label
			});
		}
	};

	onClickClean = () => {
		var state = {
			operando: "",
			operador: "",
			display: "0",
			resultDisplayed: false
		};
		this.setState(state);
	};

	calculate = () => {
		var displayResult;
		switch (this.state.operador) {
			case "+":
				displayResult =
					parseFloat(this.state.operando) +
					parseFloat(this.state.display);
				break;
			case "-":
				displayResult =
					parseFloat(this.state.operando) -
					parseFloat(this.state.display);
				break;
			case "/":
				displayResult =
					parseFloat(this.state.operando) /
					parseFloat(this.state.display);
				break;
			case "x":
				displayResult =
					parseFloat(this.state.operando) *
					parseFloat(this.state.display);
				break;
			case "%":
				displayResult =
					(parseFloat(this.state.operando) *
						parseFloat(this.state.display)) /
					100;
				break;
			case "x2":
				displayResult =
					parseFloat(this.state.operando) *
					parseFloat(this.state.operando);
				break;
			case "V":
				displayResult = Math.sqrt(parseFloat(this.state.operando));
				break;
			default:
				displayResult = "Digite algo";
				break;
		}
		this.setState({
			operando: displayResult,
			display: displayResult
		});
	};

	render() {
		return (
			<div id="container">
				<Screen
					displayText={this.state.display}
					onClickClean={this.onClickClean}
				/>
				<Inputs
					onClickOperando={this.onClickOperando}
					onClickOperador={this.onClickOperador}
				/>
			</div>
		);
	}
}

export default App;
