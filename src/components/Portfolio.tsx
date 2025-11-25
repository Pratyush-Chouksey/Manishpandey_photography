import { useState } from 'react';
import { Card } from '@/components/ui/card';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const portfolioItems = [
    {
      image: portfolio1,
      title: 'Bridal Portraits',
      category: 'Wedding Photography',
    },
    {
      image: portfolio2,
      title: 'Pre-Wedding Shoot',
      category: 'Couple Photography',
    },
    {
      image: portfolio3,
      title: 'Wedding Ceremony',
      category: 'Candid Moments',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the moments we've captured and the stories we've told
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer border-none shadow-elegant hover:shadow-gold smooth-transition"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover smooth-transition group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent smooth-transition ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-6 text-white smooth-transition transform ${
                      hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-accent font-medium mb-1">{item.category}</p>
                    <h3 className="text-xl font-serif font-semibold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of our work?
            </p>
            <a
              href="https://www.instagram.com/crystalskyphotography_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-accent/80 smooth-transition font-medium"
            >
              Visit our Instagram
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
