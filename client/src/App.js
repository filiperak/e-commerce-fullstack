import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/views/home/Home";
import Cart from "./components/views/cart/Cart";
import { CategoryContextProvider } from "./context/CategoryContext";
import { useState } from "react";
import SingleProduct from "./components/views/singleProduct/SingleProduct";
import CartContextProvider from "./context/CartContext";

function App() {
  const [searchInput, setSearchInput] = useState([]);
  const [productItems, setProductItems] = useState([]);
  return (
    <div className="App">
      <Router>
        <CartContextProvider>
          <CategoryContextProvider>
            <Header handleInput={setSearchInput} productItems={productItems} />
            <Routes>
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/"
                element={
                  <Home
                    searchInput={searchInput}
                    setProductItems={setProductItems}
                  />
                }
              />
              <Route path="/product/:productId" element={<SingleProduct />} />
            </Routes>
          </CategoryContextProvider>
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
