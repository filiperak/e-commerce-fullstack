import React from 'react'
import { AdminContainer } from './styled'
import { useState } from 'react'


const Admin = () => {
    const [newItem,setNewItem] = useState({
        title:"",
        category:"",
        price:null,
        thumbnail:"",
        rating:null,
        images:"",
        description:"",
        brand:"",
        id:null,
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setNewItem(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newItem);
        setNewItem({
            title: "",
            category: "",
            price: null,
            thumbnail: "",
            rating: null,
            images: "",
            description: "",
            brand: "",
            id: null,
          });
    }
  return (
    <AdminContainer onSubmit={handleSubmit} style={{marginTop:'100px'}}>Enter new item info
    <input type="text" value={newItem.title} name='title' placeholder='title' onChange={handleChange}/>
    <input type="text" value={newItem.category} name='category' placeholder='category' onChange={handleChange}/>
    <input type="number" value={newItem.price} name='price' placeholder='price'/>
    <input type="text" value={newItem.thumbnail} name='thumbnail' placeholder='thumbnail' onChange={handleChange}/>
    <input type="number" value={newItem.rating} name='rating' placeholder='rating' onChange={handleChange}/>
    <input type="text" value={newItem.images} name='images' placeholder='images' onChange={handleChange}/>
    <input type="text" value={newItem.description} name='description' placeholder='description' onChange={handleChange}/>
    <input type="text" value={newItem.brand} name='brand' placeholder='brand' onChange={handleChange}/>
    <input type="number" value={newItem.id} name='id' placeholder='id' onChange={handleChange}/>
    <input type="submit" value="SEND" />
    </AdminContainer>
  )
}

export default Admin