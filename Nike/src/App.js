import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from './features/Content/HomePage';
import MyAccount from './features/Content/Account/MyAccount'
import MyCloset from './features/Content/Account/MyCloset'
import TrackChanges from './features/Content/Account/TrackChanges'
import SearchRes from './features/Content/Search/SearchRes';
import SignIn from './features/Auth/SignIn';
import SignUp from './features/Auth/SignUp';
import TrendingShoes from './features/Content/TrendingShoes';
import DetailPage from './features/Content/DetailPage'


export default function App() {
    
    return (
        <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/trendingshoes' component={TrendingShoes} />
        <Route exact path='/trendingshoes/details/:shoeId' component={DetailPage} />
        <Route path='/account' component={MyAccount} />
        <Route path='/closet' component={MyCloset} />
        <Route path='/trackchanges' component={TrackChanges} />
        <Route path='/search' component={SearchRes} />
        </div>
    )
};