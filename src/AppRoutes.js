import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Team from './pages/Team'
import Company from './pages/Company'
import Layout from './components/Layout'
import Profile from './pages/Profile'
import JobsBoard from './components/JobsBoard'
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
            {/* Yes these two below are supposed to be the same, they utilise the same component*/}
            <Route path='/people/:id' component={Profile} />
            <Route path='/subsiduaries/:id' component={Profile} />
            {/* Yes these two above are supposed to be the same, they utilise the same component*/}
            <Route path='/jobs' exact component={JobsBoard} />
            <Route path='/jobs/:id' component={JobListing} />
            {/* <Route path='/intranet'  component={() => {
                window.location.href = process.env.REACT_APP_CORPORATE_SHARE;
                return null;
            }}/> */}
        </>
    )
}

export default AppRoutes
