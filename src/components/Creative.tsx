import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Palette, PlayCircle, Headphones, Brush, Camera } from "lucide-react";

const Creative = () => {
  const creativeCategories = [
    {
      title: "Piano Performance",
      icon: Music,
      color: "primary",
      description: "Classical and contemporary piano compositions with a focus on emotional expression and technical excellence.",
      highlights: ["Solo Performances", "Jazz Improvisation", "Classical Repertoire", "Original Compositions"],
      mediaType: "Audio Clips"
    },
    {
      title: "Digital Art & Design",
      icon: Palette,
      color: "accent",
      description: "Creative visual designs that blend traditional artistic principles with modern digital techniques.",
      highlights: ["UI/UX Design", "Digital Illustrations", "Concept Art", "Brand Identity"],
      mediaType: "Portfolio Gallery"
    },
    {
      title: "Creative Technology",
      icon: Brush,
      color: "accent-secondary",
      description: "Projects that merge technology with artistic vision, creating innovative multimedia experiences.",
      highlights: ["Generative Art", "Interactive Media", "Audio Visualization", "Creative Coding"],
      mediaType: "Interactive Demos"
    }
  ];

  const creativeInfluences = [
    {
      title: "Music Influences Software Design",
      description: "The rhythm and harmony principles from music composition directly inform my approach to code structure and user interface flow."
    },
    {
      title: "Visual Art Enhances Data Visualization", 
      description: "Color theory and composition techniques from art improve the clarity and impact of my machine learning visualizations."
    },
    {
      title: "Creative Process Drives Innovation",
      description: "The experimental mindset from artistic practice leads to novel approaches in problem-solving and algorithm development."
    }
  ];

  return (
    <section id="creative" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Creative Showcase</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Art & Music Portfolio - Where Creativity Meets Technology
          </p>
        </div>

        {/* Creative Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {creativeCategories.map((category, index) => (
            <Card key={index} className="glass-card hover-lift group overflow-hidden">
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-${category.color}/20 group-hover:bg-${category.color}/30 transition-colors`}>
                    <category.icon className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                  <Badge 
                    variant="secondary" 
                    className={`bg-${category.color}/10 text-${category.color} hover:bg-${category.color}/20`}
                  >
                    {category.mediaType}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {category.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${category.color} rounded-full flex-shrink-0`}></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90"
                  size="sm"
                >
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Explore
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Creative Influence Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            How Creativity Influences My Technical Work
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {creativeInfluences.map((influence, index) => (
              <Card key={index} className="glass-card p-6 hover-lift">
                <h4 className="text-lg font-semibold text-foreground mb-3">{influence.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{influence.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Creative Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Piano Performance Section */}
          <Card className="glass-card p-8 hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Piano Performances</h3>
                <p className="text-muted-foreground">Audio & Video Clips</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-surface rounded-lg border border-card-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Classical Repertoire</h4>
                    <p className="text-sm text-muted-foreground">Bach, Chopin, Debussy</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <PlayCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-4 bg-surface rounded-lg border border-card-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Jazz Improvisation</h4>
                    <p className="text-sm text-muted-foreground">Original compositions</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <PlayCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10">
              View Full Collection
            </Button>
          </Card>

          {/* Art Portfolio Section */}
          <Card className="glass-card p-8 hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Digital Art Portfolio</h3>
                <p className="text-muted-foreground">Visual Design & Artwork</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="aspect-square bg-gradient-primary rounded-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></div>
              <div className="aspect-square bg-gradient-secondary rounded-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></div>
              <div className="aspect-square bg-gradient-card rounded-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></div>
              <div className="aspect-square bg-muted rounded-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
                <span className="text-xs text-muted-foreground">+12 More</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full border-accent/30 hover:bg-accent/10">
              Explore Gallery
            </Button>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Interested in creative collaboration or commissioning custom work?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 shadow-glow"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Discuss Creative Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Creative;