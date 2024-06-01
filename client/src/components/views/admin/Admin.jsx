import React from "react";
import { AddNewBtn, AdminContainer } from "./styled";
import AdminProductList from "../../adminComponents/AdminProductList";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductNav from "../../products/ProductNav";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProductNav productName={""} prev={'admin'}/>
      <AdminContainer>
        <AddNewBtn>
          <span onClick={() => navigate("/admin/new")}>
          Add New Item
          </span>
          </AddNewBtn>
        <AdminProductList />
      </AdminContainer>
    </>
  );
};

export default Admin;
