const { default: styled } = require("styled-components");

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
`;