
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const CreditRepair = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-champion-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Repair & Coaching</h1>
            <p className="text-xl opacity-90 mb-8">
              Improve your credit score to qualify for better funding options and lower rates.
            </p>
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-champion-800 mb-4">Our Credit Repair Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive credit repair and coaching services are designed to help individuals and business 
              owners improve their credit profiles and qualify for better funding options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-champion-800">
              <h3 className="text-xl font-bold text-champion-800 mb-4">Credit Report Analysis</h3>
              <p className="text-gray-700 mb-6">
                Our experts will analyze your credit reports from all three major bureaus to identify errors, 
                inaccuracies, and negative items that can be addressed.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Comprehensive credit report review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Identification of negative items</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Detailed action plan</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-champion-800">
              <h3 className="text-xl font-bold text-champion-800 mb-4">Dispute Resolution</h3>
              <p className="text-gray-700 mb-6">
                We work to resolve inaccurate, unfair, or unverifiable negative items on your credit report 
                through proven dispute strategies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Challenge incorrect information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Remove unverifiable items</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Address identity theft issues</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-champion-800">
              <h3 className="text-xl font-bold text-champion-800 mb-4">Credit Coaching</h3>
              <p className="text-gray-700 mb-6">
                Our financial literacy education and coaching help you build and maintain excellent credit 
                for long-term financial success.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Personalized credit strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Debt management planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Score improvement tactics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Building Program */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-champion-800 mb-6">$250K 0% Interest Credit Building Program</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our signature credit building program helps business owners secure up to $250,000 in 0% interest 
                  business credit, creating financial leverage without personal liability.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  This exclusive program guides you through the process of establishing business credit separately 
                  from your personal credit, opening doors to funding opportunities regardless of your personal 
                  credit history.
                </p>
                <Button asChild className="bg-champion-800 hover:bg-champion-700">
                  <Link to="/contact">Learn More About This Program</Link>
                </Button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-champion-800 mb-6">Program Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                    <span>Access up to $250,000 in business credit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                    <span>0% interest introductory offers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                    <span>Build business credit separate from personal credit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                    <span>Step-by-step guidance and coaching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                    <span>Improve funding qualification chances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                    <span>Reduce financing costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-champion-800 mb-4">Why Choose Our Credit Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our credit repair and coaching services are designed specifically for business owners and entrepreneurs 
              seeking to improve their funding options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-champion-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-champion-800">1</span>
              </div>
              <h3 className="text-lg font-bold text-champion-800 mb-3">Business Focused</h3>
              <p className="text-gray-600">
                Our credit solutions are specifically designed for business owners and their unique needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-champion-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-champion-800">2</span>
              </div>
              <h3 className="text-lg font-bold text-champion-800 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Our clients have seen an average increase of 70+ points in their credit scores.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-champion-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-champion-800">3</span>
              </div>
              <h3 className="text-lg font-bold text-champion-800 mb-3">Comprehensive Approach</h3>
              <p className="text-gray-600">
                We address both immediate credit issues and long-term credit building strategies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-champion-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-champion-800">4</span>
              </div>
              <h3 className="text-lg font-bold text-champion-800 mb-3">Funding Integration</h3>
              <p className="text-gray-600">
                Our credit services seamlessly integrate with our funding solutions for a complete financial approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-champion-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Improve Your Credit?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step toward better credit and improved funding options today.
            </p>
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg">
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreditRepair;
