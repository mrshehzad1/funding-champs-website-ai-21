
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-champion-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Champion Worldwide</h3>
            <p className="mb-4">
              We provide tailored financial solutions for startups, established businesses, 
              and large-scale projects to help them achieve their goals.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Phone size={18} />
              <span>(888) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <span>info@championworldwide.com</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/funding" className="hover:underline">Business Funding</Link>
              </li>
              <li>
                <Link to="/requirements" className="hover:underline">Financing Requirements</Link>
              </li>
              <li>
                <Link to="/credit-repair" className="hover:underline">Credit Repair</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Unsecured Term Loans</li>
              <li>Revolving Lines of Credit</li>
              <li>SBA Loans</li>
              <li>Equipment Financing</li>
              <li>Real Estate Financing</li>
              <li>Credit Repair Solutions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="mb-4">
              Stay updated with our latest funding solutions and financial tips.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 placeholder:text-white/50"
              />
              <Button className="bg-teal-500 hover:bg-teal-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Champion Worldwide / Global Funding Champs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
