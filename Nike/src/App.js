import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = React.lazy(() => import("./features/Content/HomePage/HomePage"));
const Profile = React.lazy(() => import("./features/Content/Account/Profile"));
const Closet = React.lazy(() => import("./features/Content/Account/Closet"));
const Portfolio = React.lazy(() => import("./features/Content/Account/Portfolio"));
const Settings = React.lazy(() => import("./features/Content/Account/Settings"));
const TrackChanges = React.lazy(() => import("./features/Content/Account/TrackChanges"));
const SignIn = React.lazy(() => import("./features/Auth/SignIn"));
const SignUp = React.lazy(() => import("./features/Auth/SignUp"));
const TrendingShoes = React.lazy(() => import("./features/Content/TrendingShoes/TrendingShoes"));
const Details = React.lazy(() => import("./features/Content/DetailPage/Details"));
const Search = React.lazy(() => import("./features/Content/Search/Search"));
const ShoeLink = React.lazy(() => import("./features/Nav/Links/ShoeLink"));

export default function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="app">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/trendingshoes" component={TrendingShoes} />
					<Route exact path="/trendingshoes/:pageNumber" component={TrendingShoes} />
					<Route exact path="/trendingshoes/details/:id/:styleId" component={Details} />
					<Route exact path="/details/id/:styleId/prices" component={Details} />
					<Route exact path="/search/:shoe" component={Search} />
					<Route exact path="/search/:shoe/:pagenumber" component={Search} />
					<Route exact path="/account/profile" component={Profile} />
					<Route exact path="/account/closet" component={Closet} />
					<Route exact path="/account/portfolio" component={Portfolio} />
					<Route exact path="/account/settings" component={Settings} />
					<Route exact path="/:shoeName" component={ShoeLink} />
					<Route exact path="/:shoeName/:pageNumber" component={ShoeLink} />
					<Route exact path="/trackchanges" component={TrackChanges} />
				</Switch>
			</div>
		</Suspense>
	);
}
