import { Shield, Award, Truck, RotateCcw } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Natural",
      description: "Certified Organic"
    },
    {
      icon: Award,
      title: "Expert Approved",
      description: "By Reema Bhatia"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Pan India"
    },
    {
      icon: RotateCcw,
      title: "15-Day Guarantee",
      description: "Money Back"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {badges.map((badge, index) => {
        const IconComponent = badge.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-gradient-card rounded-lg shadow-card-organic">
            <div className="w-12 h-12 bg-organic-green-lighter rounded-full flex items-center justify-center mb-2">
              <IconComponent className="w-6 h-6 text-organic-green" />
            </div>
            <h3 className="font-semibold text-sm text-organic-dark">{badge.title}</h3>
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;