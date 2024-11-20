import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutProduct = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Logo</Link>
        <Button asChild variant="outline">
          <Link to="/products">Explore</Link>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Herbal Liquor Origins</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover the rich heritage of our herbal liquor, a masterful blend crafted from herbs found in Vietnam's Central Highlands. Each bottle tells a story of tradition and excellence.
          </p>
          <div className="flex gap-4">
            <Button>Learn More</Button>
            <Button variant="outline">See More</Button>
          </div>
        </div>
      </section>

      {/* The Art of Crafting Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">The Art of Crafting Herbal Liquor</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our master liquor makers combine centuries-old traditions with modern techniques to create a unique blend. Every bottle represents years of expertise and dedication to the craft.
          </p>
          <div className="aspect-video bg-gray-100 rounded-lg mb-8">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
              alt="Crafting Process"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Natural Ingredients Section */}
      <section className="container mx-auto px-4 py-16 bg-secondary">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Discover the Power of Nature's Ingredients</h2>
          <p className="text-lg text-gray-600 mb-12">
            We carefully select natural ingredients from Central Highlands that bring unique flavors and properties to our herbal liquor.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-gray-600">Ingredients are carefully selected to ensure the highest quality</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold">Natural Processing</h3>
              <p className="text-gray-600">Pure and natural processing methods for authentic flavors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Flavors Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Discover the Unique Flavors of Central Highlands Herbal Liquor</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our herbal liquor offers a distinctive blend of traditional herbs and spices, creating a unique taste that captures the essence of Vietnam's highlands.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              A harmonious blend of carefully selected mountain herbs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Traditional recipes passed down through generations
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Unique flavors that reflect our mountain heritage
            </li>
          </ul>
        </div>
      </section>

      {/* Sustainable Craftsmanship Section */}
      <section className="container mx-auto px-4 py-16 bg-secondary">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Sustainable Craftsmanship: Eco-Friendly Practices in Our Herbal Liquor Production</h2>
          <p className="text-lg text-gray-600 mb-8">
            We prioritize our commitment to sustainable crafting methods, ensuring that our production process respects both tradition and the environment.
          </p>
          <div className="aspect-video bg-gray-100 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
              alt="Sustainable Production"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-3xl font-bold mb-6">Experience the Essence of Heritage</h2>
          <p className="text-lg text-gray-600 mb-8">
            Every drop of our herbal liquor tells a story of heritage, bringing you a taste of Central Highland traditions.
          </p>
          <div className="flex justify-center gap-4">
            <Button>EXPLORE</Button>
            <Button variant="outline">Details</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProduct;