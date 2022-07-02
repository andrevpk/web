import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomePage from './screens/HomePage'
import Pesquisa from './screens/Pesquisa'

const Routes = () => {
    return (
        <Router>
            <Route path='/' component={HomePage} exact />
            <Route path='/Pesquisa' component={Pesquisa} />
        </Router>
    )
}

export default Routes