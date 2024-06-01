import React, { useContext } from "react";
import { NavLinks, ProductNavbar } from "./styled";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { CategoryContext } from "../../context/CategoryContext";
const ProductNav = ({ productName, prev }) => {
  const { categoryState } = useContext(CategoryContext);
  const navigate = useNavigate();
  return (
    <ProductNavbar>
      <KeyboardBackspaceIcon onClick={() => navigate(-1)} />
      <NavLinks>
        <span onClick={() => navigate("/")}>{"Home >"}</span>
        {prev != "" ? (
          <span onClick={() => navigate(`/${prev}`)}>{`${prev} >`}</span>
        ) : null}
        {categoryState.category.length ? (
          <span>{`${categoryState.category}>`}</span>
        ) : null}
        <span>{productName}</span>
      </NavLinks>
    </ProductNavbar>
  );
};

export default ProductNav;
