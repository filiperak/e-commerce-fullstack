import React, { useState } from "react";
import { SortBar, SortSelect } from "./styled";

const Sort = ({ numOfProducts , setSortVal,sortVal}) => {
  const handleChange = (e) => {
    e.preventDefault();
    setSortVal(e.target.value)
  }
  return (
    <SortBar>
      <p>{`${numOfProducts} out of 194 products`}</p>
      <SortSelect>
        <p>Sort by:</p>
        <select name="selectSort" value={sortVal} onChange={handleChange}>
          <option selected hidden>
            Featured
          </option>
          <option value="FEATURED">Featured</option>
          <option value="PRICE_LOW_TO_HIGH">Price: Low to High</option>
          <option value="PRICE_HIGH_TO_LOW">Price: High to Low</option>
          <option value="RATING_LOW_TO_HIGH">Rating: Low to High</option>
          <option value="RATING_HIGH_TO_LOW">Rating: High to Low</option>
        </select>
      </SortSelect>
    </SortBar>
  );
};

export default Sort;
