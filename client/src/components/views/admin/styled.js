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