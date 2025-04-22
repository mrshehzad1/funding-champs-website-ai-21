
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonOutline } from "@/components/ui/button-outline";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/83c83de6-ffd7-413d-a4d9-5b69e5b4d573.png" 
            alt="Champion Worldwide Logo" 
            className="h-16 md:h-20 mr-4" // Increased from h-12 to h-16/h-20
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-champion-800 font-medium hover:text-champion-600 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-champion-800 font-medium hover:text-champion-600 transition-colors">
            About Us
          </Link>
          <Link to="/funding" className="text-champion-800 font-medium hover:text-champion-600 transition-colors">
            Business Funding
          </Link>
          <Link to="/requirements" className="text-champion-800 font-medium hover:text-champion-600 transition-colors">
            Financing Requirements
          </Link>
          <Link to="/partners" className="text-champion-800 font-medium hover:text-champion-600 transition-colors">
            Partner With Us
          </Link>
          <Link to="/credit-repair" className="text-champion-800 font-medium hover:text-champion-600 transition-colors">
            Credit Repair
          </Link>
          <Link to="/contact" className="text-champion-800 font-medium hover:text-champion-600 transition-colors">
            Contact Us
          </Link>
          <ButtonOutline variant="default" size="default">
            <Link to="/contact">Apply Now</Link>
          </ButtonOutline>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 z-50">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-champion-800 font-medium py-2 hover:bg-gray-100 px-4 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-champion-800 font-medium py-2 hover:bg-gray-100 px-4 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/funding" 
              className="text-champion-800 font-medium py-2 hover:bg-gray-100 px-4 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Business Funding
            </Link>
            <Link 
              to="/requirements" 
              className="text-champion-800 font-medium py-2 hover:bg-gray-100 px-4 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Financing Requirements
            </Link>
            <Link 
              to="/partners" 
              className="text-champion-800 font-medium py-2 hover:bg-gray-100 px-4 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner With Us
            </Link>
            <Link 
              to="/credit-repair" 
              className="text-champion-800 font-medium py-2 hover:bg-gray-100 px-4 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Credit Repair
            </Link>
            <Link 
              to="/contact" 
              className="text-champion-800 font-medium py-2 hover:bg-gray-100 px-4 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Link to="/contact" className="w-full">Apply Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
