import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import Dropdown from './Dropdown'

const Nav = styled.nav`
    background-color: #763459;
    display: flex;
    position: fixed;
    height: 100px;
    width: 100%;
    /* padding: 0.5rem calc((100vw - 1280px) / 2); */
    justify-content: space-between;
    z-index: 10;
`

const NavImage = styled.img`
    height: 100px;
    width: 15rem;
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    padding: 0;
    /* border: solid 1px blue; */

    @media screen and (max-width: 790px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => click ? 0 : '-100%'};
        transition: all 0.2s ease;
        background: #763459;
    }
`

const NavItem = styled.li`
    height: 40px;
    /* border: solid 1px pink; */

    @media screen and (max-width: 790px) {
        width: 100%;
    }

    & .link {
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    padding-right: 1rem;

        :hover {
            background-color: #823e65;
        }

        &.active {
            color: coral;
            > span {
                padding: 5px 0;
                border-top: solid 1px coral;
                border-bottom: solid 1px coral;
            }
        }

        @media screen and (max-width: 790px) {
            justify-content: center;
            width: 100%;
            padding: 0;
        }
    }
`

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    padding-right: 1rem;

    :hover {
        background-color: #823e65;
    }

    &.active {
        color: coral;
        > span {
            padding: 5px 0;
            border-top: solid 1px coral;
            border-bottom: solid 1px coral;
        }
    }

    @media screen and (max-width: 790px) {
        justify-content: center;
        width: 100%;
        padding: 0;
    }
`

const BannerNav = styled(NavLink)`
    :hover {
        background-color: #763459;
    }
`

const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 790px) {
        display: block;
        top: 0;
        right: 0;
        transform: translate(-100%, 40%);
    }
`

const Navbar = () => {

    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <BannerNav to='/'>
                    <NavImage src={process.env.PUBLIC_URL + '/images/plum.png'} alt='plum logo' />
                </BannerNav>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <Dropdown 
                    header="About us"
                    links={[
                        {
                            key: 0,
                            url: "/subsiduaries",
                            text: "Our Subsiduaries"
                        },
                        {
                            key: 1,
                            url: "/people",
                            text: "Meet the team"
                        },
                    ]}/>
                    <NavItem>
                        <Link className="link" to='/jobs'><span>Jobs Board</span></Link>
                    </NavItem>
                    <NavItem>
                        <span className="link" onClick={() => {
                            window.open('https://drive.google.com/drive/folders/1mJ000vGMezx9mMwWVngpqG-WIdscaMWL?usp=sharing', '_blank');
                            return null;
                        }} target='_blank' rel="noreferrer">Intranet</span>
                    </NavItem>
                </NavMenu>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

