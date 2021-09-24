import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
} from './HeroElements'


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />     
        </HeroBg>
        <HeroContent>
            <HeroH1>The Entrepreneurship Network</HeroH1>
            <HeroP>A world of knowledge at your fingertips.
                <br />Learning together from the comfort of your home.</HeroP>
            <HeroBtnWrapper>
                <Button to="online"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                onMouseEnter={onHover} 
                onMouseLeave={onHover} 
                primary="true" 
                dark="true">Learn more</Button>
            </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
