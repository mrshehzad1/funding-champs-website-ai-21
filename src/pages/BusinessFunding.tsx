import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
const BusinessFunding = () => {
  return <main>
      {/* Hero Section */}
      <section className="bg-champion-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Funding Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Tailored financial solutions for businesses of all sizes and stages.
            </p>
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Funding Options Tabs */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-champion-800 mb-4">Our Funding Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our range of flexible funding solutions designed to meet the unique needs of your business.
            </p>
          </div>

          <Tabs defaultValue="unsecured" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="unsecured" className="text-xs">Unsecured Loans</TabsTrigger>
              <TabsTrigger value="revolving">Lines of Credit</TabsTrigger>
              <TabsTrigger value="sba">SBA Loans</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
              <TabsTrigger value="realestate">Real Estate</TabsTrigger>
              <TabsTrigger value="large">Large Projects</TabsTrigger>
            </TabsList>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <TabsContent value="unsecured">
                <h3 className="text-2xl font-bold text-champion-800 mb-4">Unsecured Term Loans</h3>
                <p className="text-gray-700 mb-6">
                  Our unsecured term loans provide fast access to capital without requiring collateral. 
                  With fixed terms and competitive rates, these loans are perfect for businesses 
                  looking to expand operations, hire staff, or manage cash flow.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Loan amounts from $5,000 to $500,000</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Terms ranging from 3 to 60 months</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Fixed interest rates starting at 5.99%</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>No collateral required</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Fast approval process</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Ideal For</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Working capital needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Expanding operations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Hiring additional staff</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Inventory purchases</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Unexpected expenses</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button asChild>
                  <Link to="/contact">Apply for an Unsecured Term Loan</Link>
                </Button>
              </TabsContent>
              
              <TabsContent value="revolving">
                <h3 className="text-2xl font-bold text-champion-800 mb-4">Revolving Lines of Credit</h3>
                <p className="text-gray-700 mb-6">
                  Our flexible revolving credit lines allow you to withdraw funds as needed and only pay 
                  interest on what you use. This revolving facility provides ongoing access to funds up 
                  to your approved credit limit.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Credit lines from $10,000 to $1,000,000</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Draw funds as needed</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Only pay interest on what you use</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Revolving facility - reuse as you repay</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Competitive variable rates</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Ideal For</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Managing cash flow fluctuations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Handling seasonal business needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Emergency funds</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Taking advantage of time-sensitive opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Ongoing working capital needs</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button asChild>
                  <Link to="/contact">Apply for a Line of Credit</Link>
                </Button>
              </TabsContent>
              
              <TabsContent value="sba">
                <h3 className="text-2xl font-bold text-champion-800 mb-4">SBA Loans</h3>
                <p className="text-gray-700 mb-6">
                  Our SBA loan programs offer government-backed loans with lower rates and 
                  longer repayment terms for eligible small businesses. These loans are designed 
                  to help businesses that might not qualify for traditional financing.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Loan amounts from $50,000 to $5,000,000</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Terms up to 25 years</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Lower down payments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Competitive interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Flexible eligibility requirements</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Ideal For</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Business acquisitions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Commercial real estate</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Equipment purchases</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Long-term expansion projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Working capital</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button asChild>
                  <Link to="/contact">Apply for an SBA Loan</Link>
                </Button>
              </TabsContent>
              
              <TabsContent value="equipment">
                <h3 className="text-2xl font-bold text-champion-800 mb-4">Equipment Financing</h3>
                <p className="text-gray-700 mb-6">
                  Fund new equipment purchases with the equipment itself serving as collateral, 
                  preserving your cash flow while acquiring the tools you need to grow your business.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Financing up to 100% of equipment value</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Terms up to 7 years</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Fixed monthly payments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Potential tax benefits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Equipment serves as collateral</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Ideal For</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Manufacturing equipment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Construction equipment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Medical equipment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Technology upgrades</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Fleet vehicles</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button asChild>
                  <Link to="/contact">Apply for Equipment Financing</Link>
                </Button>
              </TabsContent>
              
              <TabsContent value="realestate">
                <h3 className="text-2xl font-bold text-champion-800 mb-4">Real Estate Financing</h3>
                <p className="text-gray-700 mb-6">
                  Our real estate financing solutions help you purchase, refinance, or improve 
                  commercial real estate properties with competitive rates and flexible terms.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Financing for commercial properties</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Terms up to 25 years</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Competitive rates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Up to 90% LTV financing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Fixed and variable rate options</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Ideal For</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Office buildings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Retail spaces</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Industrial properties</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Multi-unit residential buildings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Property renovations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button asChild>
                  <Link to="/contact">Apply for Real Estate Financing</Link>
                </Button>
              </TabsContent>
              
              <TabsContent value="large">
                <h3 className="text-2xl font-bold text-champion-800 mb-4">Large Project Funding</h3>
                <p className="text-gray-700 mb-6">
                  Our custom funding solutions for large-scale projects up to $1 billion offer 
                  flexible structures and terms tailored to your specific project requirements.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Funding from $10 million to $1 billion</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Customized financing structures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Flexible terms based on project needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Creative funding solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Dedicated project financing team</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-champion-800 mb-3">Ideal For</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Major infrastructure projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Large-scale real estate developments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Energy and utility projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Corporate acquisitions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Technology-scale operations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button asChild>
                  <Link to="/contact">Inquire About Project Funding</Link>
                </Button>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-champion-800 mb-4">Funding for All Business Types</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're just starting out or looking to take your established business to the next level, 
              we have funding solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Startups */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-champion-800 mb-4">Startup Funding</h3>
              <p className="text-gray-700 mb-6">
                We understand the unique challenges facing new businesses. Our startup funding 
                solutions are designed to help you get off the ground and establish a solid foundation.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                  <span>Specialized programs for early-stage businesses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                  <span>Funding based on potential and vision</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                  <span>Mentorship and business guidance included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                  <span>Flexible repayment options</span>
                </li>
              </ul>
              
              <Button asChild variant="outline">
                <Link to="/contact">Explore Startup Funding</Link>
              </Button>
            </div>
            
            {/* Established Businesses */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-champion-800 mb-4">Established Business Funding</h3>
              <p className="text-gray-700 mb-6">
                For businesses with a proven track record, we offer specialized funding solutions 
                designed to fuel growth, expansion, and optimization of your operations.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                  <span>Higher funding amounts based on business history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                  <span>Preferential rates for qualified businesses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                  <span>Expansion and acquisition financing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5" size={18} />
                  <span>Strategic funding consultation</span>
                </li>
              </ul>
              
              <Button asChild variant="outline">
                <Link to="/contact">Explore Business Funding</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-champion-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Funded?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Apply now and get pre-qualified for the right funding solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg">
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white bg-transparent hover:bg-white hover:text-champion-800 text-lg">
                <Link to="/requirements">View Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default BusinessFunding;