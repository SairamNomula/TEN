import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkScroll} from 'react-scroll'
import {Link as LinkRouter} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: #000;
    display: grid;
    top: 0;
    left: 0;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen })=> (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #e81038;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
`

export const SidebarWrapper = styled.div`
    color: #000;

`
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat()(6,60px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #e81038;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #e81038;
    white-space: nowrap;
    padding: 16px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover{
        transition: 0.2 ease-in-out;
        color: #e81038;
        background: #fff;
    }
`