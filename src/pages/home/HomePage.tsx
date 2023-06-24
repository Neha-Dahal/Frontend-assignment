import React from "react";

function HomePage() {
  return (
    <>
      {" "}
      <h2 className="page-title">Home Page</h2>
      <div>
        <a href="/login" className="home-links">Login</a>
        <a href="/register" className="home-links">Register</a>
        <a href="/products/addProduct" className="home-links">Add Product Form</a>
        <a href="/products" className="home-links">View Products</a>
      </div>
    </>
  );
}

export default HomePage;
