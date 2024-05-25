import styled from "styled-components";

export const OptionsMenuContainer = styled.select`
    border: 1px solid var(--main-orange);
    font-size: 0.8em;
    font-weight: 600;
    color: #888;
    cursor: pointer;
    display: block;
    border-bottom-left-radius:4px;
    border-top-left-radius:4px;
    &:focus{
        outline: none;
    }
    option{
        color: #000;
        font-size: 1em;
        background-color: #fff;
    }
    @media(max-width:600px){
        max-width: 20%;
        background-color: var(--main-orange);
        color: #fff;

    }
`;
