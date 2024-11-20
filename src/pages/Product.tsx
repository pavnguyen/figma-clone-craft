import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/lovable-uploads/0897167f-dc01-4d5e-9dd4-5c68222e7307.png",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  const handleQuantityChange = (value: number) => {
    if (quantity + value > 0) {
      setQuantity(quantity + value);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images[selectedImage]}
              alt="Herbal Liquor"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.slice(1).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx + 1)}
                className={`aspect-square bg-gray-100 rounded-lg overflow-hidden ${
                  selectedImage === idx + 1 ? "ring-2 ring-black" : ""
                }`}
              >
                <img src={img} alt={`Product view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Herbal Liquor</h1>
            <p className="text-2xl font-semibold">$55</p>
          </div>

          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="ml-2 text-sm text-gray-600">(5 Reviews)</span>
          </div>

          <p className="text-gray-600">
            Experience the finest herbal liquor, aged to perfection using traditional methods. 
            Each bottle is carefully crafted to deliver a unique taste that captures the essence 
            of the Central Highlands.
          </p>

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
            <Button className="flex-1">Add to Cart</Button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-12 mb-16">
        <section>
          <h2 className="text-2xl font-bold mb-4">Discover the Rich Flavors of Central Highlands Herbal Liquor</h2>
          <p className="text-gray-600">
            Our herbal liquor is crafted using traditional methods, passed down through generations. 
            Each batch is carefully monitored to ensure the perfect balance of flavors, resulting 
            in a unique taste that embodies the essence of Vietnam's rich culture.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">Ingredients</h3>
            <p className="text-gray-600">
              Made from carefully selected herbs and spices, each ingredient is chosen for its unique 
              properties and contribution to the final blend.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Production</h3>
            <p className="text-gray-600">
              Our traditional production process ensures that every bottle meets our high standards 
              of quality and taste.
            </p>
          </div>
        </section>
      </div>

      {/* Customer Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Customer Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The rich flavors and unique ingredients used in this herbal liquor make it a truly 
                exceptional experience."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;