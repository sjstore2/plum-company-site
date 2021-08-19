import React, {useState} from 'react'
import Container from '../containers/Container'
import styled from 'styled-components'
import InfoSection from './InfoSection'

import data from '../data/db.json'

const JobBoard = styled(Container)`
    display: flex;
    border: solid 1px pink;
    flex-flow: row wrap;
`

const JobPost = styled(Container)`
    width: 100%;
    display: flex;
    border: solid 1px green;
`

const JobSection = styled(InfoSection)`
    padding: 0px;
    display: flex;
    justify-content: center;
    border: solid 1px blue;
    width: 100%;
`

const JobsBoard = () => {
    const [jobPosts, setJobPosts] = useState(data.jobsBoard)
    return (
        <>
            <JobBoard>
                
                {jobPosts.map(post => {
                    return (
                        <JobPost key={jobPosts.indexOf(post)}>
                            <JobSection
                            headline={post.company}
                            subheading={post.title}
                            lightSection={"true"}
                            callsToAction={post.callsToAction}
                            actionLink={`/jobs/${post.id}`}
                            >
                            {post.description}
                            </JobSection>
                        </JobPost>
                    )
                })}
                
            </JobBoard>
        </>
    )
}

export default JobsBoard
