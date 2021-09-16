import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Banner from '../components/Banner'
import InfoSection from '../components/InfoSection'
import {infoObjOne} from '../components/InfoSection/Data'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Banner />
            <InfoSection {...infoObjOne}/>
        </>
    )
}

export default Home
