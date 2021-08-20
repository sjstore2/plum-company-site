import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Team from './pages/Team'
import Company from './pages/Company'
import Layout from './components/Layout'
import Profile from './pages/Profile'
import Jobs from './pages/Jobs'
import JobListing from './components/JobListing'


const AppRoutes = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <UnauthorizedAppRoutes />
                </Switch>
            </Layout>
        </Router>
    )
}

// here for incase of login context to be added later
// const AppRoutes = () => {
//     return (
//         <Router>
//             <Navbar />
//             <main>
//                 <Switch>
//                     <UnauthorizedAppRoutes />
//                 </Switch>
//             </main>
//         </Router>
//     )
// }

const UnauthorizedAppRoutes = () => {
    return (
        <>
            <Route path='/' exact component={Home} />
            <Route path='/people' exact component={Team} />
            <Route path='/subsiduaries' exact component={Company} />
            {/* 
                Yes these two below are supposed to be the same, they utilise the same component
                the people route not in use as moved to social buttons
            */}
            {/* <Route path='/people/:id' component={Profile} /> */}
            <Route path='/subsiduaries/:id' component={Profile} />
            {/* Yes these two above are supposed to be the same, they utilise the same component*/}
            <Route path='/jobs' exact component={Jobs} />
            <Route path='/jobs/:id' component={JobListing} />
        </>
    )
}

export default AppRoutes
