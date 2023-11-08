import PText from "../../PText/PText"
import { SocialData } from "../../../Assets/Data/SocialData"
import { HeroSectionStyles } from "./styles"

import ScrollDownArrow from "../../../Assets/Images/scroll-down-arrow.svg"
import SocialMediaArrow from "../../../Assets/Images/social-media-arrow.svg"
import HeroImg from "../../../Assets/Images/hero.jpg"

const HeroSection = () => {
    return (
        <HeroSectionStyles>
            <div className="hero">
                <div className="container">
                    <h1 className="hero_heading">
                        <span>Hello, I am</span>
                        <span className="hero_name">José Riosmena</span>
                    </h1>

                    <div className="opacity">
                        <div className="hero_img">
                            <img src={HeroImg} alt="" height="500px" />
                        </div>
                    </div>

                    <div className="hero_info">
                        <PText className="hero_info_p">
                        A Computer Science Student at Tec de Monterrey.
                        </PText>
                    </div>

                    <div className="hero_social">
                        <div className="hero_social_indicator">
                            <p>Follow</p>
                            <img src={SocialMediaArrow} alt="icon" />
                        </div>

                        <div className="hero_social_text">
                            <ul>
                                {SocialData.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link} target="_blank" rel="noreferrer">
                                            {item.title}
                                        </a>
                                    </li>    
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="hero_scrollDown">
                        <p>Scroll</p>
                        <img src={ScrollDownArrow} alt="icon" />
                    </div>
                </div>
            </div>
        </HeroSectionStyles>
    )
}

export default HeroSection