import React from 'react'
import InfoSection from '../components/InfoSection'

import data from '../data/db.json'

const Home = () => {
    return (
        <>
            {data.splashposts.map(obj => {
                return <InfoSection
                headline={obj.headline}
                subheading={obj.subheading}
                leadingImage={obj.leadingImage.toString()}
                imagePath={process.env.PUBLIC_URL + obj.imgPath}
                start={obj.start.toString()}
                alt={obj.alt}
                lightSection={obj.lightSection.toString()}
                key={obj.key}
                >
                    {obj.description}
                </InfoSection>
            })}
        </>
    )
}

export default Home
