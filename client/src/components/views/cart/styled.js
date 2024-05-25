import styled from "styled-components";

export const CartContainer = styled.div`
  /* margin-top: var(--main-component-margin); */
  display: flex;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0 4px;
  }
`;
export const GoBack = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const ShoppingCart = styled.div`
  flex: 0.6;
  /* @media(max-width:600px){
    flex: 1;
  } */
`;
export const OrderSummary = styled.div`
  flex: 0.4;
  /* @media(max-width:600px){
    flex: 1;
  } */
`;
export const OrderSummaryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  >h3{
    margin-bottom: 0;
  }
`;
export const HeaderDelBtn = styled.div`
display: flex;
  margin-bottom: 0;
  align-items: end;
  cursor: pointer;
  >p{
    margin-bottom: 0;
  }
  &:hover{
    color: red;
  }
`;

export const ListWrapper = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 4px;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5%;
`;
export const CartItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h5 {
    flex: 0.5;
    margin: 8px 0;
  }
  > h6 {
    flex: 0.2;
    text-align: center;
  }
  > .price-total {
    flex: 0.15;
  }
`;
export const CartList = styled.ul`
  padding: 0;
  margin: 0;
`;
export const CartItemContainer = styled.li`
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;
  border-bottom: 1px solid var(--main-gray);
  padding: 2px;
  height: 10vh;
`;

export const ItemImg = styled.div`
  flex: 0.2;
  overflow: hidden;
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: scale-down;
  }
`;
export const ItemInfo = styled.div`
  flex: 0.3;
  padding: 0 5px;
  > p {
    margin: 0;
  }
  > button {
    background-color: #fff;
    font-weight: 700;
    border: 1px solid var(--main-gray);
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: red;
      color: #fff;
    }
  }
  :nth-child(2) {
    color: #888;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
export const ItemQuantity = styled.div`
  flex: 0.2;
  text-align: center;
`;
export const ItemQuantityContainer = styled.div`
  justify-content: center;
  border: 1px solid var(--main-gray);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  p {
    font-weight: 800;
    padding: 4px;
    display: block;
    height: 20px;
    margin: 0;
  }
  :nth-child(2) {
    flex: 0.6;
  }
  :nth-child(odd) {
    cursor: pointer;
    background-color: var(--main-gray);
    flex: 0.2;
    &:active {
      background-color: var(--main-orange);
      transition: ease-in-out 0.1s;
    }
  }
`;

export const ItemPrice = styled.div`
  flex: 0.15;
  text-align: center;
`;
export const ItemTotal = styled.div`
  flex: 0.15;
  text-align: center;
`;

export const FormContainer = styled.form`
  > h6 {
    font-size: 0.8rem;
    color: gray;
    margin: 0;
    padding: 0%;
    font-weight: 400;
  }
`;
export const AccordianContainer = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`;
export const AccordianHead = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 5px 5px 5px;
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
export const MoreArrowDiv = styled.div`
  cursor: pointer;
`;

export const SummaryList = styled.ul`
  transition: ease-in-out 0.5s;
`;
export const SummaryListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  padding-right: 5px;
  margin: 0;
`;
export const SummaryListItemImg = styled.div`
  position: relative;

  img {
    height: 35px;
    width: 35px;
    object-fit: cover;
    position: relative;
  }
  > p {
    position: absolute;
    min-width: 19px;
    text-align: center;
    border-radius: 50%;
    background-color: var(--main-orange);
    bottom: 0;
    right: 0;
    z-index: 100;
    transform: translate(50%, -50%);
  }
`;
export const ShippingInfo = styled.div`
  > input {
    display: block;
    width: 90%;
    border: 1px solid var(--main-gray);
    border-radius: 4px;
    margin: 3px auto;
    padding: 3px;
  }
  > input:focus {
    outline: none;
  }
  > p {
    font-size: 0.9rem;
    font-weight: 550;
  }
  &:last-child {
    margin-bottom: 5px;
  }
`;
export const PaymentMethodsContainer = styled.div`
border-radius: 4px;
margin-top: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
export const MethodInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
border-bottom: 1px solid var(--main-gray);
padding: 4px;
>label,>input{
  cursor: pointer;
}
`;
export const OrderBtn = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label{
    font-weight: 500;
    color: gray;
    font-size: 0.8rem;
  }
  :nth-child(2){
   border-radius: 3px;
   border: 1px solid var(---main-gray);
   background-color: var(--main-orange);
   color: #fff;
   padding: 5px;
   font-weight: 500;
   cursor: pointer;

   &:active{
    transform: scale(0.8);
    box-shadow:  0 0 5px black;
   }
  }
`;