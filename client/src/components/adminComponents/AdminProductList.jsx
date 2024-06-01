import React,{useState,useEffect} from 'react'
import { AdminProductListContainer } from './styled'
import { api } from '../../services/api'
import AdminListItem from './AdminListItem'

const AdminProductList = () => {
    const [products,setProducts] = useState([])

    async function getProducts(URL){
        let apiUrl = URL + `/items`;
        console.log(apiUrl);
        try{
            const response = await fetch(apiUrl)
            const result = await response.json()
            if(result.length > 0){
                setProducts(result)
            }
        }catch(e){
            console.log(e);
        }
    }

    const deleteItem = async (id,URL) => {
        try {
          const response = await fetch(`${URL}/items/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          if (response.ok) {
            getProducts(URL)
          } else {
            console.error('Failed to delete');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    useEffect(() => {
        getProducts(api)
    },[])
  return (
    <AdminProductListContainer>
        {products.map(elem => (
            <AdminListItem key={elem._id} data={elem} handleDelete={deleteItem}/>
        ))}
    </AdminProductListContainer>
  )
}

export default AdminProductList