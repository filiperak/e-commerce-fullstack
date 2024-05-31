import React from 'react'
import { AdminContainer } from './styled'
import AdminProductList from '../../adminComponents/AdminProductList'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()
  return (
    <AdminContainer>
      <Button onClick={() => navigate('/admin/new')}>Add New Item</Button>
     <AdminProductList/>
    </AdminContainer>
  )
}

export default Admin