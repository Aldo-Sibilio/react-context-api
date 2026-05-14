import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BudgetContext } from "../context/BudgetContext";

function ProductsPage() {

  const [products, setProducts] = useState([]);

  // leggiamo budgetMode dal context
  const { budgetMode } = useContext(BudgetContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Errore durante il caricamento:", error);
      });
  }, []);

  // se budgetMode è true mostriamo solo i prodotti con price <= 30
  const filteredProducts = budgetMode
    ? products.filter((product) => product.price <= 30)
    : products;

  return (
    <div>
      <h1>Prodotti</h1>
      <div>
        {filteredProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} €</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;