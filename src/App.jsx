import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    // BrowserRouter abilita il routing dell'app
    <BrowserRouter>
      <Navbar />
      {/* Routes contiene tutte le rotte dell'app */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamoPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;