import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import { EdititemContainer, EdititemImages, EdititemProductData } from './styled'

const Edititem = () => {
  const {_id} = useParams()
  const [item,setItem] = useState({})
  async function getProducts(){
    try{
      const response = await fetch(`${api}/items/${_id}`)
      const result = await response.json()
      if(result){
        setItem(result);
      }

    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts()
  },[])
  return (
    <EdititemContainer>
      <EdititemImages>

      </EdititemImages>
      <EdititemProductData>
        <label htmlFor="title">Edit Product title</label>
        <input type="text" name="title" id="title" value={item.title} />

        <label htmlFor="brand">Edit Product Brand</label>
        <input type="text" name="brand" id="brand" value={item.brand} />

        <label htmlFor="price">Edit Product price</label>
        <input type="text" name="price" id="price" value={item.price} />
        
      </EdititemProductData>
    </EdititemContainer>
  )
}

export default Edititem