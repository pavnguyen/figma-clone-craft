import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductShowcase = () => {
  const products = [
    {
      title: "Artisanal Craftsmanship and Natural Ingredients",
      description: "Every bottle tells a story of tradition and quality.",
      image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?q=80&w=800",
    },
    {
      title: "Health Benefits of Our Herbal Ingredients",
      description: "Natural herbs with health benefits for your wellbeing.",
      image: "https://images.unsplash.com/photo-1512676726755-dbe38421fbcc?q=80&w=800",
    },
    {
      title: "Experience the Spirit of the Central Highlands",
      description: "A rich blend reflecting the beauty of Vietnam.",
      image: "https://images.unsplash.com/photo-1523246224990-496e9a19113a?q=80&w=800",
    },
  ];

  const seasonalVariants = {
    uniqueIngredients: {
      title: "Unique Ingredients",
      description: "Discover our rare and exclusive herbs and spices that create our signature flavors.",
    },
    artisanalPackaging: {
      title: "Artisanal Packaging",
      description: "Each bottle is carefully crafted to reflect the premium quality within.",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Discover Our Unique Herbal Liquor Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-up">
            Light up your selection of premium herbal liquors, each crafted with care and tradition. Discover our
            herbal liquor Central Highlands flavor profile satisfying the essence of our rich ancestral legacy.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Crafting Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Discover the Art of Crafting Our Premium Herbal Liquor
            </h2>
            <p className="text-gray-600 mb-8">
              Our herbal liquor is a celebration of the Central Highlands crafting pure
              tradition. Each bottle represents years of expertise, combining the finest
              ingredients and tradition to provide a unique taste experience.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                Herbal-infused with care and tradition
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                Time-tested blend for rich highlights
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                Experience the taste of a timeless craft
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800"
              alt="Crafting Process"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Seasonal Variants */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Explore Our Exclusive Seasonal Variants
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(seasonalVariants).map(([key, variant]) => (
              <Card key={key} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{variant.title}</h3>
                <p className="text-gray-600 mb-6">{variant.description}</p>
                <Button variant="outline">
                  Read More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-medium italic mb-8">
            "The herbal liquor from the Central Highlands is unlike anything I've
            ever tasted. Its natural flavors and smooth finish make it a must-try for
            any spirit enthusiast."
          </blockquote>
          <cite className="text-gray-600">- John Doe, Beverage Review Digest</cite>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcase;