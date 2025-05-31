import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import SEO from "@/components/SEO";
const Contact = () => {
  return <>
      <SEO title="Contact Champion Worldwide | Business Funding Experts - Get Started Today" description="Contact Champion Worldwide for business funding solutions. Our experts are ready to help you get qualified for the best funding options. Call (917) 299-6455 or apply online." keywords="contact business funding, funding consultation, business loan experts, Champion Worldwide contact, apply for funding" canonicalUrl="https://championworldwide.com/contact" />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-champion-800 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl opacity-90">
                Get in touch with our funding experts to discuss your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="text-3xl font-bold text-champion-800 mb-6">Get in Touch</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Have questions about our funding solutions? Want to know if your business qualifies? Our team is ready to help you navigate the funding process and find the right solution for your needs.
                  </p>
                  
                  <div className="bg-white p-8 rounded-lg shadow-md mb-8 px-[17px]">
                    <div className="flex items-start mb-6">
                      <div className="bg-champion-100 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-champion-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-champion-800 mb-1">Call Us</h3>
                        <p className="text-gray-600">917-299-6455</p>
                        <p className="text-gray-500 text-sm mt-1">Monday to Friday: 8am - 6pm EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-champion-100 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-champion-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-champion-800 mb-1">Email Us</h3>
                        <p className="text-gray-600">worldwidefundingchamps @gmail.com</p>
                        <p className="text-gray-500 text-sm mt-1">We typically respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-champion-800 p-8 rounded-lg text-white">
                    <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="mb-6">Complete our application form and our team will contact you to discuss your funding options.</p>
                    <Button className="bg-teal-500 hover:bg-teal-600 w-full" size="lg">Apply For Funding</Button>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-champion-800 mb-6">Contact Form</h2>
                  <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <Input type="text" id="firstName" placeholder="Your first name" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <Input type="text" id="lastName" placeholder="Your last name" required />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input type="email" id="email" placeholder="Your email address" required />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <Input type="tel" id="phone" placeholder="Your phone number" required />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <Input type="text" id="company" placeholder="Your company name" />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-700 mb-1">
                        Desired Funding Amount
                      </label>
                      <Input type="text" id="fundingAmount" placeholder="e.g. $50,000" />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Tell us about your business and funding needs" rows={5} />
                    </div>

                    <Button type="submit" className="bg-champion-800 hover:bg-champion-700 w-full" size="lg">
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>;
};
export default Contact;