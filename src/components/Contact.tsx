import { Mail, MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '087934 68004',
      link: 'tel:087934 68004',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@manishpande_photography.com',
      link: 'mailto:info@manishpande_photography.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Shambhu Nagar, Nagpur, Maharashtra 440030',
      link: 'https://maps.google.com/?q=Raghuji+Nagar+Nagpur+Maharashtra+440024',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@manishpande_photography',
      link: 'https://www.instagram.com/manishpande_photography',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Get in <span className="text-gradient-gold">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's create something beautiful together. Reach out to us for bookings and inquiries
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant smooth-transition hover:-translate-y-1 group"
              >
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 smooth-transition">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="text-foreground group-hover:text-accent smooth-transition">
                      {info.content}
                    </p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <Card className="p-8 bg-gradient-to-r from-green-500/10 to-green-600/5 border-green-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                  Quick Response on WhatsApp
                </h3>
                <p className="text-muted-foreground">
                  Get instant replies to your queries. We're just a message away!
                </p>
              </div>
              <a
                href="https://wa.me/918793468004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md smooth-transition font-medium flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </button>
              </a>
            </div>
          </Card>

          {/* Map Section */}
          <div className="mt-12">
            <Card className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56097.999035132925!2d79.05119046660914!3d21.19239071429046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c137db9b7303%3A0x37396ba59d09106a!2sManish%20Pande%20Photography%20(Wedding%20Photographer)!5e1!3m2!1sen!2sin!4v1764055493662!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
