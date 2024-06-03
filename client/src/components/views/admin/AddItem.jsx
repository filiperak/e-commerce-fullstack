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
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import Loading from "../../states/Loading";
import Error from "../../states/Error";

const AddItem = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [errorMsg,setErrorMsg] = useState(null);  
  const [imageInputs, setImageInputs] = useState(1);
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
      [name]: name === "price" || name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(newItem));
    try {
      setLoading(true)
      const response = await fetch(`${api}/items/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("failed to add");
      }else{
        setLoading(false)
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
      setLoading(false)
      setErrorMsg(error.message)
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

  const handleAddImageInput = () => {
    setImageInputs(imageInputs + 1);
  };

  const handleRemoveImageInput = (indexToRemove) => {
    setImageInputs(imageInputs - 1);
    setNewItem((prevState) => ({
      ...prevState,
      images: prevState.images.filter((_, index) => index !== indexToRemove),
    }));
  };
  
  if(loading) return <Loading/>
  if(errorMsg !== null) return <Error msg={errorMsg}/>

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
                <span onClick={handleAddImageInput}>Add Image</span>
              </AddImgBtn>
            </AddImgBtnContainer>

            {Array.from({ length: imageInputs }).map((_, index) => (
              <AddImageInput key={index}>
                <input
                  type="text"
                  name={`addimginp-${index}`}
                  id={`addimginp-${index}`}
                  value={newItem.images[index] || ""}
                  onChange={(e) => {
                    const newImages = [...newItem.images];
                    newImages[index] = e.target.value;
                    setNewItem((prevState) => ({
                      ...prevState,
                      images: newImages,
                    }));
                  }}
                />
                <span onClick={() => handleRemoveImageInput(index)}>
                  <RemoveCircleOutlineOutlinedIcon />
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
