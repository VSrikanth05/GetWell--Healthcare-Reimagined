
import React from 'react';
import { Activity, Calendar, User, MessageSquare, Heart, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Activity className="h-6 w-6 text-blue-500" />,
      title: 'Health Monitoring',
      description: 'Track vital signs, symptoms, and medications with real-time data visualization and alerts.'
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-500" />,
      title: 'Appointment Scheduling',
      description: 'Seamlessly book, reschedule, or cancel appointments with your healthcare providers.'
    },
    {
      icon: <User className="h-6 w-6 text-blue-500" />,
      title: 'Patient Profiles',
      description: 'Comprehensive patient profiles with medical history, allergies, and treatment plans.'
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
      title: 'Secure Messaging',
      description: 'HIPAA-compliant messaging platform for patient-provider communication.'
    },
    {
      icon: <Heart className="h-6 w-6 text-blue-500" />,
      title: 'Wellness Programs',
      description: 'Personalized wellness programs with nutrition, exercise, and mental health resources.'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: 'Data Security',
      description: 'Enterprise-grade security measures to protect sensitive medical information.'
    }
  ];

  return (
    <div id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase font-bold tracking-wider text-blue-500 mb-3">Our Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Everything you need for better healthcare management</h3>
          <p className="text-xl text-gray-600">
            GetWell provides a comprehensive suite of tools designed to enhance patient care, 
            streamline operations, and improve health outcomes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your healthcare experience?</h3>
              <p className="text-blue-50">Join thousands of healthcare providers who trust GetWell.</p>
            </div>
            <button className="px-8 py-4 bg-white text-blue-500 font-bold rounded-lg hover:bg-blue-50 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
