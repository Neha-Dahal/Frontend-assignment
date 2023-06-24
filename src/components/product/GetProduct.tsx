import { fetchProducts } from "../services/product";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  prod_name: string;
  quantity: number;
  price: number;
  remark: string;
  description: string;
}

function GetProduct() {
  const [myProducts, setMyProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setMyProducts(data);
      console.log("data", data);
    })();
  }, []);

  return (
    <div className="product-wrapper">
      <h2 className="page-title"> Products List</h2>
      <div className="products-container">
        {myProducts.length === 0 ? (
          <div>No products to show</div>
        ) : (
          myProducts.map((item) => (
            <div key={item.id} className="product-card">
              <h2 className="prod-title">{item.prod_name}</h2>
              <span className="prod-details">{item.price}</span>
              <span>{item.description}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default GetProduct;
