const { default: styled } = require("styled-components");


export const AdminProductListContainer = styled.ul`
  padding: 0%;
  width: 100%;
  
`;
export const AdminProductListItemContainer = styled.li`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 4px;
  margin: 4px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
export const AdminItemLeft = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AdminItemRigth = styled.div`
  display: flex;
  justify-content: space-between;

  & .MuiButtonBase-root {
    color: #000;
    margin: 4px !important;
    padding: 4px !important;
    font-weight: 800;
  }

  & .MuiButtonBase-root:first-child {
    background-color: #b6e9b6 !important;
  }

  & .MuiButtonBase-root:last-child {
    background-color: #f77f7f !important;
  
  }
  >a{
    padding: 0;
    margin: 0;
  }
`;
