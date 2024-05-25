import React, { useContext } from "react";
import {
  CartItemContainer,
  ItemInfo,
  ItemPrice,
  ItemQuantity,
  ItemTotal,
  ItemImg,
  ItemQuantityContainer,
} from "./styled";
import { CartContext } from "../../../context/CartContext";

const CartListItem = ({ productInfo }) => {
  const { cartDispatch } = useContext(CartContext);
  const handleRemove = () => {
    cartDispatch({ type: "REMOVE_FROM_CART", id: productInfo.id });
  };
  const addQuantity = () => {
    cartDispatch({ type: "ADD_QUANTITY", id: productInfo.id });
  };
  const removeQuantity = () => {
    cartDispatch({ type: "REMOVE_QUANTITY", id: productInfo.id });
  };
  return (
    <CartItemContainer>
      <ItemImg>
        <img src={productInfo.img} alt="product image" />
      </ItemImg>
      <ItemInfo>
        <p>{productInfo.title}</p>
        <p>{productInfo.brand}</p>
        <button onClick={handleRemove}>REMOVE</button>
      </ItemInfo>
      <ItemQuantity>
        <ItemQuantityContainer>
          <p onClick={removeQuantity}>-</p>
          <p>{productInfo.quantity}</p>
          <p onClick={addQuantity}>+</p>
        </ItemQuantityContainer>
      </ItemQuantity>
      <ItemPrice>{`$${productInfo.price}`}</ItemPrice>
      <ItemTotal>
        {`$${Number(productInfo.price) * Number(productInfo.quantity)}`}
      </ItemTotal>
    </CartItemContainer>
  );
};

export default CartListItem;
