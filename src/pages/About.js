import React from 'react'
import InfoSection, { TextWrapper }from '../components/InfoSection'
import Container, { Contain } from '../containers/Container'
import styled from 'styled-components'

let data = [
    {
        key: 0,
        fullName: "Luisella Barese",
        title: {abbr:"CEO", full:"Chief Executive Officer"},
        quote: "Here is what I have to say about this company!",
        department: "",
        social: "",
        contact: "luisella.barese.plum@protonmail.com"
    },
    {
        key: 1,
        fullName: "David Vacek",
        title: {abbr:"CFO", full:"Chief Financial Officer"},
        quote: "Here is what I have to say about this company!",
        department: "",
        social: "",
        contact: "david.vacek.plum@protonmail.com"
    },
    {
        key: 2,
        fullName: "Johan van der Gouw",
        title: {abbr:"COO", full:"Chief Operations Officer"},
        quote: "Here is what I have to say about this company!",
        department: "",
        social: "",
        contact: "johan.van.der.gouw.plum@protonmail.com"
    },
    {
        key: 3,
        fullName: "Kiera Webster",
        title: {abbr:"CIO", full:"Chief Information Officer"},
        quote: "Here is what I have to say about this company!",
        department: "",
        social: "",
        contact: "kiera.webster.plum@protonmail.com"
    },
    {
        key: 4,
        fullName: "Stefan Pettersson",
        title: {abbr:"", full:"Group Information Security Manager"},
        quote: "Here is what I have to say about this company!",
        department: "",
        social: "",
        contact: "stefan.pettersson.plum@protonmail.com"
    },
    {
        key: 5,
        fullName: "Davi Ribeiro Almeida",
        title: {abbr:"CISO", full:"Chief Information Security Officer"},
        quote: "Here is what I have to say about this company!",
        department: "Defence",
        social: "",
        contact: "davi.ribeiro.almeida.plum@protonmail.com"
    },
    {
        key: 6,
        fullName: "Amber Sage",
        title: {abbr:"CISO", full:"Chief Information Security Officer"},
        quote: "Here is what I have to say about this company!",
        department: "Managed Services",
        social: "",
        contact: "amber.sage.plum@protonmail.com"
    },
    {
        key: 7,
        fullName: "Alisha Fleming",
        title: {abbr:"CISO", full:"Chief Information Security Officer"},
        quote: "Here is what I have to say about this company!",
        department: "Engineering and Integration",
        social: "",
        contact: "alisa.fleming.plum@protonmail.com"
    },
    {
        key: 8,
        fullName: "Jessica Luft",
        title: {abbr:"HR", full:"Head of Global HR Services"},
        quote: "Here is what I have to say about this company!",
        department: "",
        social: "",
        contact: "jessica.luft.plum@protonmail.com"
    },
    {
        key: 9,
        fullName: "Jan Itor",
        title: {abbr:"", full:"Global Facilities"},
        quote: "Here is what I have to say about this company!",
        department: "",
        social: "",
        contact: "jan.itor.plum@protonmail.com"
    },
    {
        key: 10,
        fullName: "Alice Kirillova",
        title: {abbr:"", full:"Group Internal Audit Manager"},
        quote: "Here is what I have to say about this company!",
        department: "",
        social: "",
        contact: "alice.kirillova.plum@protonmail.com"
    },
    {
        key: 11,
        fullName: "Eluemuno Chukwumaobim",
        title: {abbr:"", full:"Lead Technical Architect"},
        quote: "Here is what I have to say about this company!",
        department: "",
        social: "",
        contact: "alice.kirillova.plum@protonmail.com"
    },
]

const imagePath = "/images/social/"

const AboutSec = styled.div``

const HeaderSection = styled(InfoSection)`
    padding: 0px;
`

const AboutCard = styled(InfoSection)`
    width: 100%;
    padding: 0px;
    border: solid 3px #763459;
    border-radius: 25px;
    margin-bottom: 15px;

    img {
        border-radius: 25px;
    } 

    ${Contain} {
        padding: 0px;
    }

    ${TextWrapper} {
        padding: 0 2rem;
    }
`

const CardGallery = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
`

const CardContainer = styled(Container)`
    width: 48%;
    padding: 0;
    
    @media screen and (max-width: 1250px) {
        width: 100%;
    }
`

const About = () => {

    const getImagePath = (card) => {
        switch (card.title.abbr){
            case "CISO":
                return imagePath + card.title.abbr + " " + card.department + ".jpg"
            case "":
                return imagePath + card.title.full + ".jpg"
            default:
                return imagePath + card.title.abbr + ".jpg"
        }
    }
    

    return (
        <>
            <AboutSec>
                <Container>
                        <HeaderSection
                        headline="Meet the team!"
                        description="Here at PLUM ltd. we do this and these are our team members who back those decisions."
                        lightSection={true}
                        />
                        <CardGallery>
                                {data.map(card => {
                                    return <CardContainer key={card.key}>
                                        <AboutCard
                                        headline={card.fullName}
                                        subheading={card.title.full}
                                        subsubheading={card.department}
                                        description={card.quote}
                                        leadingImage={true}
                                        img={getImagePath(card)}
                                        start={true}
                                        alt={`${card.title.abbr} ${card.fullName}`}
                                        lightSection={true}
                                        />
                                    </CardContainer>
                                })}
                        </CardGallery>
                </Container>
            </AboutSec>
        </>
    )
}

export default About
