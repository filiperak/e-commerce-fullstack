import React, { useState } from "react";
import {
  AddImageInput,
  AddImagesContainer,
  AddImgBtn,
  AddImgBtnContainer,
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
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

const AddItem = () => {
  const navigate = useNavigate();
  const [imgInpCount,setImgInpCount] = useState(1)
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
      [name]: name === "price" || name === "rating" ? parseFloat(value) : value,
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
        throw new Error("failed to add");
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

  const handleRemoveImageInput = (indexToRemove) => {
    setImgInpCount((prevCount) => prevCount.filter((_, index) => index !== indexToRemove));
  };
  return (
    <>
      <ProductNav prev={"admin"} />
      <AdminEditHeader headerData={headerData} />
      <EdititemContainer>
        <EdititemImages>
          <EditContainerTitle>Product Images</EditContainerTitle>
          <EditInputField>
            <label htmlFor="thumbnail">Enter Thumbnail Image URL</label>
            <input
              type="text"
              name="thumbnail"
              id="thumbnail"
              value={newItem.thumbnail}
              onChange={handleChange}
            />
          </EditInputField>
          <AddImagesContainer>
            <AddImgBtnContainer>
              <p>Add Product Images</p>
            <AddImgBtn>
              <AddCircleOutlineOutlinedIcon />
              <span onClick={() => setImgInpCount(imgInpCount+1)}>Add Image</span>
            </AddImgBtn>
            </AddImgBtnContainer>

            {/* <AddImageInput>
              <input type="text" name="addimginp" id="addimginp" />
              <span>
                <RemoveCircleOutlineOutlinedIcon/>
                Remove
                </span>
            </AddImageInput> */}
            {Array.from({ length: imgInpCount }).map((_, index) => (
          <AddImageInput key={index}>
            <input type="text" name={`addimginp-${index}`} id={`addimginp-${index}`} />
            <span onClick={() => handleRemoveImageInput(index)}>
              <RemoveCircleOutlineOutlinedIcon  />
              Remove
            </span>
          </AddImageInput>
        ))}
          </AddImagesContainer>
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
