import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./features/Content/HomePage/HomePage";
import Profile from "./features/Content/Account/Profile";
import Closet from "./features/Content/Account/Closet";
import Portfolio from "./features/Content/Account/Portfolio";
import Settings from "./features/Content/Account/Settings";
import MyCloset from "./features/Content/Account/MyCloset";
import TrackChanges from "./features/Content/Account/TrackChanges";
import SignIn from "./features/Auth/SignIn";
import SignUp from "./features/Auth/SignUp";
import TrendingShoes from "./features/Content/TrendingShoes/TrendingShoes";
import DetailPage from "./features/Content/DetailPage/DetailPage";
import Search from "./features/Content/Search/Search";
import ShoeLink from "./features/Links/ShoeLink";

export default function App() {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/trendingshoes" component={TrendingShoes} />
				<Route exact path="/trendingshoes/:pageNumber" component={TrendingShoes} />
				<Route exact path="/trendingshoes/details/:shoeId" component={DetailPage} />
				<Route exact path="/details/:shoeId" component={DetailPage} />
				<Route exact path="/search/:shoe" component={Search} />
				<Route exact path="/account/profile" component={Profile} />
				<Route exact path="/account/closet" component={Closet} />
				<Route exact path="/account/portfolio" component={Portfolio} />
				<Route exact path="/account/settings" component={Settings} />
				<Route exact path="/:shoeName" component={ShoeLink} />
				<Route exact path="/:shoeName/:pageNumber" component={ShoeLink} />
				<Route exact path="/closet" component={MyCloset} />
				<Route exact path="/trackchanges" component={TrackChanges} />
			</Switch>
		</div>
	);
}
