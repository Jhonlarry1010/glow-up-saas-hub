
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
import { Eye, Package, ArrowRight, Star, Link } from "lucide-react";

// Sample website data
const websites = [
  {
    id: 1,
    title: "Cartwheel Business",
    category: "Business",
    description: "A professional business website template with team profiles, services, and contact forms.",
    image: "https://media.macphun.com/img/uploads/customer/blog/2103/1684418771646630d3a2bb60.04823118.jpg?q=85&w=840",
    price: 299,
    rating: 4.9,
    sales: 320,
    demo: "https://lovabl.netlify.app/",
   features: ["Contact Form", "Team Profiles", "Service Listings", "Testimonials"]
  },
  {
    id: 2,
    title: "Cartwheel Portfolio",
    category: "Personal",
    description: "Showcase your work and skills with this elegantly designed portfolio website.",
    image: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&w=600&q=80",
    price: 199,
    rating: 4.7,
    sales: 415,
    demo: "https://example.com/demo/portfolio",
    features: ["Project Gallery", "Skills Section", "Resume Download", "Blog Integration"]
  },
  {
    id: 3,
    title: "Cartwheel Store",
    category: "E-commerce",
    description: "A feature-rich e-commerce website with product management, cart, and checkout functionality.",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=600&q=80",
    price: 499,
    rating: 4.8,
    sales: 267,
    demo: "https://example.com/demo/store",
    features: ["Product Catalog", "Shopping Cart", "Secure Checkout", "Customer Accounts"]
  },
  {
    id: 4,
    title: "Cartwheel Restaurant",
    category: "Food & Beverage",
    description: "Perfect for restaurants and cafes with menu display, reservation system, and location info.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    price: 349,
    rating: 4.6,
    sales: 198,
    demo: "https://example.com/demo/restaurant",
    features: ["Menu Display", "Reservation Form", "Location Map", "Image Gallery"]
  },
  {
    id: 5,
    title: "Cartwheel Events",
    category: "Events",
    description: "Promote and manage events with ticket sales, schedules, and speaker profiles.",
    image: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?auto=format&fit=crop&w=600&q=80",
    price: 399,
    rating: 4.7,
    sales: 152,
    demo: "https://example.com/demo/events",
    features: ["Event Calendar", "Ticket Sales", "Speaker Profiles", "Schedule Display"]
  },
  {
    id: 6,
    title: "Cartwheel Real Estate",
    category: "Real Estate",
    description: "Showcase properties with detailed listings, search functionality, and agent profiles.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    price: 449,
    rating: 4.8,
    sales: 178,
    demo: "https://example.com/demo/realestate",
    features: ["Property Listings", "Search Filters", "Agent Profiles", "Contact Forms"]
  }
];

// Available categories for filtering
const categories = ["All", "Business", "Personal", "E-commerce", "Food & Beverage", "Events", "Real Estate"];

const WebsitesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-400 via-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-indigo-600">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]" />
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Enhanced background decoration with rainbow elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-15 rounded-full blur-3xl animate-pulse delay-500" />
            </div>
            
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge className="mb-6 bg-white/20 backdrop-blur-sm border-white/30 text-white">Ready-to-Use Websites</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
                  Professional <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">Websites</span> For Your Business
                </h1>
                <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                  Launch your online presence in minutes with our professionally designed, 
                  fully functional websites. Just add your content and go live!
                </p>
              </div>
              
              {/* Filtering options */}
              <div className="flex flex-wrap gap-3 mb-10 justify-center">
                {categories.map((category) => (
                  <Button 
                    key={category} 
                    variant={category === "All" ? "default" : "outline"} 
                    size="sm"
                    className={category === "All" 
                      ? "bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" 
                      : "bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {/* Websites grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {websites.map((website) => (
                  <Card key={website.id} className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300">
                    <div className="aspect-[16/9] overflow-hidden relative group">
                      <img 
                        src={website.image} 
                        alt={website.title} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <Button size="sm" variant="secondary" onClick={() => window.open(website.demo, '_blank')} className="bg-white/90 hover:bg-white">
                          <Eye className="w-4 h-4 mr-2" /> Live Preview
                        </Button>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-white/90 text-gray-900">{website.category}</Badge>
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-white">{website.title}</CardTitle>
                          <CardDescription className="mt-1 line-clamp-2 text-white/80">{website.description}</CardDescription>
                        </div>
                        <span className="text-lg font-bold text-white">${website.price}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {website.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="font-normal bg-white/10 border-white/30 text-white/90">{feature}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex justify-between border-t border-white/20 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="text-sm text-white/90">{website.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Link className="w-4 h-4 text-white/70 mr-1" />
                          <span className="text-sm text-white/70">{website.sales} sales</span>
                        </div>
                      </div>
                      <Button size="sm" className="gap-1 bg-white/20 hover:bg-white/30 text-white border-white/30">
                        Buy now <ArrowRight className="w-3 h-3" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {/* CTA Section */}
              <div className="mt-16 p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <Package className="w-12 h-12 mx-auto mb-4 text-white" />
                <h2 className="text-2xl font-bold mb-4 text-white">Need a custom website?</h2>
                <p className="text-white/80 mb-6">Our team can build a fully customized website tailored to your specific business needs.</p>
                <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30">Get a custom quote</Button>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default WebsitesPage;
