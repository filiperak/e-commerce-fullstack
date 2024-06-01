import React, { useState } from 'react';
import { AdminContainer, EditContainerTitle, EditDescription, EditInputField, EditProductDetails, EdititemContainer, EdititemImages, EdititemProductData } from './styled';
import { api } from '../../../services/api';
import ProductNav from '../../products/ProductNav';
import AdminEditHeader from '../../adminComponents/AdminEditHeader';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
  const navigate = useNavigate()
  const [newItem, setNewItem] = useState({
    title: "",
    category: "",
    price: null,
    thumbnail: "",
    rating: null,
    images: [],
    description: "",
    brand: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newItem);

    try {
      const response = await fetch(`${api}/items/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error('failed');
      }

      setNewItem({
        title: "",
        category: "",
        price: null,
        thumbnail: "",
        rating: null,
        images: [],
        description: "",
        brand: "",
      });

      console.log('item added');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const handleCancle = () => {
    navigate('/admin')
  }

  return (
  <>
  <ProductNav prev={'admin'}/>
  <AdminEditHeader 
 onCancel={handleCancle} text={'Create New Product'} btnTxt={'Add Product'}/>
  <EdititemContainer>
        <EdititemImages>
          <EditContainerTitle>Product Images</EditContainerTitle>
          123
        </EdititemImages>
        <EdititemProductData>
          <EditContainerTitle>Product Details</EditContainerTitle>
          <EditProductDetails>
            <EditInputField>
              <label htmlFor="title">Product title</label>
              <input type="text" name="title" id="title" />
            </EditInputField>

            <EditInputField>
              <label htmlFor="brand">Product Brand</label>
              <input type="text" name="brand" id="brand"  />
            </EditInputField>
            <EditInputField>
              <label htmlFor="price">Product price</label>
              <input type="text" name="price" id="price"  />
            </EditInputField>
            <EditInputField>
              <label htmlFor="rating">Product rating</label>
              <input type="text" name="rating" id="rating" />
            </EditInputField>
            <EditInputField>
              <label htmlFor="category">Product category</label>
              <input type="text" name="category" id="category" />
            </EditInputField>
          </EditProductDetails>
          <EditDescription>
            <p>Product Description</p>
            <textarea name="description" id="description"></textarea>
          </EditDescription>
        </EdititemProductData>
      </EdititemContainer>

 <AdminContainer onSubmit={handleSubmit} style={{ marginTop: '100px' }}>
      <h3>Create new item</h3>
            <p>Enter item title</p>
      <input
        type="text"
        value={newItem.title}
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
            <p>Enter item category</p>
      <input
        type="text"
        value={newItem.category}
        name="category"
        placeholder="Category"
        onChange={handleChange}
        required
      />
          <p>Enter item price</p>
      <input
        type="number"
        value={newItem.price}
        name="price"
        placeholder="Price"
        onChange={handleChange}
        required
      />
            <p>Enter item thumbnail image</p>

      <input
        type="text"
        value={newItem.thumbnail}
        name="thumbnail"
        placeholder="Thumbnail"
        onChange={handleChange}
        required
      />
                  <p>Enter item rating</p>
      <input
        type="number"
        value={newItem.rating}
        name="rating"
        placeholder="Rating"
        onChange={handleChange}
        required
      />
                  <p>Enter item image</p>
      <input
        type="text"
        value={newItem.images}
        name="images"
        placeholder="Images"
        onChange={handleChange}
        required
      />
                  <p>Enter item description</p>
      <input
        type="text"
        value={newItem.description}
        name="description"
        placeholder="Description"
        onChange={handleChange}
        required
      />
                  <p>Enter item brand</p>
      <input
        type="text"
        value={newItem.brand}
        name="brand"
        placeholder="Brand"
        onChange={handleChange}
        required
      />
      <input type="submit" value="ADD NEW ITEM" id='add-item-btn' />
    </AdminContainer>
  </>
   
  );
};

export default AddItem;

