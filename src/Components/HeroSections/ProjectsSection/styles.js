import styled from 'styled-components';

export const ProjectSectionStyle = styled.div`
    padding: 10rem 0;

    .project_allItems {
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }

    .swiper-container {
        padding-top: 8rem;
        max-width: 100%;
    }

    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        height: 50px;
        width: 50px;
        background: var(--deep-dark);
        z-index: 10;
        right: 60px;
        left: auto;
        top: 0;
        transform: translateY(50%);
        color: var(--gray-1);
        border-radius: 8px;
    }

    .swiper-button-next {
        right: 0;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 2rem;
    }

    @media only screen and (max-width: 768px) {
        .project_allItems {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 7rem;
            gap: 5rem;
            
            .projectItem_img {
                width: 100%;
            }
        }
    }
`