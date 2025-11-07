import { Mail, Phone, Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-square.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="Ronald Follong Fotografie" className="h-12" />
            <p className="font-black text-md uppercase text-foreground -ml-4 tracking-tighter">Ronald Follong</p>
          </Link>
            {/* <h3 className="text-lg font-semibold mb-4 text-foreground">Ronald Follong Fotografie</h3> */}
            <p className="text-sm text-muted-foreground mt-4">
              Mijn professionele fotografieportfolio waarin ik toon hoe ik jouw mooiste momenten vastleg door de cameralens.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span><a className="hover:text-primary hover:underline transition-colors" href="mailto:info@ronaldfollongfotografie.nl">info@ronaldfollongfotografie.nl</a></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span><a className="hover:text-primary hover:underline transition-colors" href="tel:+31629593683">+31 (0) 6 29 59 36 83</a></span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a 
                  href="https://www.facebook.com/ronald.follong" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-muted-foreground text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://nl.linkedin.com/in/ronald-follong-08a34b33" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-muted-foreground text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/ronaldfollong/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-muted-foreground text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ronald Follong Fotografie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
