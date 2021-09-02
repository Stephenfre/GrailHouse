import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./features/Content/HomePage/HomePage";
import Profile from "./features/Content/Account/Profile";
import Closet from "./features/Content/Account/Closet";
import Portfolio from "./features/Content/Account/Portfolio";
import Settings from "./features/Content/Account/Settings";
//  import from "./features/Content/Account/TrackChanges";
import SignIn from "./features/Auth/SignIn";
import SignUp from "./features/Auth/SignUp";
import TrendingShoes from "./features/Content/TrendingShoes/TrendingShoes";
import Details from "./features/Content/DetailPage/Details";
import Search from "./features/Content/Search/Search";
import ShoeLink from "./features/Nav/Links/ShoeLink";
import OurStory from "./features/Content/OurStory/OurStory";

export default function App() {
    return (
        // <Suspense fallback={<div>Loading...</div>}>
        <div className="app">
            <div className="main-container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/account/profile" component={Profile} />
                    <Route exact path="/account/closet" component={Closet} />
                    <Route exact path="/account/closet/details/:id/:styleId" component={Details} />
                    <Route exact path="/account/portfolio" component={Portfolio} />
                    <Route exact path="/ourstory" component={OurStory} />
                    <Route exact path="/trendingshoes" component={TrendingShoes} />
                    <Route exact path="/trendingshoes/:pageNumber" component={TrendingShoes} />
                    <Route exact path="/trendingshoes/details/:id/:styleId" component={Details} />
                    <Route exact path="/details/:id/:styleId" component={Details} />
                    <Route exact path="/search/:shoe" component={Search} />
                    <Route exact path="/search/:shoe/:pagenumber" component={Search} />
                    <Route exact path="/search/details/:id/:styleId" component={Details} />
                    <Route exact path="/account/settings" component={Settings} />
                    <Route exact path="/:shoeName" component={ShoeLink} />
                    <Route exact path="/:shoeName/:pageNumber" component={ShoeLink} />
                    {/* <Route exact path="/trackchanges" component={TrackChanges} /> */}
                </Switch>
            </div>
        </div>
        // </Suspense>
    );
}
