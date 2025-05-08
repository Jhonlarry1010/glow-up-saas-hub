
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Package, Layout, Smartphone } from "lucide-react";

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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="font-medium">
                  Start for free
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-4">What would you like to get started with?</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 pt-4">
                  <Button className="flex justify-start gap-3 h-auto py-4" variant="outline" asChild>
                    <Link to="/templates">
                      <Layout className="h-5 w-5" />
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Buy Templates</span>
                        <span className="text-sm text-muted-foreground">Pre-designed templates for various projects</span>
                      </div>
                    </Link>
                  </Button>
                  <Button className="flex justify-start gap-3 h-auto py-4" variant="outline" asChild>
                    <Link to="/websites">
                      <Package className="h-5 w-5" />
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Buy Websites</span>
                        <span className="text-sm text-muted-foreground">Ready-to-use website solutions</span>
                      </div>
                    </Link>
                  </Button>
                  <Button className="flex justify-start gap-3 h-auto py-4" variant="outline" asChild>
                    <Link to="/apps">
                      <Smartphone className="h-5 w-5" />
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Buy Apps</span>
                        <span className="text-sm text-muted-foreground">Mobile and web applications</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="font-medium">
              Book a demo
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 bottom-0 h-20" />
            {/* Visual placeholder instead of 3D scene */}
            <div className="relative z-0 w-full h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">SaaSHub</div>
                <p className="text-muted-foreground">Streamline your workflow</p>
              </div>
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
