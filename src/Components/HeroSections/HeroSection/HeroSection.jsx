import Button from "../../Button/OutButton";
import PText from "../../PText/PText";
import { SocialData } from "../../../Assets/Data/SocialData";

import SocialMediaArrow from "../../../Assets/Images/social-media-arrow.svg"
import ScrollDownArrow from "../../../Assets/Images/scroll-down-arrow.svg"

import { HeroSectionStyles } from "./styles";

const HeroSection = () => {
    return (
        <HeroSectionStyles>
            <div className="hero">
                <div className="container">
                    <h1 className="hero_heading">
                        <span className="name">Hi, I'm</span>
                        <span className="name">José Riosmena</span>
                    </h1>

                    <div className="hero_info">
                        <img alt="Myself" />
                    </div>

                    <div className="hero_img">
                        <PText>
                            I am a Computer Science student from Mexico.
                        </PText>
                        <Button
                            btnLink="/projects"
                            btnText="See my work"
                        />
                    </div>

                    <div className="hero_social">
                        <div className="hero_social_indicator">
                            <p>Follow</p>
                            <img src={SocialMediaArrow} alt="Arrow down icon" />
                        </div>

                        <div className="hero_social_text">
                            {SocialData.map((item, index) => (
                                <li>
                                    <a
                                        href={item.link}
                                        key={index}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </HeroSectionStyles>
    )
}

export default HeroSection