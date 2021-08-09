import React from 'react'
import InfoSection from '../components/InfoSection'

let data = [
    {
        key: 1,
        headline: "This has to be the easiest hack ever!",
        subheading: "Script kiddies are the worst.",
        description: "Some script kiddie got into a database he set up and now is wrecking havoc on his own computer. Luckily, nobody cares as no real harm is actually being done. He just thinks he is super cool.",
        leadingImage: true,
        img: '/images/splash/info1.jpg',
        start: true,
        alt: 'dumb script kiddie',
        lightSection: true,
    },
    {
        key: 2,
        headline: "This has to be the easiest hack ever!",
        subheading: "Script kiddies are the worst.",
        description: "Some script kiddie got into a database he set up and now is wrecking havoc on his own computer. Luckily, nobody cares as no real harm is actually being done. He just thinks he is super cool.",
        leadingImage: false,
        img: '/images/splash/info2.jpg',
        start: false,
        alt: 'dumb script kiddie',
        lightSection: false,
    },
    {
        key: 3,
        headline: "This has to be the easiest hack ever!",
        subheading: "Script kiddies are the worst.",
        description: "Some script kiddie got into a database he set up and now is wrecking havoc on his own computer. Luckily, nobody cares as no real harm is actually being done. He just thinks he is super cool.",
        leadingImage: true,
        img: '/images/splash/info1.jpg',
        start: true,
        alt: 'dumb script kiddie',
        lightSection: true,
    },
]

const Home = () => {
    return (
        <>
            {data.map(obj => {
                return <InfoSection
                headline={obj.headline}
                subheading={obj.subheading}
                description={obj.description}
                leadingImage={obj.leadingImage}
                img={obj.img}
                start={obj.start.toString()}
                alt={obj.alt}
                lightSection={obj.lightSection}
                key={obj.key}
                />
            })}
        </>
    )
}

export default Home
