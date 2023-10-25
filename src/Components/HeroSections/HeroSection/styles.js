import styled from "styled-components";

export const HeroSectionStyles = styled.section`
    .hero {
        height: 100vh;
        width: 100%;
        min-height: 1000px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .hero_heading {
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;

        span {
            display: inline-block;
            width: 100%;
        }

        .hero_name {
            font-family: "Montserrat Bold";
            color: var(--white);
            font-size: 7rem;
        }
    }

    .hero_img {
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }

    .hero_info {
        margin-top: 2rem;
    }

    .hero_social,
    .hero_scrollDown {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;

        bottom: 20px;
        width: 50px;
    }

    .hero_social {
        left: 50px;
    }

    .hero_scrollDown {
        right: 50px;
    }

    .hero_social_indicator,
    .hero_scrollDown {
        width: 50px;

        p {
            font-size: 1.6rem;
            transform: translateY(-70px) rotate(90deg);
            letter-spacing: 0.7rem;
            text-transform: uppercase;
        }

        img {
            max-height: 45px;
            width: 16px;
            margin: 0 auto;
            object-fit: contain;
        }
    }

    .hero_scrollDown {
        img {
            max-height: 70px;
        }
    }

    .hero_social_text {
        ul {
            li {
                margin-bottom: 1rem;
            
                a {
                    display: inline-block;
                    font-size: 1.6rem;
                    transform: rotate(-90deg);
                    letter-spacing: 5px;
                    margin-bottom: 2rem;
                }
            }
        }
    }

    @media only screen and (max-width: 768px) {
        .hero {
            min-height: 750px;
        }

        .hero_heading {
            font-size: 1.4rem;
            margin-bottom: -3rem;

            .hero_name {
                font-size: 4.5rem;
            }
        }

        .hero_img {
            height: 300px;
        }

        .hero_info {
            margin-top: 3rem;
        }

        .hero_social {
            left: 0px;
            bottom: -15%;
            width: 20px;

            .hero_social_indicator {
                width: 20px;

                p {
                    font-size: 1.2rem;
                }

                img {
                    max-height: 22px;
                }
            }

            .hero_social_text {
                ul {
                    li {
                        a {
                            font-size: 1.2rem;
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }

        .hero_scrollDown {
            right: 0;
            width: 20px;
            gap: 1rem;

            p {
                font-size: 1.3px;
            }
        }
    }
`