import React from 'react'
import JobsBoard from '../components/JobsBoard'
import Container from '../containers/Container'
import styled from 'styled-components'

const Header = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const TextWrapper = styled(Container)`
    max-width: 1250px;
`

const Jobs = () => {
    return (
        <>
            <Container>
                <Header>
                    <TextWrapper>
                        <h1>Vacancies</h1>
                        <p>Grow your Career with us here at PLUM Limited. Here at plum we are looking for strong talented individuals to expand our workforce. Below you can find the current vacancies that are available.</p>
                    </TextWrapper>
                </Header>
                <JobsBoard />
            </Container>
        </>
    )
}

export default Jobs
