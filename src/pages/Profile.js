import React, { useState, useEffect } from 'react'
import ProfileSection from '../components/ProfileSection';
import { SubsiduarySection } from './Company';

import data from '../data/db.json'

const Profile = ({match}) => {
    const [isLoading, setIsLoading] = useState({entity:true, profile:true});
    const [entity, setEntity] = useState();
    const [profile, setProfile] = useState();

    useEffect(() => {
        let provided = {}
        let selector = null;
        if (match.path.split("/")[1] === "people") {
            selector = data.employees
        } else if (match.path.split("/"[1] === "subsiduaries")) {
            selector = data.subsiduaries
        }

        /* 
        These two for loops below are probably a bad way of representing this
        'fake' api call, but it was all for the understanding of how useEffect
        works and how apis would be called. I then ran into scoping issues
        trying to piece this together.

        The actual solution would be to perform two different api requests (or 
        one with multiple tables) to fetch the data and then manipulate or 
        compare it afterwards using associated record values.
        */
        for (let obj of selector){
            if (obj.id.toString() === match.params.id) {
                let loading = isLoading
                provided.obj = obj
                setEntity(obj);
                loading.entity = false;
                setIsLoading(loading);
            }
        }

        /*
        This if block is to provide some slight validation, such that not *any*
        link can be accessed causing the pogram to crash or display error messages.
        I could even remove this block to prove the 'insecurity' of the website.
        */
        if (provided.obj) {
            for (let profile of data.profiles) {
                if (profile.id === provided.obj.profileId) {
                    let loading = isLoading;
                    setProfile(profile);
                    loading.profile = false;
                    setIsLoading(loading);
                }
            }
        }
    }, [isLoading, match.params.id, match.path])

    return (
        !isLoading.entity && !isLoading.profile && (
        <>
            {/* 
            This is just to type differentiate between dynamic 'entities'
            The pseudo dynamic routing offers different urls, rather than
            giving the data object a type. Specific for use-case, obviusly not
            good practice. Shows url validation to some extent though.
            */}
            { match.path.split("/")[1] === "people" ? (
            <ProfileSection
            image={'imagePath' in entity ? entity.imagePath : null}
            alt={'imagePath' in entity ? entity.fullName : null}>
                <h1>{entity.fullName}</h1>
                <h2>{entity.titleFull}</h2>
                <p><em>{entity.quote}</em></p>
            </ProfileSection>
            ) : null}
           

            {profile.profileAbout.map(element => {
                        return <SubsiduarySection 
                        headline={element.headline}
                        subheading={element.subheading}
                        leadingImage={"leadingImage" in element ? element.leadingImage.toString() : null}
                        imagePath={element.imagePath}
                        start={"true"}
                        alt={element.alt}
                        lightSection={"true"}
                        bulletList={element.bulletList}
                        key={element.key}
                        >
                            {"textItems" in element ? element.textItems.map(par => {
                                return <p key={`par${element.textItems.indexOf(par)}`}>{par}</p>
                            }) : null}
                        </SubsiduarySection>
                    })}

        </>
        )
    )
}

export default Profile
