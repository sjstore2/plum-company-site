import React from 'react'
import styled from 'styled-components'
import Container from '../containers/Container'

const InfoSec = styled.div`
    padding: 160px 0;
    background: ${({ lightSection }) => (lightSection ? '#fff' : '#763459')};
    color: ${({ lightSection }) => (lightSection ? 'black' : 'white')};
`

const InfoRow = styled.div`
    display: flex;
    padding: 16px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ leadingImage }) =>  (leadingImage ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    max-width: 50%;
    flex-basis: 50%;
    flex: 1;
    @media screen and (max-width: 790px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding: 0 5rem;
    padding-bottom: 60px;
`

const Heading = styled.h1`
    font-size: 2rem;
    line-height: 1.1;
`

const Subtitle = styled.h2`
    font-size: 1.5rem;
    max-width: 440px;
    line-height: 24px;
`
const Subsubtitle = styled.h3`
    font-size: 1rem;
    max-width: 440px;
    line-height: 24px;
`

const Description = styled.p``

const ImageWrapper = styled.div`
    display: flex;
    justify-content: ${(props) => (props.start ? 'flex-start' : 'flex-end')};
`

const Img = styled.img`
    padding-right: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`

const InfoSection = ({
headline,
subheading,
subsubheading,
description,
leadingImage,
img,
start,
alt,
lightSection,
className
}) => {
    return (
        <>
            <InfoSec className={className} lightSection={lightSection}>
                <Container>
                    <InfoRow leadingImage={leadingImage}>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading>{headline}</Heading>
                                <Subtitle>{subheading}</Subtitle>
                                <Subsubtitle>{subsubheading}</Subsubtitle>
                                <Description>{description}</Description>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImageWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImageWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
