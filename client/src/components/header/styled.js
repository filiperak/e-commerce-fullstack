 import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: var(--main-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    .MuiSvgIcon-root{
        cursor: pointer;
    }
    .MuiSvgIcon-root:hover{
        color: var(--main-orange);
    }
    >svg{
        cursor: pointer;
    }
    @media(max-width: 600px) {
        flex-direction: column-reverse; 
        align-items: reverse;
        padding: 6px; 
    }

`;
export const HeaderArrow = styled.div`
    flex: 0.1;
    @media(max-width: 600px) {
        display: none; 
    }
`;

export const SearchBar = styled.form`
    display: flex;
    border-radius: 4px;
    background-color: #fff;
    position: relative;
    flex: 0.7;
    >input{
        border: none;
        flex:1
    }
    >input:focus{
        outline: none;
        box-shadow: 0 0 10px 1000px rgba(0,0,0,0.5);
    }
    .MuiSvgIcon-root{
        margin: 2px;
    }
    @media(max-width:600px){
        width: 100%;
    }

`;
export const HeaderRigth = styled.div`
    flex:0.2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin:0 2%;
    @media(max-width:600px){
        width: 100%;
        justify-content: space-between;
        .MuiSvgIcon-root{
        margin-top: 0;
        margin-bottom: 2px;
        font-size: 18px;
    }
    }
`;
export const Recommended = styled.ul`
    position: absolute;
    z-index: 200;
    background-color: #fff;
    height: auto;
    top: 13px;
    left: 133px;
    right: 28px;
    list-style: none;
    padding: 0;
    border-radius: 0  0 4px  4px;
    overflow-y: scroll;
    max-height: 50vh;
    &::-webkit-scrollbar {
        display: none;
    }
    >li{
        padding: 3px;
        margin: 2px;
        cursor: pointer;
    }
    >li:hover{
        background-color: var(--main-gray);
        border-radius: 4px;
    }
`;
export const HeaderIconContainer = styled.div`
    text-align: center;
    cursor: pointer;
    position: relative;
    margin: 0 4%;
    >span{
        position: absolute;
    }
    &:hover{
        color: var(--main-orange);
    }
    >div{
        display: flex;
        align-items: center;
    }
    >P{
        margin: 0;
        padding: 0;
        font-size: 0.7rem;
    }
`;
