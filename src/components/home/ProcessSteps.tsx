
import React from "react";
import { FileText, CheckSquare, Calendar } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: <FileText size={48} className="text-teal-500" />,
      title: "Fill Application",
      description: "Complete our simple online application in just minutes with basic information about your business.",
    },
    {
      icon: <CheckSquare size={48} className="text-teal-500" />,
      title: "Receive Qualification",
      description: "Get pre-qualified for funding options tailored to your specific business needs and goals.",
    },
    {
      icon: <Calendar size={48} className="text-teal-500" />,
      title: "Get Funded Quickly",
      description: "Receive your approved funds in under a week, often as fast as 24-48 hours after approval.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-champion-800 mb-4">
            Three Simple Steps to Get Funded
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes it easy to get the funding your business needs without the typical headaches and delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-2xl transition-all duration-300 relative flex flex-col items-center text-center group transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-champion-800 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:bg-teal-500 group-hover:scale-110">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6 transform group-hover:scale-125 transition-all duration-300 group-hover:rotate-6">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-champion-800 mb-4 transition-colors duration-300 group-hover:text-teal-500">{step.title}</h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">{step.description}</p>
              
              {/* Animated border bottom */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-500 to-champion-800 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
