import styled from "styled-components";

export const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
  a {
    text-decoration: none;
    color: #000;
    display: block;
  }
`;
export const ProductsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`;

export const ProductsListItemContainer = styled.div`
  width: 250px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  > a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 60%;
  }
  @media (max-width: 600px) {
    width: 45%;
    margin-left: 1%;
    margin-right: 1%;
    height: auto;
  }
  @media (max-width: 375px) {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    height: auto;
  }
`;

export const ProductListItemInfo = styled.div`
  flex: 0.5;
  padding: 3%;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  > span {
    color: grey;
    font-size: 0.85rem;
    font-weight: 700;
  }
`;
export const SortBar = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 3%;
  margin-bottom: 8px;
  > p {
    font-size: 0.8em;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }
`;
export const SortSelect = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: var(--main-gray);
  font-size: 0.7em;
  align-items: center;
  padding: 0 3px;

  > select {
    height: fit-content;
    border: none;
    background-color: var(--main-gray);
    font-weight: 600;
    text-align: center;
    display: block;
    outline: none;
    > option {
      background-color: #fff;
    }
  }

  > p {
    margin: 5px 0;
  }
`;
export const ProductNavbar = styled.nav`
  display: flex;
  padding: 3px 0 3px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: var(--main-component-margin);
  height: 23.6px;
  align-items: center;
  > .MuiSvgIcon-root {
    cursor: pointer;
  }
`;
export const NavLinks = styled.nav`
  color: #777;
  font-size: 0.8rem;
  > span {
    cursor: pointer;
    margin: 0 3px;
  }
`;
export const NoResultsContainer = styled.div`
  margin-top: 100px;
  height: 100%;
  width: 100vw;
  text-align: center;
  opacity: 40%;
  > svg {
    height: 20%;
    width: 20%;
    color: #000;
  }
`;
