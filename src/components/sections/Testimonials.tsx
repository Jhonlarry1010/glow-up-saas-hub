
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "SaaSHub has completely transformed how our team works. We've cut our project delivery time by half and improved collaboration across departments.",
    name: "Alex Johnson",
    title: "CTO, TechVision Inc.",
    avatar: "A",
  },
  {
    quote: "The analytics tools in SaaSHub helped us identify key areas for improvement in our workflow. The ROI has been incredible.",
    name: "Sarah Martinez",
    title: "Operations Director, Innovate Co.",
    avatar: "S",
  },
  {
    quote: "I was skeptical at first, but after just one month using SaaSHub, our productivity metrics improved dramatically. The interface is intuitive and the support team is exceptional.",
    name: "Michael Chen",
    title: "Product Manager, GrowthLabs",
    avatar: "M",
  },
  {
    quote: "SaaSHub's integration capabilities allowed us to connect all our existing tools. The onboarding process was smooth, and we were up and running in no time.",
    name: "Jessica Taylor",
    title: "Head of Engineering, DataFlow Systems",
    avatar: "J",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Loved by teams worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-lg border border-border/50 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              <p className="italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-4">Ready to transform your workflow?</h3>
              <p className="text-lg">Join thousands of satisfied customers who have streamlined their processes with SaaSHub.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium">
                Get started free
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
