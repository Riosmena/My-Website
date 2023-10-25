import Button from "../../Button/OutButton";
import PText from "../../PText/PText";  
import SectionTitle from "../../SectionTitle/SectionTitle";

import { AboutSectionStyles } from "./styles";

import AboutImg from "../../../Assets/Images/Me.jpg";

const AboutSection = () => {
    return (
        <AboutSectionStyles>
            <div className="container">
                <div className="aboutSection_left">
                    <SectionTitle
                        subheading="Let me introduce myself"
                        heading="About Me"
                    />

                    <PText>
                        I am a Computer Science student from Mexico.
                        I love to design and make new web experiences for the people.
                        I am currently studying at ITESM Querétaro.
                    </PText>

                    <div className="aboutSection_buttons">
                        <Button btnLink="/projects" btnText="Works" />
                        <Button btnLink="/about" btnText="Read More" outline />
                    </div>
                </div>

                <div className="aboutSection_right">
                    <img src={AboutImg} alt="About me" />
                </div>
            </div>
        </AboutSectionStyles>
    )
}

export default AboutSection