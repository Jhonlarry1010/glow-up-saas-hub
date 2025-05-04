
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6">New Features Available</Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Streamline Your Workflow with <span className="gradient-text">SaaSHub</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Boost productivity and simplify collaboration with our all-in-one platform.
            Get more done with fewer tools and less hassle.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="font-medium">
              Start for free
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Book a demo
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 bottom-0 h-20" />
            <div className="relative z-0 rounded-lg border border-border/80 shadow-lg overflow-hidden float-animation">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="SaaSHub Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-4">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border-2 border-background text-xs font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">Trusted by 10,000+ teams</span>
            </div>
            
            <div className="flex items-center">
              <div className="text-yellow-500 flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">5.0 rating</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
