import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, TrendingUp, MessageSquare, Image } from "lucide-react";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Support Ticket Pilot",
      category: "Machine Learning",
      description: "Built a comprehensive ML pipeline for sales forecasting using ensemble methods, achieving 94% accuracy. Features real-time data visualization and automated reporting.",
      technologies: ["React", "TypeScript", "PyTorch", "Streamlit", "pandas", "Node"],
      icon: TrendingUp,
      demoLink: "https://ticket-pilot-nu.vercel.app/",
      codeLink: "https://github.com/SOTA-NIGEL/ticket-pilot-ai",
      color: "primary"
    },
    {
      id: 2,
      title: "Web Scraper",
      category: "Natural Language Processing",
      description: "Developed a real-time sentiment analysis system online job scraper. Utilizes web scraping to gather real-time job data using transformer models.",
      technologies: ["PyTorch", "Numpy", "", "FastAPI", "Docker", "Redis"],
      icon: MessageSquare,
      status: "Production",
      codeLink: "https://github.com/SOTA-NIGEL/Scraper_for-jobs",
      color: "accent"
    },
    {
      id: 3,
      title: "Payslip Generator",
      category: "Web Application",
      description: "Developed a web application that automates the generation of payslips for employees. Integrates with HR systems to fetch employee data and generate payslips in PDF format.",
      technologies: ["Python", "Pandas", "Express", "MongoDB", "PDFKit"],
      icon: Play,
      demoLink: "#",
      codeLink: "https://github.com/SOTA-NIGEL/payslipgenerator",
      color: "accent-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4"></h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Machine Learning & Software Development Showcase
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="glass-card hover-lift group overflow-hidden">
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-${project.color}/20 rounded-lg flex items-center justify-center group-hover:bg-${project.color}/30 transition-colors`}>
                    <project.icon className={`w-6 h-6 text-${project.color}`} />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`bg-${project.color}/10 text-${project.color} hover:bg-${project.color}/20`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-accent font-medium mb-3">{project.category}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

               

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-muted">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.id === 1 ? 'Visit' : 'Demo'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-muted hover:bg-muted/20"
                    onClick={() => window.open(project.codeLink, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 shadow-glow"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;