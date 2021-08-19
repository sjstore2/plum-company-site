import React from 'react'
import InfoSection from '../components/InfoSection'
import styled from 'styled-components'

import data from '../data/db.json'
import Container from '../containers/Container'
import { TextWrapper } from '../components/InfoSection'

export const SubsiduarySection = styled(InfoSection)`
    padding: 0;
`

export const Highlight = styled.span`
    color: #763459;
    font-weight: bold;
    font-size:large;
`

const Rulebreak = styled.div`
    border: solid 2px #763459;
`


const Subsiduaries = () => {
    return (
        <>
            <Container>
                <TextWrapper>
                    <h1>About Plum Ltd.</h1>
                    <p>
                        Plum Ltd. is a provider of cyber technology, software
                        development and cosulting based services in the UK.
                    </p>
                        
                    <p>
                        Plum Ltd. was formed in 1995  and is a specialist 
                        provider of technology products and services to the 
                        defense sector and has grown over the years branching 
                        into multiple markets.  Plum Ltd. has 10,000 employees 
                        based in the UK but is looking for offices in other 
                        locations in the US and Australia to offer a 24 hour a 
                        day service to its customers.
                    </p>

                    <p>
                        Plum Ltd. core customers consist of:
                    </p>
                    <ul style={{listStyle: "none"}}>
                        <li>
                            <Highlight>Defences orginsations: </Highlight> 
                            Plum Ltd. has significant
                            contracts for suppporting core IT, communication
                            and operational systems of the UK MoD, US DoD and
                            NATO. Plum Ltd. are often engaged on projects
                            SECRET and TOP SECRET information assets and systems.
                            <br /><br />
                        </li>
                        <li>
                            <Highlight>Central Government Organisations: </Highlight>
                            Plum Ltd. have been engaged in major gorvernment system
                            integrations, developing specific software solutions alongside
                            providing managed services such as Security Operation Centre (SOC)
                            services and defensive and offensive security capabilities.
                            <br /><br />
                        </li>
                        <li>
                            <Highlight>Industrial organisations: </Highlight>
                            Given Plum Ltd. specialist engineering background they have
                            deep expertise in Industrial Control Systems (ICS) and 
                            provide managed security services to major clients in sectors 
                            such as Oil and Gas, Water management and elctricity distribution.
                            <br /><br />
                        </li>
                        <li>
                            <Highlight>Financial institutions: </Highlight>
                            Plum Ltd. have provided specialist security services, including
                            threat and intelligence monitoring to global financial instutions.
                            <br /><br />
                        </li>
                    </ul>
                </TextWrapper>
            </Container>
            {data.subsiduaries.map(obj => {
                return <div key={obj.id}>
                    <Rulebreak />
                    <SubsiduarySection
                    headline={obj.fullName}
                    subheading={obj.subheading}
                    leadingImage={obj.leadingImage.toString()}
                    imagePath={obj.imagePath}
                    start={obj.start.toString()}
                    alt={obj.alt}
                    lightSection={obj.lightSection.toString()}
                    key={obj.key}
                    callToAction={obj.callToAction}
                    actionLink={`/subsiduaries/${obj.id}`}
                    >
                        {obj.description}
                    </SubsiduarySection>
                </div>
            })}
        </>
    )
}

export default Subsiduaries
