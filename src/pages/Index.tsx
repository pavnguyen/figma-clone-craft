import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    });

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Discover the Spirit of the Central Highlands
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Experience centuries of tradition in every sip
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Explore Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="section-title">Discover Our Herbal Liquors</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-6 fade-in-section">
                <div className="w-16 h-16 bg-black rounded-full mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Artisanal Craftsmanship</h3>
                <p className="text-gray-600">Traditional methods passed down through generations</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="section-title">Our Journey Through Time</h2>
          </div>
          <div className="space-y-12">
            {[2023, 2022, 2021, 2020].map((year) => (
              <div key={year} className="fade-in-section">
                <div className="timeline-year">{year}</div>
                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold mb-2">Major Milestone</h3>
                  <p className="timeline-description">
                    Significant achievement or development in our journey
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="section-title">Celebrate the Rich Culture</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in-section">
              <h3 className="text-2xl font-bold mb-4">Festivals</h3>
              <div className="glass-card p-6 h-64"></div>
            </div>
            <div className="fade-in-section">
              <h3 className="text-2xl font-bold mb-4">Ceremonies</h3>
              <div className="glass-card p-6 h-64"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;