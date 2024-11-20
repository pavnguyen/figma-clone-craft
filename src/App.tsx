import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductShowcase from "./pages/ProductShowcase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<ProductShowcase />} />
      </Routes>
    </Router>
  );
}

export default App;