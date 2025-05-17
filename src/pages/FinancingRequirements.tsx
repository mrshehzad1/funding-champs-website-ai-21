import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText } from "lucide-react";
const FinancingRequirements = () => {
  return <main>
      {/* Hero Section */}
      <section className="bg-champion-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financing Requirements</h1>
            <p className="text-xl opacity-90 mb-8">
              Understanding what you need to qualify for our funding solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-champion-800 mb-4">Required Documentation</h2>
              <p className="text-lg text-gray-600">
                The following documents may be required depending on the type of funding you're seeking.
                Don't worry if you don't have everything ready - our team can help guide you through the process.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-12 px-[19px]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="business-info">
                  <AccordionTrigger className="text-lg font-semibold text-champion-800">
                    Business Information
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <ul className="space-y-3 pl-6 mt-2">
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Business license or registration documents</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>EIN (Employer Identification Number) documentation</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Articles of incorporation or organization (for corporations/LLCs)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Business plan (for startups or newer businesses)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>DBA (Doing Business As) filing if applicable</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="financial-docs">
                  <AccordionTrigger className="text-lg font-semibold text-champion-800">
                    Financial Documents
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <ul className="space-y-3 pl-6 mt-2">
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Past 3-6 months of business bank statements</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Past 2-3 years of business tax returns</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Profit and loss statements (current and past 2 years)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Balance sheet (current and past 2 years)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Cash flow projections (for larger funding requests)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Accounts receivable and payable aging reports</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="owner-docs">
                  <AccordionTrigger className="text-lg font-semibold text-champion-800">
                    Owner/Personal Information
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <ul className="space-y-3 pl-6 mt-2">
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Personal identification (driver's license, passport)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Personal tax returns (past 2-3 years)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Personal financial statement</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Resume or business biography</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Credit report authorization</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="legal-docs">
                  <AccordionTrigger className="text-lg font-semibold text-champion-800">
                    Legal Documents
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <ul className="space-y-3 pl-6 mt-2">
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Business licenses and permits</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Commercial leases or property ownership documents</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Franchise agreements (if applicable)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Existing business loans and debt schedules</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Insurance policies</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="special-docs">
                  <AccordionTrigger className="text-lg font-semibold text-champion-800">
                    Special Purpose Documents
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <ul className="space-y-3 pl-6 mt-2">
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Equipment quotes or purchase agreements (for equipment financing)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Real estate appraisals and purchase agreements (for real estate financing)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Construction plans and contractor bids (for construction loans)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Business acquisition documents (for acquisition financing)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="text-teal-500 mr-2 mt-0.5" size={18} />
                        <span>Project proposals and timelines (for project financing)</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-champion-800 mb-4">Qualification Factors</h3>
              <p className="text-gray-700 mb-6">
                In addition to the required documentation, the following factors are typically considered 
                when evaluating funding applications:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-champion-700 mb-3">Business Factors</h4>
                  <ul className="space-y-2 pl-6">
                    <li className="list-disc text-gray-700">Time in business (minimum 6 months for most programs)</li>
                    <li className="list-disc text-gray-700">Monthly revenue (typically $10,000+ for established businesses)</li>
                    <li className="list-disc text-gray-700">Industry type and associated risks</li>
                    <li className="list-disc text-gray-700">Business structure and organization</li>
                    <li className="list-disc text-gray-700">Growth potential and scalability</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-champion-700 mb-3">Personal Factors</h4>
                  <ul className="space-y-2 pl-6">
                    <li className="list-disc text-gray-700">Credit score (minimum requirements vary by program)</li>
                    <li className="list-disc text-gray-700">Personal financial stability</li>
                    <li className="list-disc text-gray-700">Industry experience and expertise</li>
                    <li className="list-disc text-gray-700">Personal investment in the business</li>
                    <li className="list-disc text-gray-700">History of debt repayment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-20 bg-champion-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help with Documentation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't worry if you're missing some documents or aren't sure if you qualify. 
              Our team can help guide you through the process and explore options tailored to your situation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white bg-transparent hover:bg-white hover:text-champion-800 text-lg">
                <Link to="/funding">View Funding Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default FinancingRequirements;