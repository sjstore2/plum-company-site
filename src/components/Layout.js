import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Main = styled.main`
    padding-top: 7rem;
`

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <Main>
                {children}
            </Main>
        </>
    )
}

export default Layout
