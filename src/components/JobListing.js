import React, { useState, useEffect } from 'react'
import Container from '../containers/Container'
import styled from 'styled-components'

import data from '../data/db.json'

const Company = styled.h1``

const Title = styled.h2``

const Header = styled.div``

const Heading = styled.h3``

const Content = styled.div``

const BulletList = styled.ul``

const BulletItem = styled.li``

const Paragraph = styled.p``

const JobListing = ({match}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobListing, setJobListing] = useState();

    useEffect(() => {
        for (let obj of data.jobsBoard) {
            if (obj.id == match.params.id) {
                console.log(obj);
                setJobListing(obj);
                setIsLoading(false);
            }
        }
    }, [match.params.id])

    return (
        !isLoading && (
        <>
            <Container>
                <Header>
                    <Company>{jobListing.company}</Company>
                    <Title>{jobListing.title}</Title>
                </Header>
                <Content>
                    {jobListing.sections.map(section => {
                        return (
                            <div key={jobListing.sections.indexOf(section)}>
                                <Heading>{section.header}</Heading>
                                {section.paragraphs.map(paragraph => {
                                    return <Paragraph key={section.paragraphs.indexOf(paragraph)}>{paragraph}</Paragraph>
                                })}
                                <BulletList>
                                    {section.bulletSection.map(point => {
                                        return <BulletItem key={section.bulletSection.indexOf(point)}>{point}</BulletItem>
                                    })}
                                </BulletList>
                            </div>
                        )
                    })}
                </Content>
            </Container>
        </>
        )
    )
}

export default JobListing
