import React from 'react'
import styled from 'styled-components'

const Contain = styled.div`
    padding: 1rem;
`

const Container = ({children}) => {
    return (
        <Contain>
           {children} 
        </Contain>
    )
}

export default Container
