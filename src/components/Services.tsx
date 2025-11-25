import { Camera, Film, Image, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Wedding Photography',
      description: 'Capture every precious moment of your special day with our artistic wedding photography services.',
      features: ['Full-day coverage', 'Candid shots', 'Traditional poses', 'High-resolution images'],
    },
    {
      icon: Film,
      title: 'Cinematic Films',
      description: 'Transform your wedding into a beautiful cinematic story that you can relive forever.',
      features: ['Professional videography', 'Drone shots', 'Same-day edits', 'Highlight reels'],
    },
    {
      icon: Image,
      title: 'Pre-Wedding Shoots',
      description: 'Creative and romantic pre-wedding photography sessions at stunning locations.',
      features: ['Location scouting', 'Costume planning', 'Multiple looks', 'Album design'],
    },
    {
      icon: Users,
      title: 'Event Coverage',
      description: 'Professional photography for all your special events and celebrations.',
      features: ['Engagement ceremonies', 'Birthday parties', 'Corporate events', 'Family portraits'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive photography and videography services tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant smooth-transition hover:-translate-y-1 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 smooth-transition">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-accent flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Ready to Book Your Session?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your photography needs and create something beautiful together. 
                Get in touch with us today for a free consultation.
              </p>
              <a href="#contact">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 smooth-transition font-medium">
                  Contact Us Now
                </button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
