import React from 'react'
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap
} from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/login">Courses</FooterLink>
                                <FooterLink to="/login">Testimonials</FooterLink>
                                <FooterLink to="/login">Careers</FooterLink>
                                <FooterLink to="/login">Terms & Conditions</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to="/login">Contact</FooterLink>
                                <FooterLink to="/login">Support</FooterLink>
                                <FooterLink to="/login">Sponsor</FooterLink>
                                <FooterLink to="/login">Agency</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social media</FooterLinkTitle>
                                <a href="https://www.linkedin.com/in/sairam-nomula-8aa752192/">LinkedIn</a>
                                <a href="https://github.com/SairamNomula">Github</a>
                                <a href="https://www.instagram.com/sairam_nomula/">Instagram</a>
                                <a href="https://www.facebook.com/nomula.sairam.77/">Facebook</a>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
