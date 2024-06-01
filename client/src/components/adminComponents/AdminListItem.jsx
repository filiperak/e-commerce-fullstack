import React from 'react'
import { AdminItemLeft, AdminItemRigth, AdminProductListItemContainer } from './styled'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'


const AdminListItem = ({data,handleDelete}) => {
  const navigate = useNavigate();


  return (
    <AdminProductListItemContainer>
        <AdminItemLeft>
            <img src={data.image} alt={data.title} />
            <p>{data.title}</p>
            <p>{`$${data.price}`}</p>
        </AdminItemLeft>
        <AdminItemRigth>
          <Link to={`/admin/edit/${data._id}`}>
          <Button>Edit</Button>
          </Link>
            <Button onClick={() => handleDelete(data._id,api)}>Delete</Button>
        </AdminItemRigth>
    </AdminProductListItemContainer>
  )
}

export default AdminListItem