
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-champion-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Champion Worldwide</h1>
            <p className="text-xl opacity-90 mb-8">
              We're committed to helping businesses access the capital they need to grow and succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-champion-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Champion Worldwide, we're dedicated to transforming how businesses access capital. We understand that traditional financing can be slow, restrictive, and often fails to meet the real-world needs of growing businesses.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to provide innovative funding solutions that are accessible, flexible, and designed to help businesses of all sizes achieve their full potential. We believe that with the right financial support, every business can become a champion in their field.
              </p>
              <p className="text-lg text-gray-700">
                We combine industry expertise with personalized service to deliver funding solutions that truly work for our clients, whether they're startups seeking their first capital injection or established enterprises planning their next phase of growth.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-champion-800 mb-6">What Sets Us Apart</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Fast approval process compared to traditional lenders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Flexible funding options tailored to your specific needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Marketing and strategic support beyond just funding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Specialized solutions for startups and large enterprises</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Expert guidance throughout the funding process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Access to acquisition financing with quick approvals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-champion-800 mb-4">
              Our Funding Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've streamlined our process to get you funded as quickly as possible.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-champion-800"></div>
              
              {/* Step 1 */}
              <div className="md:flex items-center mb-12 md:mb-24 relative">
                <div className="md:w-1/2 pr-8 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-champion-800 mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">We start by understanding your business needs and goals to determine the best funding solutions for your situation.</p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center bg-champion-800 text-white rounded-full h-12 w-12 font-bold">1</div>
                <div className="md:w-1/2 pl-0 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="italic text-gray-600">"Our team takes the time to truly understand your business model and financial needs before recommending any funding options."</p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:flex items-center mb-12 md:mb-24 relative">
                <div className="md:w-1/2 pr-8 md:text-right order-1 md:order-2 mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="italic text-gray-600">"We'll help you gather all the necessary documentation and prepare your application to maximize your chances of approval."</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center bg-champion-800 text-white rounded-full h-12 w-12 font-bold">2</div>
                <div className="md:w-1/2 pl-0 md:pl-8 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-champion-800 mb-2">Application & Documentation</h3>
                  <p className="text-gray-600">We'll guide you through our application process and help you gather the necessary documents to support your funding request.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:flex items-center mb-12 md:mb-24 relative">
                <div className="md:w-1/2 pr-8 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-champion-800 mb-2">Review & Approval</h3>
                  <p className="text-gray-600">Our team reviews your application and works with funding partners to secure the best terms for your business.</p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center bg-champion-800 text-white rounded-full h-12 w-12 font-bold">3</div>
                <div className="md:w-1/2 pl-0 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="italic text-gray-600">"We leverage our extensive network of lenders to find the best match for your funding needs, often securing approvals when others can't."</p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:flex items-center relative">
                <div className="md:w-1/2 pr-8 md:text-right order-1 md:order-2 mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="italic text-gray-600">"Most clients receive their funds within 1-7 days of approval, allowing them to act quickly on their business opportunities."</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center bg-champion-800 text-white rounded-full h-12 w-12 font-bold">4</div>
                <div className="md:w-1/2 pl-0 md:pl-8 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-champion-800 mb-2">Funding & Implementation</h3>
                  <p className="text-gray-600">Once approved, you'll receive your funds quickly, and we'll help you implement any necessary strategies for success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-champion-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the thousands of businesses we've helped secure the funding they need to grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg">
                <Link to="/contact">Apply For Funding</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white bg-transparent hover:bg-white hover:text-champion-800 text-lg">
                <Link to="/funding">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
