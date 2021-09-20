import React from 'react'
import Icon1 from '../../images/teacher.svg'
import Icon2 from '../../images/community.svg'
import Icon3 from '../../images/curriculam.svg'
import {
    BenefitsContainer,
    BenefitsCard,
    BenefitsH1,
    BenefitsH2,
    BenefitsIcon,
    BenefitsWrapper,
    BenefitsP
} from './BenefitsElements'
const Benefits = () => {
    return (
        <BenefitsContainer id="benefits">
            <BenefitsH1>Our Course Benefits</BenefitsH1>
            <BenefitsWrapper>
                <BenefitsCard>
                    <BenefitsIcon src={Icon1}/>
                    <BenefitsH2>Expert Teachers</BenefitsH2>
                    <BenefitsP>Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback. We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</BenefitsP>
                </BenefitsCard>

                <BenefitsCard>
                    <BenefitsIcon src={Icon2}/>
                    <BenefitsH2>Online Community</BenefitsH2>
                    <BenefitsP>Feel like home, with a "family of invisible friends".</BenefitsP>
                </BenefitsCard>

                <BenefitsCard>
                    <BenefitsIcon src={Icon3}/>
                    <BenefitsH2>Flexible Curriculum</BenefitsH2>
                    <BenefitsP>Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.</BenefitsP>
                </BenefitsCard>
            </BenefitsWrapper>
        </BenefitsContainer>
    )
}

export default Benefits
