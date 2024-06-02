import styled from "styled-components";

export const AdminContainer = styled.form`
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

export const AddNewBtn = styled.div`
  width: 100%;
  text-align: right;
  padding-top: 9px;
  > span {
    padding: 4px;
    border-radius: 4px;
    background-color: var(--main-orange);
    margin: 0 3px;
    cursor: pointer;
    &:hover {
      border: 1.8px solid var(--main-orange);
    }
  }
`;
export const EdititemContainer = styled.div`
  display: flex;
  gap: 4px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 14px;
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
  flex: 0.4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 4px;

  @media (max-width: 600px) {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;
export const EdititemProductData = styled.div`
  flex: 0.6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 4px;
`;
export const EditContainerTitle = styled.div`
  border-bottom: 1px solid var(--main-gray);
  padding: 3px 0;
`;

export const EditProductDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const EditInputField = styled.div`
  flex: 1 1 50%;
  box-sizing: border-box;
  padding: 8px;
  > label {
    font-size: 0.8rem;
    display: block;
  }
  > input {
    width: 100%;
    padding: 4px;
    border: 1px solid var(--main-gray);
    border-radius: 4px;
    display: block;
    margin-top: 4px;
  }
  > input:focus {
    outline: none;
    border: 1px solid var(--main-orange);
  }
`;
export const EditDescription = styled.div`
  padding: 3px 0;
  margin-top: 6px;
  > p {
    margin-top: 0;
  }
  > #description {
    width: 98%;
    padding: 4px;
    border: 1px solid var(--main-gray);
    border-radius: 4px;
    min-height: 80px;
  }
  > #description:focus {
    outline: none;
    border: 1px solid var(--main-orange);
  }
`;

export const AddImagesContainer = styled.div`
  border-top: 1px solid var(--main-gray);
  margin-top: 10px;
`;
export const AddImgBtnContainer = styled.div`
text-align: right;
display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AddImgBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  width: 100px;
  border: 1px solid var(--main-orange);
  border-radius: 20px;
  background-color: var(--main-gray);
  padding: 0 4px;
  margin-left: auto;
  cursor: pointer;
`;
export const AddImageInput = styled.div`
  display: flex;

  padding: 8px;
  > span {
    display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  border: 1px solid var(--main-orange);
  border-radius: 20px;
  background-color: var(--main-gray);
  padding: 0 4px;
  margin-left: auto;
  cursor: pointer;
  }
  .MuiSvgIcon-root{
    font-size: 18px;
  }
  > input {
    width: 100%;
    padding: 4px;
    border: 1px solid var(--main-gray);
    border-radius: 4px;
    display: block;
    margin-top: 4px;
    flex: 0.75;
  }
`;