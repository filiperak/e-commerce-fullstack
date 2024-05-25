import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import './styles.css'
const CreditCardForm = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };
  return (
    <div className="card-container">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form>
        <div className="card-number">
          <h6>Card number</h6>
          <input
          id="card-number-inp"
            type="number"
            name="number"
            placeholder="**** **** **** ****"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
        </div>
        <div className="card-name-date-ccv">
          <div className="first">
          <h6>Card holder</h6>
          <input
            type="text"
            name="name"
            placeholder="savo bacic"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          </div>
          <div className="second">
          <h6>EXP.Date</h6>
            <input
              type="number"
              name="expiry"
              placeholder="3/26"
              pattern="\d\d/\d\d"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            </div>
            <div className="third">
            <h6>ccv</h6>
            <input
              type="number"
              name="cvc"
              placeholder="***"
              pattern="\d{3,4}"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            </div>
            </div>
      </form>
    </div>
  );
};
export default CreditCardForm;
