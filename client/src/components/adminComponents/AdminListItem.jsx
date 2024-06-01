import React from 'react'
import { AdminItemLeft, AdminItemRigth, AdminProductListItemContainer } from './styled'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';


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
          <span>
            <ModeEditIcon/>Edit
          </span>
          </Link>
            <span 
            className='admin-delete-btn'
            onClick={() => handleDelete(data._id,api)}>
              <DeleteIcon/>
              Delete
              </span>
        </AdminItemRigth>
    </AdminProductListItemContainer>
  )
}

export default AdminListItem