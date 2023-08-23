import React, { useState, useEffect } from "react";
import api from "./api";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function LoadProducts() {
      try {
        const response = await api.get(
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        );

        if (response.data && response.data.success) {
          setProducts(response.data.products);
        } else {
          console.error("API response format is incorrect.");
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    }

    LoadProducts();
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <p>{product.productName}</p>
          <p>{product.descriptionShort}</p>
          <img src={product.photo} alt={product.productName} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
