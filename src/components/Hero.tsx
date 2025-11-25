import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from '@/assets/hero-wedding.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Crystal Sky Photography - Wedding Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Rating Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 animate-fade-in">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium">5.0 • 195 Google Reviews</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in-up leading-tight">
              Capturing Your
              <span className="block text-gradient-gold mt-2">Timeless Moments</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Premier wedding and event photography in Nagpur. Transforming your precious memories into artistic masterpieces.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-400">
              <a href="#portfolio">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 smooth-transition shadow-gold group">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </a>
              <a href="#contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-black hover:bg-white hover:text-primary smooth-transition"
                >
                  Get in Touch
                </Button>
              </a>
            </div>

            {/* Location Badge */}
            <div className="mt-12 text-sm text-white/70 animate-fade-in-up animation-delay-600">
              📍 Based in Nagpur, Maharashtra • Capturing moments worldwide
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
