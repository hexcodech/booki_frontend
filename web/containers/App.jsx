import React from "react";
import { Provider } from "react-redux";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

//Containers
import OAuthCallback from "web/components/auth/OAuthCallback";
import Wrapper from "web/components/ui/containers/Wrapper";

//Content
import Login from "web/components/pages/Login";

import Home from "web/containers/pages/Home";
import Sell from "web/containers/pages/Sell";
import BookDetail from "web/containers/pages/BookDetail";
import Search from "web/containers/pages/Search";
import Profile from "web/containers/pages/Profile";

import About from "web/components/pages/About";
import Bugtracker from "web/components/pages/Bugtracker";
import Gtc from "web/components/pages/Gtc";
import Faq from "web/components/pages/Faq";

const App = ({ store, history }) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					<Wrapper>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />

						<Route path="/auth/callback" component={OAuthCallback} />

						<Route path="/search/:search" component={Search} />
						<Route path="/book/:bookId" component={BookDetail} />
						<Route path="/sell" component={Sell} />
						<Route path="/profile" component={Profile} />

						<Route path="/about" component={About} />
						<Route path="/bug-tracker" component={Bugtracker} />
						<Route path="/gtc" component={Gtc} />
						<Route path="/faq" component={Faq} />
					</Wrapper>
				</div>
			</ConnectedRouter>
		</Provider>
	);
};

export default App;
