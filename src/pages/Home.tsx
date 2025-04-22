
import React from "react";
import Hero from "@/components/home/Hero";
import ProcessSteps from "@/components/home/ProcessSteps";
import Testimonials from "@/components/home/Testimonials";
import QuoteSection from "@/components/home/QuoteSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Hero />
      <ProcessSteps />
      
      {/* Funding Options Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-champion-800 mb-4">
              Flexible Funding Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a variety of funding options to meet the unique needs of your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Funding Option 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-champion-800">
              <h3 className="text-xl font-bold text-champion-800 mb-4">Unsecured Term Loans</h3>
              <p className="text-gray-600 mb-6">Get fast access to capital without collateral. Fixed terms and competitive rates for qualified businesses.</p>
              <Link to="/funding" className="text-teal-500 font-medium hover:underline">Learn more</Link>
            </div>
            
            {/* Funding Option 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-champion-800">
              <h3 className="text-xl font-bold text-champion-800 mb-4">Lines of Credit</h3>
              <p className="text-gray-600 mb-6">Flexible revolving credit lines that allow you to withdraw funds as needed and only pay interest on what you use.</p>
              <Link to="/funding" className="text-teal-500 font-medium hover:underline">Learn more</Link>
            </div>
            
            {/* Funding Option 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-champion-800">
              <h3 className="text-xl font-bold text-champion-800 mb-4">SBA Loans</h3>
              <p className="text-gray-600 mb-6">Government-backed loans with lower rates and longer repayment terms for eligible small businesses.</p>
              <Link to="/funding" className="text-teal-500 font-medium hover:underline">Learn more</Link>
            </div>
            
            {/* Funding Option 4 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-champion-800">
              <h3 className="text-xl font-bold text-champion-800 mb-4">Equipment Financing</h3>
              <p className="text-gray-600 mb-6">Fund new equipment purchases with the equipment itself serving as collateral, preserving your cash flow.</p>
              <Link to="/funding" className="text-teal-500 font-medium hover:underline">Learn more</Link>
            </div>
            
            {/* Funding Option 5 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-champion-800">
              <h3 className="text-xl font-bold text-champion-800 mb-4">Real Estate Financing</h3>
              <p className="text-gray-600 mb-6">Solutions for purchasing, refinancing, or improving commercial real estate properties.</p>
              <Link to="/funding" className="text-teal-500 font-medium hover:underline">Learn more</Link>
            </div>
            
            {/* Funding Option 6 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-champion-800">
              <h3 className="text-xl font-bold text-champion-800 mb-4">Large Project Funding</h3>
              <p className="text-gray-600 mb-6">Customized funding solutions for large-scale projects up to $1B with flexible structures.</p>
              <Link to="/funding" className="text-teal-500 font-medium hover:underline">Learn more</Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-champion-800 hover:bg-champion-700">
              <Link to="/contact">Get Qualified Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <QuoteSection />
      
      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-champion-700 to-champion-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Apply now and get pre-qualified for funding in as little as 24 hours. Our team of experts is ready to help you find the perfect solution for your business needs.
            </p>
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg px-8 py-6">
              <Link to="/contact">Apply For Funding Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
