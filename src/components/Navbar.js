import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Nav = styled.nav`
    background-color: #763459;
    display: flex;
    height: 100px;
    padding: 0.5rem calc((100vw - 1280px) / 2);
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
    padding: -0;
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
    @media screen and (max-width: 790px) {
        width: 100%;
    }

`

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    padding: 0 1rem;

    &.active {
        color: coral;
        > span {
            padding: 3px 0;
            border-top: solid 1px coral;
            border-bottom: solid 1px coral;
        }
    }

    @media screen and (max-width: 790px) {
        justify-content: center;
        width: 100%;
        display: table;
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
                <NavLink to='/'>
                    <NavImage src='/images/plum.png' alt='plum logo' />
                </NavLink>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLink to='/about-us'><span>About Us</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/services'><span>Services</span></NavLink>
                    </NavItem>
                </NavMenu>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

