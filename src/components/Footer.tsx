import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Coaches", href: "#coaches" },
    { name: "Gallery", href: "#gallery" },
    { name: "Membership", href: "#contact" },
    { name: "Schedule", href: "#contact" },
    { name: "Events", href: "#news" },
  ];

  const programs = [
    "Adult Training",
    "Junior Development",
    "Professional Coaching",
    "Corporate Programs",
    "Summer Camps",
    "Private Lessons",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer id="contact" className="relative bg-card/50 border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <span className="font-orbitron font-bold text-primary text-xl">BA</span>
              </div>
              <div>
                <span className="font-orbitron font-bold text-foreground text-lg block">
                  BLACK ARROWS
                </span>
                <span className="font-rajdhani text-sm text-muted-foreground">
                  Badminton Club
                </span>
              </div>
            </div>
            <p className="font-rajdhani text-muted-foreground mb-6">
              Where precision meets passion. Training champions since 2015 with world-class 
              facilities and expert coaching.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border-red transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron font-bold text-foreground mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-rajdhani text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-orbitron font-bold text-foreground mb-6">PROGRAMS</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="font-rajdhani text-muted-foreground hover:text-secondary transition-colors duration-300 cursor-pointer flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-secondary group-hover:w-4 transition-all duration-300" />
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-orbitron font-bold text-foreground mb-6">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="font-rajdhani text-muted-foreground">
                  Blackfriars Pier, Whitechapel, London
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="font-rajdhani text-muted-foreground hover:text-foreground transition-colors">
                  +44 7932 037173
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href="mailto:Info@blackarrowsbc.com" className="font-rajdhani text-muted-foreground hover:text-foreground transition-colors">
                  Info@blackarrowsbc.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-orbitron text-sm text-foreground mb-3">NEWSLETTER</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-muted border border-border rounded-lg px-4 py-2 font-rajdhani text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button className="btn-neon-red px-4 py-2 text-sm">
                  JOIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-rajdhani text-muted-foreground text-sm">
              © {new Date().getFullYear()} Black Arrows Badminton Club. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-rajdhani text-muted-foreground text-sm hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-rajdhani text-muted-foreground text-sm hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 glass-card flex items-center justify-center text-primary hover:neon-border-red transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
