import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import Product from "./pages/Product";
import ProductShowcase from "./pages/ProductShowcase";
import AboutProduct from "./pages/AboutProduct";
import Contact from "./pages/Contact";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductShowcase />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about-product" element={<AboutProduct />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;