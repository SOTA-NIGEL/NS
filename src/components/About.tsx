import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import profileImage from "@/assets/nigel-professional.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Who I Am
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={profileImage} 
                alt="Nigel Sota - Professional portrait"
                className="w-full max-w-md mx-auto lg:max-w-none h-auto object-cover rounded-2xl shadow-card transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            {/* Education Section */}
            <Card className="glass-card hover-lift p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                  <p className="text-muted-foreground">Current Studies</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Uncommon.org</h4>
                  <p className="text-muted-foreground">Student • Current</p>
                </div>
              </div>
            </Card>

            {/* Description */}
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ML Engineer & Software Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am passionate about building intelligent and scalable systems, with deep expertise 
                in AI and Data Science. My approach combines rigorous technical skills with creative 
                insights drawn from my background in design and music.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At my core, I am a problem solver who creates solutions that deeply resonate with users. 
                Whether developing ML models or crafting software applications, I believe in the power 
                of combining analytical thinking with creative vision to build meaningful innovations.
              </p>
              
              {/* Specialties */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                  Machine Learning
                </Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent hover:bg-accent/30">
                  Software Development
                </Badge>
                <Badge variant="secondary" className="bg-accent-secondary/20 text-accent-secondary hover:bg-accent-secondary/30">
                  AI Systems
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                  Creative Problem Solving
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;