import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomePage from './screens/HomePage'


const Routes = () => {
    return (
        <Router>
            <Route path='/' component={HomePage} exact />
        </Router>
    )
}

export default Routes