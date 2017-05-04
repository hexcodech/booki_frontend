import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import Loader from "halogen/PulseLoader";

import CSSModules from "react-css-modules";
import styles from "./SellStep.scss";

class SellStep extends React.Component {
	render() {
		let { step, children, loading } = this.props;

		return (
			<div styleName="sell-step">
				<h1>Buch erfassen</h1>

				{children}

				<button
					disabled={!this.props.nextEnabled}
					styleName="next"
					className="btn btn-primary"
					onClick={this.props.onNextStep}
				>
					{loading && <Loader styleName="spinner" color="#FFF" size="10px" />}
					Weiter
				</button>

			</div>
		);
	}
}

export default CSSModules(SellStep, styles);
