import { useContext } from "react";
import { Link } from "react-router-dom";
import { BudgetContext } from "../context/BudgetContext";

function Navbar() {

  // leggiamo budgetMode e setBudgetMode dal context
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/chi-siamo">Chi Siamo</Link>
      <Link to="/products">Prodotti</Link>

      {/* bottone che attiva/disattiva la modalità budget */}
      <button onClick={() => setBudgetMode(!budgetMode)}>
        {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
      </button>
    </nav>
  );
}


export default Navbar;