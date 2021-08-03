import React from 'react'
import styled from 'styled-components'

export const Contain = styled.div`
    padding: 1rem;
`

const Container = ({className, children}) => {
    return (
        <Contain className={className}>
           {children} 
        </Contain>
    )
}

export default Container
