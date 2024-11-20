export const ProductDetails = () => {
  return (
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
  );
};