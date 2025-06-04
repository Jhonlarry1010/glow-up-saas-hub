
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Shield, Lock } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const CheckoutPage = () => {
  const { getTextClasses, getCardClasses, getButtonClasses } = useTheme();
  const textColors = getTextClasses();
  const [searchParams] = useSearchParams();
  
  // Get product details from URL parameters
  const title = searchParams.get('title') || 'Product';
  const price = searchParams.get('price') || '0';
  const type = searchParams.get('type') || 'template';
  const category = searchParams.get('category') || 'General';

  const handleCheckout = () => {
    // This would integrate with Stripe or other payment processor
    console.log('Processing checkout for:', { title, price, type, category });
    // For now, just show an alert
    alert('Checkout functionality will be integrated with payment processor');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 relative overflow-hidden">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Back button */}
              <div className="mb-8">
                <Button variant="outline" size="sm" asChild className={getButtonClasses()}>
                  <Link to={`/${type}s`}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to {type}s
                  </Link>
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div>
                  <h1 className={`text-3xl font-bold mb-6 ${textColors.primary}`}>Checkout</h1>
                  
                  <Card className={getCardClasses()}>
                    <CardHeader>
                      <CardTitle className={textColors.primary}>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className={`font-semibold ${textColors.primary}`}>{title}</h3>
                          <Badge variant="outline" className="mt-1">{category}</Badge>
                          <p className={`text-sm mt-2 ${textColors.secondary}`}>
                            {type === 'template' && 'Premium template with full source code'}
                            {type === 'website' && 'Complete website ready for deployment'}
                            {type === 'app' && 'Full-featured application with documentation'}
                          </p>
                        </div>
                        <span className={`text-xl font-bold ${textColors.primary}`}>${price}</span>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className={textColors.secondary}>Subtotal</span>
                          <span className={textColors.primary}>${price}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className={textColors.secondary}>Tax</span>
                          <span className={textColors.primary}>$0.00</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-bold">
                          <span className={textColors.primary}>Total</span>
                          <span className={textColors.primary}>${price}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* What's included */}
                  <Card className={`mt-6 ${getCardClasses()}`}>
                    <CardHeader>
                      <CardTitle className={textColors.primary}>What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className={`space-y-2 text-sm ${textColors.secondary}`}>
                        <li>✅ Full source code access</li>
                        <li>✅ Documentation and setup guide</li>
                        <li>✅ Lifetime updates</li>
                        <li>✅ Commercial license</li>
                        <li>✅ 30-day money-back guarantee</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Payment Form */}
                <div>
                  <Card className={getCardClasses()}>
                    <CardHeader>
                      <CardTitle className={`flex items-center gap-2 ${textColors.primary}`}>
                        <CreditCard className="w-5 h-5" />
                        Payment Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Secure badges */}
                      <div className="flex items-center gap-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <Shield className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-green-800 dark:text-green-200">
                            Secure Checkout
                          </p>
                          <p className="text-xs text-green-600 dark:text-green-400">
                            256-bit SSL encryption
                          </p>
                        </div>
                        <Lock className="w-4 h-4 text-green-600 ml-auto" />
                      </div>

                      {/* Payment form placeholder */}
                      <div className="space-y-4">
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${textColors.primary}`}>
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="you@example.com"
                          />
                        </div>

                        <div>
                          <label className={`block text-sm font-medium mb-2 ${textColors.primary}`}>
                            Card Number
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className={`block text-sm font-medium mb-2 ${textColors.primary}`}>
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className={`block text-sm font-medium mb-2 ${textColors.primary}`}>
                              CVC
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>

                      <Button 
                        className={`w-full ${getButtonClasses()}`} 
                        size="lg"
                        onClick={handleCheckout}
                      >
                        Complete Purchase - ${price}
                      </Button>

                      <p className={`text-xs text-center ${textColors.secondary}`}>
                        By completing this purchase, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
