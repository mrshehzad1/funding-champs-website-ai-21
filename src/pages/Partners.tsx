
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HandshakeIcon, Users } from "lucide-react";
import { CheckCircle } from "lucide-react";

const Partners = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-champion-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h1>
            <p className="text-xl opacity-90 mb-8">
              Grow your business by offering our funding solutions to your clients.
            </p>
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
              <Link to="/contact">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-champion-800 mb-6">Why Partner With Us</h2>
              <p className="text-lg text-gray-700 mb-6">
                Partnering with Champion Worldwide allows you to expand your service offerings and
                provide valuable funding solutions to your clients while earning additional revenue
                through our generous referral program.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're a business consultant, accountant, broker, or industry professional,
                our partnership program is designed to create a mutually beneficial relationship
                that helps both our businesses grow.
              </p>
              <p className="text-lg text-gray-700">
                Join our network of over 500 trusted partners who regularly refer clients for business
                funding and enjoy the benefits of our marketing expertise and support.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-champion-800 mb-6">Partner Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Generous commission structure on funded deals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Quick approval process for your clients</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Marketing materials and support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Dedicated partnership manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Online portal to track referrals and commissions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-1" size={20} />
                  <span>Training and educational resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-champion-800 mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer several ways to partner with us, each designed to fit different business models and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Referral Partner */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <div className="bg-champion-100 p-4 inline-block rounded-full mb-6">
                <Users className="h-10 w-10 text-champion-800" />
              </div>
              <h3 className="text-xl font-bold text-champion-800 mb-3">Referral Partner</h3>
              <p className="text-gray-700 mb-4">
                Simply refer your clients to us and earn commissions on every funded deal.
                This is perfect for occasional referrals with minimal involvement.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Commission rates from 1-3% based on volume</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Simple referral process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>No minimum referral requirements</span>
                </li>
              </ul>
            </div>
            
            {/* Affiliate Partner */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <div className="bg-champion-100 p-4 inline-block rounded-full mb-6">
                <HandshakeIcon className="h-10 w-10 text-champion-800" />
              </div>
              <h3 className="text-xl font-bold text-champion-800 mb-3">Affiliate Partner</h3>
              <p className="text-gray-700 mb-4">
                Integrate our funding solutions into your business model with co-branded marketing
                materials and a more strategic relationship.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Higher commission rates of 3-5%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Co-branded marketing materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Regular training and updates</span>
                </li>
              </ul>
            </div>
            
            {/* Strategic Partner */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <div className="bg-champion-100 p-4 inline-block rounded-full mb-6">
                <Users className="h-10 w-10 text-champion-800" />
              </div>
              <h3 className="text-xl font-bold text-champion-800 mb-3">Strategic Partner</h3>
              <p className="text-gray-700 mb-4">
                For high-volume partners looking for deep integration and customized
                solutions for their client base.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Premium commission rates of 5-10%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Customized funding solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <span>Dedicated account executive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-champion-800 mb-4">What Our Partners Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our partners about their experience working with Champion Worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <svg className="h-8 w-8 text-champion-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-gray-700 italic mb-6">
                "Partnering with Champion Worldwide has allowed me to offer valuable funding solutions to my consulting clients. The process is smooth, the team is responsive, and the commissions are very competitive."
              </p>
              <div>
                <p className="font-bold text-champion-800">Michael R.</p>
                <p className="text-gray-600">Business Consultant</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <svg className="h-8 w-8 text-champion-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-gray-700 italic mb-6">
                "As a financial advisor, I frequently have clients who need business funding. Champion Worldwide has been an excellent partner, providing my clients with great options while allowing me to earn significant additional revenue."
              </p>
              <div>
                <p className="font-bold text-champion-800">Jennifer T.</p>
                <p className="text-gray-600">Financial Advisor</p>
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
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our partner network today and start earning commissions while providing valuable funding solutions to your clients.
            </p>
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg">
              <Link to="/contact">Apply to Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;
