import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import Container from '../containers/Container'

const DropMenu = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
    width: 10rem;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    padding: 0.5rem 0;
    /* border: solid 2px yellow; */
    flex-direction: column;
    z-index: 10;
`

const SubMenu = styled.ul`
    /* border: solid 2px green; */
    /* position: relative; */
    /* translate: -2.5rem 0; */
    width: 10rem;
    /* width: 100%; */
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    background: #763459;
    margin-top: 2rem;
    display: ${({open}) => open ? 'block' : 'none'};
    `

const SubMenuItem = styled.li`
    width: 100%;
    /* border: solid 2px pink; */
    text-align: center;
    padding: 5px 0;
    `

const SubMenuLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 1rem;
`

const Header = styled.div`
    /* border: solid 2px blue; */
    width: 100%;
`

const DropDownContainer = styled(Container)`
    /* border: solid 2px orange; */
    padding: 0px;
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
