import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import {
  EditContainerTitle,
  EditDescription,
  EditHeader,
  EditInputField,
  EditProductDetails,
  EdititemContainer,
  EdititemImages,
  EdititemProductData,
} from "./styled";
import ProductNav from "../../products/ProductNav";
import AdminEditHeader from "../../adminComponents/AdminEditHeader";

const Edititem = () => {
  const { _id } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate()
  async function getProducts() {
    try {
      const response = await fetch(`${api}/items/${_id}`);
      const result = await response.json();
      if (result) {
        setItem(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleCancle = () => {
    navigate('/admin')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: name === 'price' || name === 'rating' ? parseFloat(value) : value,
    }));
  };

  const submitChanges = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${api}/items/${_id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(item)
      })

      if(!response.ok){
        throw new Error('failed to add')
      }
      navigate('/admin')
    }catch(error){
      console.log(error);
    }
  }


  const headerData = {
    text:"Edit Product",
    btnText:'Save Changes',
    cancelFunction:handleCancle,
    submitFunction:submitChanges
  }
  return (
    <>
      <ProductNav productName={item.title} prev={'admin'} />
    <AdminEditHeader headerData={headerData}/>
      <EdititemContainer>
        <EdititemImages>
          <EditContainerTitle>Edit Product Images</EditContainerTitle>
          123
        </EdititemImages>
        <EdititemProductData>
          <EditContainerTitle>Edit Product Details</EditContainerTitle>
          <EditProductDetails>
            <EditInputField>
              <label htmlFor="title">Edit Product title</label>
              <input type="text" name="title" id="title" value={item.title}  onChange={handleChange}/>
            </EditInputField>

            <EditInputField>
              <label htmlFor="brand">Edit Product Brand</label>
              <input type="text" name="brand" id="brand" value={item.brand}  onChange={handleChange}/>
            </EditInputField>
            <EditInputField>
              <label htmlFor="price">Edit Product price</label>
              <input type="text" name="price" id="price" value={item.price}  onChange={handleChange}/>
            </EditInputField>
            <EditInputField>
              <label htmlFor="rating">Edit Product rating</label>
              <input type="text" name="rating" id="rating" value={item.rating}  onChange={handleChange}/>
            </EditInputField>
            <EditInputField>
              <label htmlFor="category">Edit Product category</label>
              <input type="text" name="category" id="category" value={item.category}  onChange={handleChange}/>
            </EditInputField>
          </EditProductDetails>
          <EditDescription>
            <p>Edit Product Description</p>
            <textarea name="description" id="description" value={item.description}  onChange={handleChange}></textarea>
          </EditDescription>
        </EdititemProductData>
      </EdititemContainer>
    </>
  );
};

export default Edititem;
