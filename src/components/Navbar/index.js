import React, {useState, useEffect} from 'react'
import {FaBars, FaShoppingCart} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
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

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{color: '#e81038'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    TEN
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    {/* <FaShoppingCart /> */}
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                        <NavItem>
                            <NavLinks to="/" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/online"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Online Courses</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/hiring"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>We are Hiring</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/more"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>More</NavLinks>
                        </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">Sign in</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
