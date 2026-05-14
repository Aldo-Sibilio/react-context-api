import { createContext, useState } from "react";

// creiamo il context
const BudgetContext = createContext();

// creiamo il provider che wrappa l'app
function BudgetProvider({ children }) {

  // stato booleano per la modalità budget
  const [budgetMode, setBudgetMode] = useState(false);

  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
}

export { BudgetContext, BudgetProvider };