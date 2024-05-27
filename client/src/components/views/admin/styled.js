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
  >input{
    margin:2px;
  }
  p{
    margin: 0;
    font-size: 0.8rem;
    font-weight: 600;
  }
  >#add-item-btn{
    background-color: var(--main-orange);
    border: none;
    padding: 3px;
    font-weight: 600;

  }
`;