import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon'
import Register from './pages/Register';
import Profile from './pages/Profile';
import Occurrences from './pages/Occurrences';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/occurrences" exact component={Occurrences}/>
            </Switch>
        </BrowserRouter>
    )
}
