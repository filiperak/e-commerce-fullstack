import styled from "styled-components";

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width:50%;
    top: 0;
    .current-img{
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }

    .hide-current-img{
        display: none;
    }
    .arrow{
        position: absolute;
        font-size: 2rem;
        opacity: 50%;
        cursor: pointer;
        z-index: 100;
    }
    .arrow-left{
        left: 0;
    }
    .arrow-rigth{
        right: 0;
    }
    &:hover .arrow{
        opacity: 100%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }

`;
export const Indicators = styled.span`
    display: flex;
    position: absolute;
    bottom: 2%;
    .current-indicator{
        background-color: #000;
        border: 3px solid var(--main-orange);
    }
`;
export const SingleIndicator = styled.img`
    border-radius: 4px;
    height: 60px;
    width: 60px;
    margin: 0 0.2rem;
    border: none;
    cursor: pointer;
`;