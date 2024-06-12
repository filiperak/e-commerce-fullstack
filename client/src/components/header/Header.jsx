import React, { useContext, useEffect, useRef, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { HeaderContainer, HeaderRigth, Recommended, SearchBar,HeaderIconContainer,HeaderArrow } from "./styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from "react-router-dom";
import OptionsMenu from "../optionsMenu/OptinosMenu";
import { CartContext } from "../../context/CartContext";

const Header = ({ handleInput, productItems }) => {
  const navigate = useNavigate();
  const [filterdProducts, setFilterdProducts] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const {cartState} = useContext(CartContext);

  //handleInput(inputVal);    OBRATI PAZNJU STA SE OVDE DESILO

  useEffect(() => {
    filterProductsFunction();
  }, [inputVal]);

  const filterProductsFunction = () => {
    const query = inputVal.trim().toLowerCase();
    const filterdData = productItems.filter((elem) => (  
      elem.title.toLowerCase().indexOf(query) > -1
       || elem.category.toLowerCase().indexOf(query) > -1
       || elem.brand && elem.brand.toLowerCase().indexOf(query) > -1
      )
    );
    setFilterdProducts(filterdData);
  };

  const inpRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleInput(filterdProducts);
    setIsFocused(false);
    inpRef.current.blur(); 
  }

  return (
    <HeaderContainer>
      <HeaderArrow>
      <Arrow onClick={() => navigate("/")} />
      </HeaderArrow>
      <SearchBar onSubmit={handleSubmit}>
        <OptionsMenu />
        <input
          type="text"
          placeholder="Search products..."
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inpRef}
        />
        <Recommended>
          {isFocused && filterdProducts.length && inputVal.length > 1
            ? filterdProducts.map((elem, ind) => (
                <li
                  key={ind}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setInputVal(elem.title);
                  }}
                  onMouseUp={() => {
                    setIsFocused(false)
                  }}
                >
                  {elem.title}
                </li>
              ))
            : null}
        </Recommended>
        <SearchIcon onClick={handleSubmit}/>
      </SearchBar>
      <HeaderRigth>
        {/* <AdminPanelSettingsIcon onClick={() => navigate('/admin')}/>
        <ShoppingCartIcon onClick={() => navigate("/cart")} />
        <span>{cartState && cartState.length}</span> */}
        <HeaderIconContainer onClick={() => navigate('/')}>
          <PersonOutlineIcon/>
          <p>Profile</p>
        </HeaderIconContainer>
        <HeaderIconContainer onClick={() => navigate('/admin')}>
          <AdminPanelSettingsIcon/>
          <p>Admin</p>
        </HeaderIconContainer>
        <HeaderIconContainer onClick={() => navigate("/cart")}>
          <ShoppingCartIcon/>
          <span>{cartState && cartState.length}</span>
          <p>Cart</p>
        </HeaderIconContainer>
      </HeaderRigth>
    </HeaderContainer>
  );
};

export default Header;
