import styled from "styled-components";

export const SingleProductContainer = styled.div`
  /* margin-top: var(--main-component-margin); */
  display: flex;
  max-width: 1100px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  height: 70vh;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 1%;
    margin-right: 1%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;
export const SingleProductData = styled.div`
  flex: 0.6;
  margin: 12px;
  > span {
    color: gray;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;
export const PriceAndRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
  > div > p {
    font-size: 0.7rem;
  }
  :first-child {
    color: var(--main-orange);
    font-size: 1.1em;
    font-weight: 400;
  }
`;
export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    font-weight: 800;
    padding: 4px;
    border: 2px solid #000;
    text-align: center;
  }
  span:nth-child(1) {
    width: 20px;
    border-radius: 3px 0 0 3px;
    border-right: none;
    cursor: pointer;
    background-color: var(--main-orange);
  }
  span:nth-child(1):active,  span:nth-child(3):active{
    padding: 3px;
  }

  span:nth-child(3) {
    width: 20px;
    border-radius: 0 3px 3px 0;
    border-left: none;
    cursor: pointer;
    background-color: var(--main-orange);

  }
  span:nth-child(even) {
    width: 50px;
  }
  button {
    border: none;
    background-color: #000;
    color: #fff;
    font-weight: 800;
    padding: 6px;
    text-align: center;
    margin-left: 2%;
    border-radius: 2px;
    cursor: pointer;
  }
  button:active{
    padding: 7px;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }

`;
