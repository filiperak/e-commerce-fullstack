import styled from "styled-components";

export const AdminContainer = styled.form`
  margin-top: var(--main-component-margin);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0 4px;
  }
  > .MuiButtonBase-root {
    color: #000;
    background-color: var(--main-orange);
    margin: 4px !important;
    padding: 4px !important;
    font-weight: 800;
    margin-left: auto;
  }
`;
export const EdititemContainer = styled.div`
  margin-top: var(--main-component-margin);
  display: flex;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  height: 70vh;
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 1%;
    margin-right: 1%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;
export const EdititemImages = styled.div`
  flex:0.4;
  border: 1px solid red;
`;
export const EdititemProductData = styled.div`
  flex: 0.6;
  margin: 12px;
  border :1px solid red;
`;
