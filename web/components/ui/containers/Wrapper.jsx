import React from "react";

import DevTools from "web/components/dev/DevTools";

import Header from "web/components/ui/navigation/Header";
import Footer from "web/components/ui/Footer";
import Notifications from "web/containers/Notifications";

import CSSModules from "react-css-modules";
import styles from "./Wrapper.scss";

const Wrapper = ({ children }) => {
	return (
		<div id="outer-container">
			<div styleName="border-wrapper">
				<Header />
				<div styleName="content" id="page-wrap">
					{children}
				</div>
			</div>
			<Footer />
			<Notifications />
			<DevTools />
		</div>
	);
};

export default CSSModules(Wrapper, styles);
