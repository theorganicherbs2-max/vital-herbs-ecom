import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const ProductGallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const productImages = [
    {
      src: "/lovable-uploads/590a1056-a375-4d46-94ae-1dbc776f6f69.png",
      alt: "Advance 3X Weight Loss Pack - Complete Combo",
      title: "Complete Combo Pack"
    },
    {
      src: "/lovable-uploads/62937bfb-0786-48d9-90e3-341a23ae6519.png", 
      alt: "36 Herbs Detox Cleanser - Natural Body Detox",
      title: "36 Herbs Detox Cleanser"
    },
    {
      src: "/lovable-uploads/26dffacc-e7cb-49de-8e00-3cd3d9898219.png",
      alt: "Fat Burner - Advance Ultra Fat Loss Formulation", 
      title: "Fat Burner (30 Caps)"
    },
    {
      src: "/lovable-uploads/21aa8a7b-21fe-4201-bacd-76a5a6e62de8.png",
      alt: "Slim Fit - Advance Ultra Fat Loss Formulation",
      title: "Slim Fit (60 Caps)"
    }
  ];

  return (
    <div className="relative mb-6">
      <div className="relative mb-4">
        <img 
          src={productImages[activeImage].src}
          alt={productImages[activeImage].alt}
          className="w-full h-64 object-contain rounded-xl animate-float bg-white"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-organic-warning text-white">
            SAVE ₹1000
          </Badge>
        </div>
      </div>
      
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              activeImage === index 
                ? 'border-organic-green shadow-md' 
                : 'border-gray-200 hover:border-organic-green-lighter'
            }`}
          >
            <img 
              src={image.src}
              alt={image.title}
              className="w-full h-full object-contain bg-white"
            />
          </button>
        ))}
      </div>
      
      <div className="text-center mt-2">
        <p className="text-sm text-muted-foreground">
          {productImages[activeImage].title}
        </p>
      </div>
    </div>
  );
};

export default ProductGallery;