import { useParams } from "react-router-dom";
import { ImageGallery } from "@/components/product/ImageGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductDetails } from "@/components/product/ProductDetails";
import { CustomerTestimonials } from "@/components/product/CustomerTestimonials";

type ProductId = "1" | "2" | "3";

interface Product {
  title: string;
  price: string;
  description: string;
  images: string[];
}

type Products = {
  [K in ProductId]: Product;
};

const Product = () => {
  const { id } = useParams<{ id: string }>();

  const products: Products = {
    "1": {
      title: "Traditional Herbal Liquor",
      price: "$55",
      description: "Our signature blend of traditional herbs and spices, crafted using age-old recipes.",
      images: [
        "https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg",
        "https://images.pexels.com/photos/5947028/pexels-photo-5947028.jpeg",
        "https://images.pexels.com/photos/5947024/pexels-photo-5947024.jpeg",
        "https://images.pexels.com/photos/6542680/pexels-photo-6542680.jpeg",
      ]
    },
    "2": {
      title: "Premium Reserve Blend",
      price: "$75",
      description: "Aged to perfection with rare mountain herbs, delivering an exceptional taste experience.",
      images: [
        "https://images.pexels.com/photos/6542680/pexels-photo-6542680.jpeg",
        "https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg",
        "https://images.pexels.com/photos/5947024/pexels-photo-5947024.jpeg",
        "https://images.pexels.com/photos/5947028/pexels-photo-5947028.jpeg",
      ]
    },
    "3": {
      title: "Highland Special Edition",
      price: "$95",
      description: "Limited release featuring exclusive highland ingredients, perfect for special occasions.",
      images: [
        "https://images.pexels.com/photos/5947028/pexels-photo-5947028.jpeg",
        "https://images.pexels.com/photos/6542680/pexels-photo-6542680.jpeg",
        "https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg",
        "https://images.pexels.com/photos/5947024/pexels-photo-5947024.jpeg",
      ]
    }
  };

  const product = id ? products[id as ProductId] : null;

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <ImageGallery images={product.images} title={product.title} />
        <ProductInfo 
          title={product.title} 
          price={product.price} 
          description={product.description} 
        />
      </div>
      <ProductDetails />
      <CustomerTestimonials />
    </div>
  );
};

export default Product;