import Container from '../containers/Container'
import React from 'react'
import styled from 'styled-components'

const InfoRow = styled.div`
    display: flex;
    align-content: flex-start;
    justify-content: stretch;
`

const InfoColumn = styled.div`
    margin: 0 5rem;
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    /* border: solid 3px pink; */
`

const Image = styled.img`
    max-width: 20rem;
    border-radius: 25px;
`

const TextWrapper = styled.div`
`

const SectionContainer = styled(Container)`
    padding: 2px;
`

const ProfileSection = ({image, alt, children}) => {
    return (
        <>
            <SectionContainer>
                <InfoRow>
                    {image == null ? null : <InfoColumn>
                        <ImageWrapper>
                            <Image src={image} alt={alt} />
                        </ImageWrapper>
                    </InfoColumn> }
                    <InfoColumn>
                        <TextWrapper>
                            {children}
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
            </SectionContainer>
        </>
    )
}

export default ProfileSection
