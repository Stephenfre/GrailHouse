import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home';
import AllTrending from './features/Content/AllTrending';
import MyAccount from './features/Content/Account/MyAccount'
import MyCloset from './features/Content/Account/MyCloset'
import TrackChanges from './features/Content/Account/TrackChanges'
import SearchRes from './features/Content/Search/SearchRes';
import SignIn from './features/Auth/SignIn';
import SignUp from './features/Auth/SignUp';


export default function App() {
    
    return (
        <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/alltrending' component={AllTrending} />
        <Route path='/account' component={MyAccount} />
        <Route path='/closet' component={MyCloset} />
        <Route path='/trackchanges' component={TrackChanges} />
        <Route path='/search' component={SearchRes} />
        </div>
    )
};