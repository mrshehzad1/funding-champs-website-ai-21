
import React, { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Champion Worldwide helped me secure funding for my startup when traditional banks turned me away. Their process was fast, transparent, and actually designed to help business owners succeed.",
      author: "Sarah M.",
      company: "Tech Innovations LLC",
      position: "Founder & CEO"
    },
    {
      quote: "The team at Champion Worldwide understood our unique funding needs and delivered a solution that allowed us to expand our operations with confidence. Their expertise was invaluable.",
      author: "Michael T.",
      company: "Global Manufacturing Co.",
      position: "Operations Director"
    },
    {
      quote: "When we needed quick capital to take advantage of a time-sensitive opportunity, Champion Worldwide delivered. Their team worked tirelessly to get us funded within days, not weeks or months.",
      author: "Jennifer P.",
      company: "Retail Solutions Inc.",
      position: "Managing Partner"
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-champion-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped businesses of all sizes secure the funding they need to grow and succeed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden h-full">
                    <CardContent className="p-8 md:p-10 flex flex-col justify-between h-full">
                      <div>
                        <svg className="h-8 w-8 text-champion-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="font-bold text-champion-800">{testimonial.author}</p>
                        <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative inset-auto" />
              <CarouselNext className="relative inset-auto" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
