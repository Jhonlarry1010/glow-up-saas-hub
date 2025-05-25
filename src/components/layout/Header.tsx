
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Menu, X, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-6 border-b border-border/40 sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <Container>
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">C</div>
            <span className="text-xl font-bold">Cartwheel</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm" asChild>
              <Link to="/websites">Buy website</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors py-2">Home</Link>
              <Link to="/#features" className="text-sm font-medium hover:text-primary transition-colors py-2">Features</Link>
              <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors py-2">Pricing</Link>
              
              <Link to="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors py-2">Testimonials</Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="ghost" size="sm" className="justify-center">Log in</Button>
                <Button size="sm" className="justify-center" asChild>
                  <Link to="/websites">Buy website</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
