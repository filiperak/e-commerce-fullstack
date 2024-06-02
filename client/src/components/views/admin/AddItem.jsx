import React, { useState } from "react";
import {
  AdminContainer,
  EditContainerTitle,
  EditDescription,
  EditInputField,
  EditProductDetails,
  EdititemContainer,
  EdititemImages,
  EdititemProductData,
} from "./styled";
import { api } from "../../../services/api";
import ProductNav from "../../products/ProductNav";
import AdminEditHeader from "../../adminComponents/AdminEditHeader";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    title: "",
    category: "",
    price: 0,
    thumbnail: "",
    rating: 0,
    images: [],
    description: "",
    brand: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevState) => ({
      ...prevState,
      [name]: name === 'price' || name === 'rating' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(newItem));
    try {
      const response = await fetch(`${api}/items/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error('failed to add');
      }

      setNewItem({
        title: "",
        category: "",
        price: 0,
        thumbnail: "",
        rating: 0,
        images: [],
        description: "",
        brand: "",
      });

      console.log("Item added");
      navigate("/admin");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleCancel = () => {
    navigate("/admin");
  };

  const headerData = {
    text: "Create New Product",
    btnText: "Add Product",
    cancelFunction: handleCancel,
    submitFunction: handleSubmit,
  };

  return (
    <>
      <ProductNav prev={"admin"} />
      <AdminEditHeader headerData={headerData} />
      <EdititemContainer>
        <EdititemImages>
          <EditContainerTitle>Product Images</EditContainerTitle>
          {/* Additional UI for adding images can go here */}
        </EdititemImages>
        <EdititemProductData>
          <EditContainerTitle>Product Details</EditContainerTitle>
          <EditProductDetails>
            <EditInputField>
              <label htmlFor="title">Product Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={newItem.title}
                onChange={handleChange}
              />
            </EditInputField>
            <EditInputField>
              <label htmlFor="brand">Product Brand</label>
              <input
                type="text"
                name="brand"
                id="brand"
                value={newItem.brand}
                onChange={handleChange}
              />
            </EditInputField>
            <EditInputField>
              <label htmlFor="price">Product Price</label>
              <input
                type="text"
                name="price"
                id="price"
                value={newItem.price}
                onChange={handleChange}
              />
            </EditInputField>
            <EditInputField>
              <label htmlFor="rating">Product Rating</label>
              <input
                type="text"
                name="rating"
                id="rating"
                value={newItem.rating}
                onChange={handleChange}
              />
            </EditInputField>
            <EditInputField>
              <label htmlFor="category">Product Category</label>
              <input
                type="text"
                name="category"
                id="category"
                value={newItem.category}
                onChange={handleChange}
              />
            </EditInputField>
          </EditProductDetails>
          <EditDescription>
            <p>Product Description</p>
            <textarea
              name="description"
              id="description"
              value={newItem.description}
              onChange={handleChange}
            />
          </EditDescription>
        </EdititemProductData>
      </EdititemContainer>
    </>
  );
};

export default AddItem;
