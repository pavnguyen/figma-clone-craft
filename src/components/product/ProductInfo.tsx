import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface ProductInfoProps {
  title: string;
  price: string;
  description: string;
}

export const ProductInfo = ({ title, price, description }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    if (quantity + value > 0) {
      setQuantity(quantity + value);
    }
  };

  const handleAddToCart = () => {
    console.log("Adding to cart:", { product: title, quantity });
    toast.success(`Added ${quantity} ${title} to cart`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-2xl font-semibold">{price}</p>
      </div>

      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
        <span className="ml-2 text-sm text-gray-600">(5 Reviews)</span>
      </div>

      <p className="text-gray-600">{description}</p>

      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="px-4 py-2 border-r hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="px-4 py-2 border-l hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <Button onClick={handleAddToCart} className="flex-1">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};