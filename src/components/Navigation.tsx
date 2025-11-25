import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-gradient-gold smooth-transition group-hover:scale-105">
              Crystal Sky
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent smooth-transition relative group text-white"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent smooth-transition group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:08412850833">
              <Button variant="ghost" size="sm" className="smooth-transition hover:text-accent text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </a>
            <a href="https://www.instagram.com/crystalskyphotography_/" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 smooth-transition">
                <Instagram className="w-4 h-4 mr-2" />
                Follow
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent smooth-transition"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-foreground hover:text-accent smooth-transition text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border ">
              <a href="tel:08412850833">
                <Button variant="outline" size="sm" className="w-full smooth-transition text-white">
                  <Phone className="w-4 h-4 mr-2 " />
                  Call Us
                </Button>
              </a>
              <a href="https://www.instagram.com/crystalskyphotography_/" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow on Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
