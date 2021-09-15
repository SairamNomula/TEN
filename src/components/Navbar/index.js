import React from 'react'
import {FaBars, FaShoppingCart} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn, 
    NavBtnLink
} from './NavbarElements'


const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    TEN
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    {/* <FaShoppingCart /> */}
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                        <NavItem>
                            <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="online">Online Courses</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="hiring">We are Hiring</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="more">More</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Login/Sign-up</NavLinks>
                        </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">Sign in</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
