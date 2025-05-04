
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 users",
      "10GB storage",
      "Basic analytics",
      "24/7 email support",
      "API access"
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Pro",
    price: 79,
    description: "Ideal for growing businesses",
    features: [
      "Up to 20 users",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Team collaboration"
    ],
    cta: "Start with Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited users",
      "250GB storage",
      "Advanced analytics & reporting",
      "24/7 phone support",
      "API access",
      "Custom integrations",
      "Team collaboration",
      "Custom security controls",
      "Dedicated account manager"
    ],
    cta: "Contact sales",
    highlight: false,
  }
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);
  
  return (
    <section id="pricing" className="py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Simple Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose the plan that's right for you
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            No hidden fees. No contracts. Cancel anytime.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button
              className="relative w-12 h-6 rounded-full bg-muted p-1 transition-colors focus:outline-none"
              onClick={() => setAnnual(!annual)}
            >
              <span
                className={`block w-4 h-4 rounded-full bg-primary transition-transform ${
                  annual ? "translate-x-6" : ""
                }`}
              />
            </button>
            <span className={`ml-3 flex items-center ${annual ? "text-foreground" : "text-muted-foreground"}`}>
              Annually
              <Badge variant="outline" className="ml-2">Save 20%</Badge>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name} 
              className={`rounded-xl border ${
                plan.highlight 
                  ? "border-primary shadow-lg shadow-primary/5" 
                  : "border-border/50"
              } p-6 flex flex-col`}
            >
              {plan.highlight && (
                <Badge className="self-start mb-4">Most Popular</Badge>
              )}
              
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">${annual ? plan.price : Math.round(plan.price * 1.25)}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <Button 
                className={`w-full mb-8 ${plan.highlight ? "" : "bg-muted hover:bg-muted/80 text-foreground"}`}
                variant={plan.highlight ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
              
              <p className="text-sm font-medium mb-4">Includes:</p>
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-lg">
            Need something different? <a href="#" className="text-primary font-medium hover:underline">Contact us</a> for a custom plan.
          </p>
        </div>
      </Container>
    </section>
  );
}
