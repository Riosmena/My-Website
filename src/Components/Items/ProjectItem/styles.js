import styled from 'styled-components';

export const ProjectItemStyle = styled.div`
    .projectItem_img {
        width: 100%;
        height: 400px;
        border-radius: 12px;
        overflow: hidden;
        display: inline-block;
        border: 3px solid var(--gray-1);

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .projectItem_info {
        margin-top: 1rem;
        background-color: var(--dark-blue-2);
        padding: 1rem;
        border-radius: 12px;
    }

    projectItem_title {
        font-size: 2.2rem;
    }

    .projectItem_desc {
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
    }

    .projectItem_Referral {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
        font-size: 1.4rem;
    }

    .projectItem_Link {
        &:hover {
            color: var(--white);
        }
    }

    @media only screen and (max-width: 768px) {
        .projectItem_img {
            height: 350px;
        }
    }
`