import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gradient-gold mb-4">
              Crystal Sky Photography
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Capturing your timeless moments with artistic excellence. 
              Based in Nagpur, serving clients worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-accent smooth-transition text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:08412850833"
                  className="flex items-start space-x-2 text-primary-foreground/80 hover:text-accent smooth-transition text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>084128 50833</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@crystalskyphotography.com"
                  className="flex items-start space-x-2 text-primary-foreground/80 hover:text-accent smooth-transition text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>info@crystalskyphotography.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Raghuji Nagar, Nagpur, Maharashtra 440024</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Crystal Sky Photography. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/crystalskyphotography_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent smooth-transition group"
              >
                <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="https://wa.me/918412850833"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-green-500 smooth-transition group"
              >
                <Phone className="w-5 h-5 text-primary-foreground group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
