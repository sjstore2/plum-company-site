import React from 'react'
import styled from 'styled-components'
import Container from '../containers/Container'
import { NavLink } from 'react-router-dom'

const InfoSec = styled.div`
    padding: 160px 0;
    background: ${({ lightSection }) => (lightSection === "true" ? '#fff' : '#763459')};
    color: ${({ lightSection }) => (lightSection === "true" ? 'black' : 'white')};
`

export const InfoRow = styled.div`
    display: flex;
    padding: 16px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ leadingImage }) =>  (leadingImage === "true" ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    max-width: ${({imagePath}) => imagePath ? "50%" : "100%"};
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
    justify-content: ${(props) => (props.start === "true" ? 'flex-start' : 'flex-end')};
`

const Img = styled.img`
    padding-right: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`

const ActionContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
`

const ActionLink = styled(NavLink)`
    display:flex;
    justify-content: center;
    background-color: #763459;
    color: #fff;
    font-weight: bold;
    width: 15rem;
    border-radius: 25px;
    padding: 5px;
`

const Highlight = styled.span`
    color: #763459;
    font-weight: bold;
    font-size:large;
`
const InfoBulletList = styled.ul`
    list-style: none;

    & li {
        padding-bottom: 7px;
    }
`

const InfoSection = ({
headline,
subheading,
subsubheading,
description,
leadingImage,
imagePath,
start,
alt,
lightSection,
className,
callToAction,
actionLink,
bulletList,
children
}) => {
    return (
        <>
            <InfoSec className={className} lightSection={lightSection}>
                <Container>
                    <InfoRow leadingImage={leadingImage}>
                        <InfoColumn imagePath={imagePath}>
                            <TextWrapper>
                                <Heading>{headline}</Heading>
                                <Subtitle>{subheading}</Subtitle>
                                <Subsubtitle>{subsubheading}</Subsubtitle>
                                {/* <Description>{description}</Description> */}
                                <Description>{children}</Description>
                                {/* optional bullet list */}
                                <InfoBulletList>
                                {bulletList ? 
                                bulletList.map(item => {
                                        return <li>
                                            <Highlight>{item.highlight}</Highlight>
                                            {item.text}
                                        </li>
                                })
                                : null}
                                </InfoBulletList>
                                {/* optional call to action */}
                                {callToAction ? 
                                <ActionContainer>
                                    <ActionLink to={actionLink}>{callToAction}</ActionLink>
                                </ActionContainer> : null}
                                   
                            </TextWrapper>
                        </InfoColumn>
                        { imagePath ? (
                        <InfoColumn>
                            <ImageWrapper start={start}>
                                <Img src={imagePath} alt={alt} />
                            </ImageWrapper>
                        </InfoColumn>) : null
                        }
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
