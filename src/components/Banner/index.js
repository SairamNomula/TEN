import React, {useState} from 'react'
import Video from '../../videos/pages.mp4'
import {Button} from '../ButtonElement'
import {
    BannerContainer,
    BannerBg,
    VideoBg,
    BannerContent,
    BannerH1,
    BannerP,
    BannerBtnWrapper,
} from './BannerElements'


const Banner = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <BannerContainer>
        <BannerBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />     
        </BannerBg>
        <BannerContent>
            <BannerH1>Welcome to</BannerH1>
            <BannerP>THE NEXT BIG THING</BannerP>
            <BannerBtnWrapper>
                <Button href="https://discord.com/invite/A8zBusy" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Join TEN Virtual Campus</Button>
            </BannerBtnWrapper>
        </BannerContent>
        </BannerContainer>
    )
}

export default Banner
