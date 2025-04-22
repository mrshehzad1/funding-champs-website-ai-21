
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-champion-800 to-champion-900 text-white py-20 md:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 right-0 h-40 bg-white/10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-white/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Qualify for the Best Funding Solutions Guaranteed
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            <span className="font-semibold">$250 Million Funded & Counting</span> - Get the capital your business needs to thrive
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg px-8 py-6">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white bg-transparent hover:bg-white hover:text-champion-800 text-lg px-8 py-6">
              <Link to="/funding">Explore Solutions</Link>
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block">
            <p className="text-lg font-medium">Fast approvals. Competitive rates. Expert guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
