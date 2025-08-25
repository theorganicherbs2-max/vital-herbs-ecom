import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CountdownTimer from './CountdownTimer';
import ProductGallery from './ProductGallery';

const ProductCard = () => {
  return (
    <div className="bg-gradient-card rounded-2xl shadow-organic p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <Badge className="bg-organic-success text-white mb-4">
          🔥 LIMITED TIME OFFER
        </Badge>
        <h2 className="text-3xl font-bold text-organic-dark mb-2">
          Advance 3X Weight Loss Pack
        </h2>
        <p className="text-muted-foreground">
          3 Powerful Natural Supplements in 1 Complete Combo
        </p>
      </div>

      <ProductGallery />

      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <span className="text-2xl text-muted-foreground line-through">₹3,499</span>
          <span className="text-4xl font-bold text-organic-green">₹2,499</span>
        </div>
        <CountdownTimer />
      </div>

      <div className="bg-organic-green-lighter p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-organic-dark mb-2">What's Included:</h3>
        <ul className="space-y-1 text-sm text-organic-dark">
          <li>• Slim Fit (60 caps)</li>
          <li>• Fat Burner (30 caps)</li>
          <li>• 36 Herbs Detox Cleanser Powder (40 Servings)</li>
          <li>• Complete Diet Guide by Reema Bhatia</li>
          <li>• 30-Day Money Back Guarantee</li>
        </ul>
      </div>

      <div className="space-y-3">
        <Button variant="organic-cta" size="lg" className="w-full text-lg py-6">
          🛒 ORDER NOW - GET INSTANT ACCESS
        </Button>
        <Button variant="organic-outline" size="lg" className="w-full">
          💬 Chat with Expert
        </Button>
      </div>

      <div className="text-center mt-4">
        <p className="text-xs text-muted-foreground">
          ✓ Secure Payment • ✓ Fast Delivery • ✓ Expert Support
        </p>
      </div>
    </div>
  );
};

export default ProductCard;