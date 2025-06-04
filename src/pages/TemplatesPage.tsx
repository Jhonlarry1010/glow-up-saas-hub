
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Eye, Code, ArrowRight, Star, Layout, Download } from "lucide-react";
import { Link } from "react-router-dom";

// Template data
const templates = [
  {
    id: 1,
    title: "Landing Page",
    category: "Marketing",
    description: "A high-converting landing page template designed to capture leads and showcase your product benefits.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
    price: 49,
    rating: 4.9,
    downloads: 3240,
    tags: ["Responsive", "Customizable", "SEO Optimized"]
  },
  {
    id: 2,
    title: "Admin Dashboard",
    category: "Web App",
    description: "Complete admin dashboard template with analytics, charts, and user management features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    price: 79,
    rating: 4.8,
    downloads: 2180,
    tags: ["Dark Mode", "Accessible", "Responsive"]
  },
  {
    id: 3,
    title: "E-commerce Kit",
    category: "E-commerce",
    description: "Full e-commerce template with product listings, cart, checkout, and account management pages.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    price: 99,
    rating: 4.7,
    downloads: 1850,
    tags: ["Payment Integration", "Product Management", "Responsive"]
  },
  {
    id: 4,
    title: "Blog Theme",
    category: "Content",
    description: "Modern blog theme with multiple layouts, category pages, and newsletter integration.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    price: 59,
    rating: 4.8,
    downloads: 2750,
    tags: ["SEO Optimized", "Newsletter", "Social Sharing"]
  },
  {
    id: 5,
    title: "Portfolio Showcase",
    category: "Personal",
    description: "Clean portfolio template perfect for designers, developers, and creative professionals.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80",
    price: 39,
    rating: 4.6,
    downloads: 1560,
    tags: ["Project Showcase", "Contact Form", "Minimal"]
  },
  {
    id: 6,
    title: "SaaS Application",
    category: "Web App",
    description: "Complete SaaS application template with authentication, billing, and user dashboard.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    price: 129,
    rating: 4.9,
    downloads: 980,
    tags: ["Authentication", "Subscription Management", "Feature-rich"]
  }
];

// Available categories for filtering
const categories = ["All", "Marketing", "Web App", "E-commerce", "Content", "Personal"];

const TemplatesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          </div>
          
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-6">Templates</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Premium <span className="gradient-text">Templates</span> for Your Next Project
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Professionally designed templates to speed up your development workflow.
                Save time and focus on what matters most.
              </p>
            </div>
            
            {/* Filtering options */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"} 
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Templates grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card key={template.id} className="overflow-hidden border-border/60 hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden relative group">
                    <img 
                      src={template.image} 
                      alt={template.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4 mr-2" /> Preview
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Code className="w-4 h-4 mr-2" /> Details
                      </Button>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-background/90">{template.category}</Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{template.title}</CardTitle>
                        <CardDescription className="mt-1 line-clamp-2">{template.description}</CardDescription>
                      </div>
                      <span className="text-lg font-bold">${template.price}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {template.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="font-normal">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm">{template.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 text-muted-foreground mr-1" />
                        <span className="text-sm text-muted-foreground">{template.downloads}</span>
                      </div>
                    </div>
                    <Button size="sm" className="gap-1" asChild>
                      <Link to={`/checkout?title=${encodeURIComponent(template.title)}&price=${template.price}&type=template&category=${encodeURIComponent(template.category)}`}>
                        Buy now <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
              <Layout className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-muted-foreground mb-6">We offer custom template development tailored to your specific needs.</p>
              <Button>Contact us for custom work</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TemplatesPage;
