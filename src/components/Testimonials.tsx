
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "GetWell has completely transformed how we manage patient care. The intuitive interface and powerful features have made a tremendous impact on our practice efficiency.",
      author: "Dr. Sarah Johnson",
      title: "Medical Director, Mercy Hospital",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120"
    },
    {
      quote: "As a patient with multiple chronic conditions, GetWell has made it so much easier to stay on top of my health. The medication reminders and symptom tracking are game-changers.",
      author: "Michael Roberts",
      title: "Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120"
    },
    {
      quote: "GetWell's analytics have provided valuable insights that helped us improve patient outcomes by 35% in just six months. The ROI has been incredible.",
      author: "Lisa Chen",
      title: "CTO, HealthFirst Network",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&h=120"
    },
  ];

  return (
    <div id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase font-bold tracking-wider text-blue-500 mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Trusted by healthcare leaders</h3>
          <p className="text-xl text-gray-600">
            See why thousands of healthcare providers and patients choose GetWell for their healthcare management needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-white rounded-xl p-6 shadow-md flex flex-col"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v6a4 4 0 01-4 4H4v4h2a8 8 0 008-8V8h-4zm12 0v6a4 4 0 01-4 4h-2v4h2a8 8 0 008-8V8h-4z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 flex-1">{testimonial.quote}</p>
              <div className="flex items-center mt-4">
                <div className="flex-shrink-0 mr-3">
                  <img 
                    className="h-10 w-10 rounded-full object-cover" 
                    src={testimonial.image} 
                    alt={testimonial.author}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="mt-20">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">TRUSTED BY LEADING HEALTHCARE INSTITUTIONS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-400">Mayo Clinic</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-400">Cleveland Clinic</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-400">Johns Hopkins</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-400">Mass General</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
