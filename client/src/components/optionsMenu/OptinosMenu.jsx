import React, { useContext, useEffect, useState } from "react";
import { CategoryContainer, OptionsMenuContainer } from "./styled";
import { api } from "../../services/api";
import { dashRemoverFunc } from "../../utility/dashRemoverFunc";
import { CategoryContext } from "../../context/CategoryContext";


const OptionsMenu = () => {
  const [options, setOptions] = useState([]);
  const {categoryState,categoryDispatch} = useContext(CategoryContext)

  useEffect(() => {
    fetchOptions(api);
  }, []);
  async function fetchOptions(url) {
    try {
      const response = await fetch(`${url}/category`);
      const result = await response.json();
      if (result && result[0].categories.length > 0) {
        setOptions(result[0].categories);
        console.log(options);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (event) => {
    categoryDispatch({
      type:'SET_CATEGORY',category:event.target.value
    })
  };
  return (
    <OptionsMenuContainer onChange={handleChange}>
      <option value="">All</option>
      {options.map((elem, index) => (
        <option key={index} 
        value={elem}
>
          {dashRemoverFunc(elem)}
        </option>
      ))}
    </OptionsMenuContainer>
  );
};

export default OptionsMenu;

