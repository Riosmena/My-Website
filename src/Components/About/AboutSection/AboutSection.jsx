import Button from "../../Button/Button"
import PText from "../../PText/PText"
import SectionTitle from "../../SectionTitle/SectionTitle"

import { AboutSectionStyles } from "./styles"

const AboutSection = () => {
    return (
        <AboutSectionStyles>
            <div className="container">
                <div className="aboutSection_left">
                    <SectionTitle
                        subheading="Let me introduce myself"
                        heading="About me"
                    />
                    <PText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptas. Quibusdam, quia. Quisquam, voluptas. 
                        Quibusdam, quia.
                    </PText>
                    <div className="aboutSection_buttons">
                        <Button btnText="Works" btnLink="/projects" />
                        <Button btnText="Read More" btnLink="/about" outline />
                    </div>
                </div>

                <div className="aboutSection_right">
                    <img src="https://i.imgur.com/8Q5ZQ2u.jpg" alt="about img" />
                </div>
            </div>
        </AboutSectionStyles>
    )
}

export default AboutSection