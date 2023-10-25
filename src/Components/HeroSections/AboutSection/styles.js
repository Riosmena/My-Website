import styled from "styled-components"

export const AboutSectionStyles = styled.div`
    padding: 10rem 0;

    .container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
  
    .aboutSection_left,
    .aboutSection_right {
        flex: 1;
    }
    
    .section-title {
        text-align: left;
    }
  
    .para {
        margin-top: 2rem;
        margin-left: 0;
    }
    
    .aboutSection_buttons {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }
    
    @media only screen and (max-width: 950px) {
        .aboutSection_left {
            flex: 4;
        }
        .aboutSection_right {
        flex: 3;
        }
    }
    
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            text-align: center;
        }
        
        .aboutSection_left,
        .aboutSection_right {
            width: 100%;
        }
        .aboutSection_right {
            margin-top: 3rem;
        }
        
        .section-title {
            text-align: center;
        }
        
        .para {
            margin: 0 auto;
            margin-top: 2rem;
        }
        
        .aboutSection_buttons {
            flex-direction: column;
            gap: 0rem;
            
            .button-wrapper,
            a {
                width: 100%;
                text-align: center;
            }
        }
    }
`