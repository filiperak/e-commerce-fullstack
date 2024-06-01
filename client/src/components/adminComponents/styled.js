const { default: styled } = require("styled-components");


export const AdminProductListContainer = styled.ul`
  padding: 0%;
  width: 100%;
  
`;
export const AdminProductListItemContainer = styled.li`
  border-radius: 2px;
  border: 1px solid var(--main-gray);
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

  :first-child{
    text-decoration: none;
    margin-right: 2px;
    &:hover{
      color: lightblue;
    }
  }
  span{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: 1.5px solid var(--main-gray);
    height: 50%;
    font-size: 0.8rem;
    color: rgb(136, 136, 136);
    padding: 3px;
    cursor: pointer;
  }
  .admin-delete-btn{

    &:hover{
      color: red;
    }
  }
`;

export const EditHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 8px;
  margin-top: 14px;
  >h4{
    margin: 0
  }
  span{
    padding: 4px;
    border-radius: 4px;
    background-color: var(--main-gray);
    margin: 0 3px;
    cursor: pointer;
  }
  #save-changes{
    background-color: var(--main-orange);

  }
`;
