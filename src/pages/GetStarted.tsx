
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Layout, Smartphone, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "No-Code Web Development",
    description: "Build websites without writing a single line of code. Perfect for beginners and quick projects.",
    icon: Layout,
    color: "bg-blue-100 text-blue-700",
    buttonText: "Start Building"
  },
  {
    title: "Integrated Development Environment",
    description: "Professional-grade IDE for developers who need powerful tools and seamless workflow.",
    icon: Code,
    color: "bg-purple-100 text-purple-700",
    buttonText: "Try IDE"
  },
  {
    title: "Full Stack Web Development",
    description: "End-to-end solutions for web applications, from frontend to backend services.",
    icon: Terminal,
    color: "bg-amber-100 text-amber-700",
    buttonText: "Explore Stack"
  },
  {
    title: "App Development",
    description: "Cross-platform mobile app development with seamless integration to your existing services.",
    icon: Smartphone,
    color: "bg-green-100 text-green-700",
    buttonText: "Create App"
  }
];

const GetStarted = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          </div>
          
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-6">Get Started</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Choose Your <span className="gradient-text">Development Path</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Select the service that best fits your project needs and technical expertise.
                Our platform adapts to your skill level and project requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-background border border-border/60 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button className="w-full">{service.buttonText}</Button>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">Not sure where to start? Schedule a consultation with our team.</p>
              <Button variant="outline">Book a Consultation</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
