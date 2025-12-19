import { Leaf, Phone, Mail } from 'lucide-react';
const Header = () => {
  return <header className="bg-gradient-hero text-white">
      {/* Top notification bar */}
      <div className="bg-organic-warning text-center py-2 px-4">
        <p className="text-sm font-medium">
          🌟 <strong>REEMA BHATIA</strong> - Certified Weight Loss Mentor | Transform Your Life Today!
        </p>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">The Organic Herbs</h1>
              <p className="text-sm opacity-90">Natural Wellness Solutions</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 9870220559</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">support@organicherbs.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;