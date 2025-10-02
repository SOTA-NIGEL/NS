import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden" 
      style={{
        backgroundImage: `linear-gradient(rgba(18, 20, 38, 0.8), rgba(18, 20, 38, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* MODIFICATION: Changed pt-8 to pt-10 (40px) to achieve 40px distance from the top/navbar area. */}
      <div className="container mx-auto px-6 text-center relative z-10 pt-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction Text - HELLO, I'M */}
          <div>
            <p className="text-xl md:text-2xl text-primary mb-4 tracking-widest uppercase font-semibold">
              HELLO, I'M
            </p>
          </div>

          {/* Main Name - SOTA NIGEL (Font size remains reduced) */}
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text overflow-visible whitespace-nowrap leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] px-2 pt-2.5 ">
              SOTA NIGEL
            </h1>
          </div>

          {/* Subtitle */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground mb-8 font-light">
              ML Engineer | Software Developer
            </h2>
          </div>

          {/* Description */}
          <div>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about building intelligent systems and scalable solutions. 
              I blend technical expertise with creative insights in art and design
              to create impactful, user-centered applications.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-glow transition-all duration-300 hover:shadow-elegant"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/sota-nigel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/nigel-sota-01666821a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:sotanigel@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors animate-float"
            >
              <div className="flex flex-col items-center">
                <span className="text-sm mb-2">Scroll Down</span>
                <ArrowDown className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent-secondary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;