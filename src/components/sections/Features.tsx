
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Check, Code, BarChart, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Powerful Analytics",
    description: "Get in-depth insights with our robust analytics dashboard. Make data-driven decisions with customizable reports.",
    icon: BarChart,
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team. Share, comment, and collaborate in real-time on projects.",
    icon: Users,
  },
  {
    title: "Developer API",
    description: "Integrate with your existing tools using our comprehensive API. Build custom workflows that match your needs.",
    icon: Code,
  },
  {
    title: "Enterprise Security",
    description: "Rest easy with bank-level security. Your data is encrypted and protected with the latest security measures.",
    icon: Shield,
  },
  {
    title: "Lightning Fast",
    description: "Experience blazing fast performance. Our optimized platform ensures quick load times and responsive design.",
    icon: Zap,
  },
  {
    title: "24/7 Support",
    description: "Get help when you need it. Our support team is available around the clock to assist with any issues.",
    icon: Check,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Powerful Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive suite of features gives you all the tools you need to manage your business efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-lg border border-border/50 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Badge className="mb-4">Seamless Workflow</Badge>
              <h2 className="text-3xl font-bold mb-6">
                Streamline your process from start to finish
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform handles everything from initial planning to final delivery, keeping your projects organized and on track.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Automated task management",
                  "Smart progress tracking",
                  "Integrated communication tools",
                  "Visual project timelines"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="mr-3 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg border border-border/80 shadow-lg overflow-hidden">
                <img 
                  src="https://as2.ftcdn.net/v2/jpg/05/91/16/23/1000_F_591162376_hC0rOhlcSP3DMlwLt1CcTV1n8xXYHaSr.jpg" 
                  alt="Product Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
