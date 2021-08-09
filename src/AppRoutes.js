import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <UnauthorizedAppRoutes />
            </Switch>
        </Router>
    )
}

const UnauthorizedAppRoutes = () => {
    return (
        <>
            <Route path='/' exact component={Home} />
            <Route path='/the-team' exact component={About} />
        </>
    )
}

export default AppRoutes
