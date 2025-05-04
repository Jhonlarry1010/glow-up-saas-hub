
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-16 md:py-24">
          <Pricing />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
