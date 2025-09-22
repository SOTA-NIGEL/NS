import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Brain,
  Database,
  Palette,
  Cpu,
  GitBranch,
  Cloud,
  Monitor,
  Layers
} from "lucide-react";

const Skills = () => {

  const technicalExpertise = [
    {
      category: "Machine Learning",
      icon: Brain,
      areas: [
        "Predictive Modeling",
        "Classification & Regression",
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning",
        "Model Optimization"
      ]
    },
    {
      category: "Software Development",
      icon: Monitor,
      areas: [
        "Full-Stack Development",
        "API Development",
        "Database Design",
        "System Architecture",
        "Web Applications",
        "Data Visualization"
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical Skills
          </p>
        </div>

        {/* Detailed Expertise Areas */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {technicalExpertise.map((expertise, index) => (
            <Card key={index} className="glass-card hover-lift p-8 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <expertise.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{expertise.category}</h3>
              </div>

              <div className="space-y-3">
                {expertise.areas.map((area, areaIndex) => (
                  <div key={areaIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack Icons Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Python", "JavaScript", "React", "Node.js",  "HTML5/CSS3", "",
              "Docker", "Git", "PostgreSQL", "Groq Cloud", "Hugging Face",
            ].map((tech, index) => (
              <span key={index} className="text-base text-foreground/80 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;