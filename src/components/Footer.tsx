import { Github, Linkedin, Mail, } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/50 border-t border-card-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Nigel Sota</h3>
            <p className="text-muted-foreground text-sm">
              Machine Learning Engineer • Software Developer • Musician
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/sota-nigel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/nigel-sota-01666821a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:sotanigel@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Nigel Sota. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1 flex items-center justify-center md:justify-end">
              
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card-border mt-8 pt-6">
          <div className="text-center">
            <p className="text-muted-foreground text-xs">
              Combining technical expertise with creative vision to build meaningful innovations. BUild with TypeScript & Tailwaind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;