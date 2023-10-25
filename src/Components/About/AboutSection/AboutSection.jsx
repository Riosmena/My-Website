import OutButton from "../../Button/OutButton"
import PText from "../../PText/PText"
import AboutInfoItem from "../../Items/AboutItem/AboutItem"
//import ContactBanner from "../../Contact/ContactBanner/ContactBanner"

import { AboutPageStyles } from "./styles"

import AboutImg from "../../../Assets/Images/Me.jpg"

const AboutSection = () => {
    return (
        <>
            <AboutPageStyles>
                <div className="container">
                    <div className="top-section">
                        <div className="left">
                            <p className="about_subheading">
                                Hi, I am <span> José Riosmena</span>
                            </p>

                            <h2 className="about_heading">
                                A Computer Science Student at ITESM QRO
                            </h2>

                            <div className="about_info">
                                <PText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quisquam, voluptas. Quibusdam, quia. Quisquam, voluptas. 
                                    Quibusdam, quia.
                                    <br /> <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quisquam, voluptas. Quibusdam, quia. Quisquam, voluptas. 
                                    Quibusdam, quia.
                                    <br /> <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quisquam, voluptas. Quibusdam, quia. Quisquam, voluptas. 
                                    Quibusdam, quia.
                                </PText>
                            </div>

                            <OutButton 
                                btnText="Download CV" 
                                btnLink="#" 
                            />
                        </div>

                        <div className="right">
                            <img src={AboutImg} alt="About me" />
                        </div>
                    </div>

                    <div className="about_info_items">
                        <div className="about_info_item">
                            <h1 className="about_info_heading">Education</h1>
                            <AboutInfoItem
                                title="University"
                                items={[
                                    'Computer Science',
                                    'Tecnológico de Monterrey',
                                    'Querétaro, México',
                                    'Aug 2021 - Present',
                                ]}
                            />
                        </div>

                        <div className="about_info_item">
                            <h1 className="about_info_heading">Experience</h1>
                            <AboutInfoItem
                                title="Internship"
                                items={[
                                    'EID Intern',
                                    'GE Aerospace',
                                    'Querétaro, México',
                                    'Jun 2023 - Present',
                                ]}
                            />
                        </div>

                        <div className="about_info_item">
                            <h1 className="about_info_heading">Skills</h1>
                            <AboutInfoItem
                                title="Languages"
                                items={[
                                    'Spanish (Native)',
                                    'English (B2)',
                                ]}
                            />

                            <AboutInfoItem
                                title="Programming"
                                items={[
                                    'C++',
                                    'C',
                                    'C#',
                                    'Python',
                                    'MATLAB',
                                    'R',
                                    'React',
                                    'Rust',
                                    'DXL',
                                    'SQL',
                                    'PHP',
                                    'Perl',
                                    'Java',
                                    'JavaScript',
                                    'TypeScript',
                                    'Racket',
                                    'Prolog',
                                    'HTML',
                                    'CSS',
                                ]}
                            />

                            <AboutInfoItem
                                title="Technologies"
                                items={[
                                    'Git',
                                    'GitHub',
                                    'Linux',
                                    'Windows',
                                    'Arduino',
                                    'Visual Studio',
                                    'Visual Studio Code',
                                    'Unity',
                                    'Unreal Engine',
                                ]}
                            />

                            <AboutInfoItem
                                title="Others"
                                items={[
                                    'Microsoft Office',
                                    'Adobe Photoshop',
                                    'Figma',
                                    'Canva',
                                    'Blender',
                                ]}
                            />
                        </div>
                    </div>
                </div>
                {/* <ContactBanner /> */}
            </AboutPageStyles>
        </>
    )
}

export default AboutSection