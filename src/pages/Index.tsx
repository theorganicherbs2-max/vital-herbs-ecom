import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import { OrderForm } from '@/components/OrderForm';
import { Button } from '@/components/ui/button';
import { Check, Star, Shield } from 'lucide-react';
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-organic-green-lighter to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-organic-dark mb-6">
              Transform Your Body<br />
              <span className="text-organic-green">Naturally & Safely</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the proven 3X Weight Loss Combo that has helped thousands lose weight without harmful chemicals or side effects
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-card-organic">
                <Check className="w-5 h-5 text-organic-success" />
                <span className="text-sm font-medium">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-card-organic">
                <Star className="w-5 h-5 text-organic-warning" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-card-organic">
                <Shield className="w-5 h-5 text-organic-green" />
                <span className="text-sm font-medium">Money Back Guarantee</span>
              </div>
            </div>
          </div>
          
          <ProductCard />
          <TrustBadges />
        </div>
      </section>

      <Testimonials />

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-organic-dark mb-12">
              Why Choose Our 3X Weight Loss Pack?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-organic-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-organic-dark mb-2">Boosts Metabolism by 300%</h3>
                    <p className="text-muted-foreground">Natural ingredients that supercharge your body's fat-burning process</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-organic-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-organic-dark mb-2">Reduces Cravings</h3>
                    <p className="text-muted-foreground">Controls hunger and stops emotional eating naturally</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-organic-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-organic-dark mb-2">Detoxifies Body</h3>
                    <p className="text-muted-foreground">Removes toxins and improves overall health & energy</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-organic-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-organic-dark mb-2">No Side Effects</h3>
                    <p className="text-muted-foreground">100% natural herbs with zero harmful chemicals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-organic-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-organic-dark mb-2">Expert Guidance</h3>
                    <p className="text-muted-foreground">Personal support from certified weight loss mentor Reema Bhatia</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-organic-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-organic-dark mb-2">Guaranteed Results</h3>
                    <p className="text-muted-foreground">15-day money back guarantee if you're not satisfied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't Wait - Limited Time Offer!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands who have already transformed their lives
          </p>
          <Button variant="organic-cta" size="lg" className="text-sm sm:text-lg px-6 sm:px-12 py-4 sm:py-6">
            🛒 CLAIM YOUR DISCOUNT NOW
          </Button>
        </div>
      </section>

      {/* Return Form Section */}
      <section className="py-16 bg-organic-green-lighter">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-organic-dark mb-4">
              15-Day Money Back Guarantee
            </h2>
            <p className="text-muted-foreground mb-6">
              Not satisfied with your purchase? We offer a hassle-free return process with full refund.
            </p>
            <OrderForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-organic-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2024 The Organic Herbs. All rights reserved.</p>
          <p className="text-sm text-white/70">
            Disclaimer: Results may vary. Consult your healthcare provider before starting any weight loss program.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;