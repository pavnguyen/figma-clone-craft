import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import ProductShowcase from "./pages/ProductShowcase";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<ProductShowcase />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;