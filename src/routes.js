import React from 'react'
import Login from './Components/Dashboard'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Auth from './Components/Auth'
import Register from './Components/Register'





export default (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Auth} /> 
        <Route exact path="/Dashboard" component={Dashboard}/>
        <Route exact path="/Register" component={Register}/>
    </Switch>
    </BrowserRouter>
)