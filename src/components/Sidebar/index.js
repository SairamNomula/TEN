import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>

                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="online" onClick={toggle}>
                        Online Courses
                    </SidebarLink>
                    <SidebarLink to="hiring" onClick={toggle}>
                        We are Hiring
                    </SidebarLink>
                    <SidebarLink to="more" onClick={toggle}>
                        More
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Login/Sign-up
                    </SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/login">Sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
