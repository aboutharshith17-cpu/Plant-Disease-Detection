
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-leaf-green-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="font-bold text-xl">CropGuard</span>
            </div>
            <p className="text-sm">
              Helping farmers identify and treat crop diseases for better yields and sustainable farming.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Disease Detection</a></li>
              <li><a href="#" className="hover:underline">Disease Library</a></li>
              <li><a href="#" className="hover:underline">Weather Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">User Guide</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Community</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@cropguard.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CropGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
