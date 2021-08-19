import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import Container from '../containers/Container'

const DropMenu = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 8rem;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    padding: 0.5rem 0;
    margin: 0;
    /* border: solid 2px yellow; */
    flex-direction: column;
    z-index: 10;

    @media screen and (max-width: 790px) {
        width: 100vw;
        padding-bottom: 0;
        /* border: solid 2px yellow;   */
    }
`

const SubMenu = styled.ul`
    /* border: solid 2px green; */
    /* width: 100%; */
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    background: #763459;
    /* margin-top: 0.5rem; */
    display: ${({open}) => open ? 'block' : 'none'};
    transition: all 0.2s ease;

    @media screen and (max-width: 790px) {
        width: 100%;
        margin: 0;
        display: block;
    }
`

const SubMenuItem = styled.li`
    width: 100%;
    text-align: center;
    padding: 10px 0;
    /* height: 40px; */
    /* border: solid 1px cyan; */

    :hover {
        background-color: #823e65;
        /* b05187 */
    }
`

const SubMenuLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    /* padding: 1rem; */
`

const Header = styled.div`
    /* border: solid 2px blue; */
    width: 100%;
    padding-top: 14px;
    padding-bottom: 0;

    @media screen and (max-width: 790px) {
        display: none;
    }
`

const DropDownContainer = styled(Container)`
    /* border: solid 2px orange; */
    height: 100%;
    /* width: 100%; */
    padding: 0;

    @media screen and (max-width: 790px) {
        height: auto;
    }
`

const Dropdown = (props) => {
    const [ open, setOpen ] = useState(false);

    const handleClick = () => setOpen(!open);

    const handleMouseOver = () => {
        setOpen(true);
    }

    const handleMouseOut = () => {
        setOpen(false);
    }
    
    return (
        <>
            <DropDownContainer>
                <DropMenu onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Header onClick={handleClick}>{props.header}<FaCaretDown /></Header>
                    <SubMenu open={open}>
                        {props.links.map((link) => {
                            return (
                            <SubMenuItem onClick={handleClick} key={link.key}>
                                <SubMenuLink to={link.url}>{link.text}</SubMenuLink>
                            </SubMenuItem>
                            )
                        })}
                    </SubMenu>
                </DropMenu>  
            </DropDownContainer>
        </>
    )
}

export default Dropdown
