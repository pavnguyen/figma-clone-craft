import { Star } from "lucide-react";

export const CustomerTestimonials = () => {
  return (
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
  );
};