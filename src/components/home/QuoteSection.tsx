
import React from "react";

const QuoteSection = () => {
  return (
    <section className="py-16 md:py-24 bg-champion-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-16 h-16 mx-auto mb-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <blockquote className="text-2xl md:text-4xl font-semibold mb-8 leading-tight">
            "Success is not final, failure is not fatal: it is the courage to continue that counts."
          </blockquote>
          
          <cite className="text-xl not-italic">
            — Winston Churchill
          </cite>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
