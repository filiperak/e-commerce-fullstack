import React, { useContext, useEffect, useState } from "react";
import { ProductsListContainer, ProductsContainer } from "./styled";
import { api } from "../../services/api";
import ProductsListItem from "./ProductsListItem";
import { CategoryContext } from "../../context/CategoryContext";
import { priceHighToLowFunction, priceLowToHighFunction, ratingHighToLowFunction, ratingLowToHighFunction } from "../../utility/sortFunctions";
import Loading from '../states/Loading'
import Error from '../states/Error'
import NoResults from "./NoResults";


const ProductList = ({
  handleNmOfProducts,
  searchInput,
  setProductItems,
  sortVal,
}) => {
  const [products, setProducts] = useState([]);
  const [searchParam, setSearchParam] = useState([]);
  const { categoryState } = useContext(CategoryContext);
  const [loading,setLoading] = useState(false);
  const [errorMsg,setErrorMsg] = useState(null);  
  const [defaultSort,setDefaultSort] = useState([]);

  async function fetchProducts(URL) {
    try {
      setLoading(true)
      let apiUrl = URL;
      if (categoryState.category !== "") {       
        apiUrl += `/items/category/${categoryState.category}`;
      }
      else {
        apiUrl += `/items`;
      }
      const response = await fetch(apiUrl);
      const result = await response.json();

      if (result && result.length > 0) {
        setProducts(result);
        setProductItems(result);
        setDefaultSort(result);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false)
      setErrorMsg(e.message);
      console.log(e.message);
    }
  }


  useEffect(() => {
    fetchProducts(api);
  }, [categoryState]);

  useEffect(() => {
    handleNmOfProducts(products.length);
  }, [products]);

  useEffect(() => {
    setProducts(searchInput);
  }, [searchInput]);

  useEffect(() => {
    const sortProducts = () => {
      switch (sortVal) {
        case 'PRICE_LOW_TO_HIGH':
          return priceLowToHighFunction([...products]);
        case 'PRICE_HIGH_TO_LOW':
          return priceHighToLowFunction([...products]);
        case 'RATING_LOW_TO_HIGH':
          return ratingLowToHighFunction([...products]);
        case 'RATING_HIGH_TO_LOW':
          return ratingHighToLowFunction([...products]);
        case 'FEATURED':
          return [...defaultSort];
        default:
          break;
      }
    };
  
    if (products.length > 0 && sortVal) {
      const sortedProducts = sortProducts();
      setProducts(sortedProducts);
    }
  }, [sortVal]);
  
  
  if(loading) return <Loading/>
  if(errorMsg !== null) return <Error msg={errorMsg}/>

  return (
    <ProductsContainer>
      <ProductsListContainer>
        {products && products.length > 0?
        products.map(elem => (
          <ProductsListItem key={elem.id} data={elem}/>
        )):<NoResults/>
      }
      </ProductsListContainer>
    </ProductsContainer>
  );
};

export default ProductList;

