import { useState, useEffect } from "react";

function ProductsPage() {

const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Prodotti ricevuti:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Errore durante il caricamento:", error);
      });
  }, []);

  return (
    <div>
      <h1>Prodotti</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ProductsPage;