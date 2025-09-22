import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sotanigel@gmail.com",
      description: "For professional inquiries and collaborations",
      action: "mailto:sotanigel@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      title: "SMS",
      value: "+263 78 630 3265",
      description: "Quick messages and coordination",
      action: "sms:+263786303265",
      color: "accent"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business",
      value: "+263 71 394 5017",
      description: "Business discussions and consultations",
      action: "https://wa.me/263713945017",
      color: "accent-secondary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      username: "@sota-nigel",
      url: "https://github.com/sota-nigel",
      description: "Open source projects and code repositories"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      username: "nigel-sota-01666821a",
      url: "https://linkedin.com/in/nigel-sota-01666821a",
      description: "Professional network and career updates"
    }
  ];

  const collaborationAreas = [
    "Machine Learning Projects",
    "Software Development",
    "Creative Technology Solutions",
  ];

  return (
    <section id="contact" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on something amazing? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="glass-card hover-lift group p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${method.color}/20 rounded-full flex items-center justify-center group-hover:bg-${method.color}/30 transition-colors flex-shrink-0`}>
                      <method.icon className={`w-6 h-6 text-${method.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-foreground mb-1">{method.title}</h4>
                      <p className="text-foreground font-medium mb-2">{method.value}</p>
                      <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                      <Button 
                        size="sm" 
                        className="bg-gradient-primary hover:opacity-90"
                        onClick={() => window.open(method.action, '_self')}
                      >
                        Contact Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <h4 className="text-xl font-bold text-foreground mb-4">Connect on Social</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <Card key={index} className="glass-card hover-lift p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <social.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h5 className="font-medium text-foreground">{social.title}</h5>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => window.open(social.url, '_blank')}
                          className="p-1 h-auto"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Collaboration Areas */}
          <div>
            <Card className="glass-card p-6 h-fit">
              <h3 className="text-xl font-bold text-foreground mb-6">Let's Collaborate On</h3>
              <div className="space-y-3">
                {collaborationAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-surface rounded-lg border border-card-border">
                <h4 className="font-medium text-foreground mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to emails within 24 hours and WhatsApp messages within a few hours during business days.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Something Great?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you're looking to build intelligent systems, create beautiful user experiences, 
              or explore the intersection of technology and creativity, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 shadow-glow"
                onClick={() => window.open('mailto:sotanigel@gmail.com', '_self')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send an Email
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                onClick={() => window.open('https://wa.me/263713945017', '_blank')}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;