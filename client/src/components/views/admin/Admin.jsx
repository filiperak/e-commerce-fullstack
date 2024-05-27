import React, { useState } from 'react';
import { AdminContainer } from './styled';
import { api } from '../../../services/api';

const Admin = () => {
  const [newItem, setNewItem] = useState({
    id: null,
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
      const response = await fetch(`${api}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error('Failed to add item');
      }

      setNewItem({
        id: "",
        title: "",
        category: "",
        price: null,
        thumbnail: "",
        rating: null,
        images: [],
        description: "",
        brand: "",
      });

      console.log('Item added successfully');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <AdminContainer onSubmit={handleSubmit} style={{ marginTop: '100px' }}>
      <h3>Create new item</h3>
      <input
        type="number"
        value={newItem.id}
        name="id"
        placeholder="Product ID"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        value={newItem.title}
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        value={newItem.category}
        name="category"
        placeholder="Category"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        value={newItem.price}
        name="price"
        placeholder="Price"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        value={newItem.thumbnail}
        name="thumbnail"
        placeholder="Thumbnail"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        value={newItem.rating}
        name="rating"
        placeholder="Rating"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        value={newItem.images}
        name="images"
        placeholder="Images"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        value={newItem.description}
        name="description"
        placeholder="Description"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        value={newItem.brand}
        name="brand"
        placeholder="Brand"
        onChange={handleChange}
        required
      />
      <input type="submit" value="SEND" />
    </AdminContainer>
  );
};

export default Admin;

