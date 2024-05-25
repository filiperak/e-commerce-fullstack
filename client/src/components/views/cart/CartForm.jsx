import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { totalSumFunc } from "../../../utility/totalSumFunc";
import {
  FormContainer,
  AccordianHead,
  MoreArrowDiv,
  LeftContainer,
  SummaryList,
  AccordianContainer,
  SummaryListItem,
  SummaryListItemImg,
  ShippingInfo,
  PaymentHead,
  PaymentMethodsContainer,
  MethodInput,
  CardContainer,
  OrderBtn,
} from "./styled";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SettingsAccessibilityOutlinedIcon from "@mui/icons-material/SettingsAccessibilityOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CreditCardForm from "../../../assets/CreditCardForm";
const CartForm = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const [showMore, setShowMore] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleShow = (currentId) => {
    const index = showMore.indexOf(currentId);
    if (index === -1) {
      setShowMore([...showMore, currentId]);
    } else {
      setShowMore(showMore.filter((id) => id !== currentId));
    }
  };
  const handleChange = (e) => setPaymentMethod(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    cartDispatch({type:'EMPTY_CART'})
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <AccordianContainer>
        <AccordianHead onClick={() => handleShow(1)}>
          <LeftContainer>
            <LocalMallOutlinedIcon />
            <p>Show order summary</p>
            {showMore.includes(1) ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </LeftContainer>
          <p>{`Total: $${totalSumFunc(cartState)}`}</p>
        </AccordianHead>
        {showMore.includes(1) && (
          <SummaryList>
            {cartState.map((elem) => (
              <SummaryListItem key={elem.id}>
                <SummaryListItemImg>
                  <img src={elem.img} />
                  <p>{elem.quantity}</p>
                </SummaryListItemImg>
                <p>{elem.title}</p>
                <p>${elem.price}</p>
              </SummaryListItem>
            ))}
          </SummaryList>
        )}
      </AccordianContainer>
      <h3>Customer information</h3>
      <h6>Please enter user information and shipping address.</h6>
      <AccordianContainer>
        <AccordianHead onClick={() => handleShow(2)}>
          <LeftContainer>
            <SettingsAccessibilityOutlinedIcon />
            <p>Enter customer and shipping info</p>
          </LeftContainer>
          {showMore.includes(2) ? (
            <KeyboardArrowUpOutlinedIcon />
          ) : (
            <KeyboardArrowDownOutlinedIcon />
          )}
        </AccordianHead>
        {showMore.includes(2) && (
          <ShippingInfo>
            <p>Customer info</p>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <p>Shipping details</p>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Address" />
          </ShippingInfo>
        )}
      </AccordianContainer>
      <h3>Payment method</h3>
      <h6>
        All transactions are secure and encripted. Credit cart information is
        never stored.
      </h6>
      <PaymentMethodsContainer>
        <MethodInput>
          <label htmlFor="card">
            <input
              type="radio"
              name="Payment-method"
              id="card"
              value="card"
              onClick={handleChange}
              checked={paymentMethod === "card"}
            />
            Credit Card
          </label>
          <CreditCardOutlinedIcon />
        </MethodInput>
        <MethodInput>
          <label htmlFor="cash">
            <input
              type="radio"
              name="Payment-method"
              id="cash"
              value="cash"
              onClick={handleChange}
              checked={paymentMethod === "cash"}
            />
            Cash
          </label>
          <LocalAtmIcon />
        </MethodInput>
        {paymentMethod === "card" && <CreditCardForm />}
      </PaymentMethodsContainer>
      <OrderBtn>
        <label htmlFor="checkbox">
          <input type="checkbox" name="" id="checkbox" />Subscribe to our newsleter
        </label>
        <input type="submit" value="Complete order" />
      </OrderBtn>
    </FormContainer>
  );
};

export default CartForm;
