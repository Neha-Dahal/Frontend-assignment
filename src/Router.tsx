import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";

import AddProductPage from "./pages/addProduct/AddProduct";
import GetProductPage from "./pages/getProduct/GetProduct";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/home/HomePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="products/addProduct" element={<AddProductPage />} />
        <Route path="products/getProducts" element={<GetProductPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
