import { Award, Camera, Heart, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Camera, value: '1000+', label: 'Events Captured' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '5.0', label: 'Google Rating' },
    { icon: Heart, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              About <span className="text-gradient-gold">Manish Pandey Photography</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Where passion meets perfection in wedding photography
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-semibold text-foreground">
                Artistic Story Telling Celebrating YOU!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Manish Pandey Photography Photography, where we infuse magic into your wedding memories, 
                turning them into timeless tales of love and companionship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are a premium wedding photography service based in Nagpur, known for our artistic, 
                professional, and customer-centric approach. We believe in and exist to showcase the 
                most beautiful and heartfelt stories of your life in their true magnificence.
              </p>
              <div className="flex items-center space-x-2 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">
                  5.0 • 195 Google Reviews
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-elegant smooth-transition hover:-translate-y-1"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-serif font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Location Info */}
          <Card className="p-8 bg-cream border-none">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">📍 Location</h4>
                <p className="text-sm text-muted-foreground">
                  Shambhu Nagar, Nagpur, Maharashtra 440030
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">📞 Contact</h4>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:087934 68004" className="hover:text-accent smooth-transition">
                    087934 68004
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">📸 Follow Us</h4>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="https://www.instagram.com/manishpande_photography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent smooth-transition"
                  >
                    @manishpande_photography
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
