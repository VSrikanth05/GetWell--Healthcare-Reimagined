
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Activity, Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-4">
              <span className="text-blue-600 text-sm font-medium flex items-center">
                <Heart className="w-4 h-4 mr-2" /> Healthcare reimagined
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 tracking-tight">
              Smart healthcare
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> solutions </span>
              for everyone
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              GetWell provides innovative digital tools for personalized health monitoring, seamless care coordination, and better patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 btn-shine">
                Start your free trial
              </Button>
              <Button variant="outline" size="lg">
                Book a demo
              </Button>
            </div>
            
            {/* Statistics */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-left">
                <p className="text-2xl md:text-3xl font-bold text-blue-500">94%</p>
                <p className="text-sm text-gray-600">Patient satisfaction</p>
              </div>
              <div className="text-left">
                <p className="text-2xl md:text-3xl font-bold text-blue-500">30M+</p>
                <p className="text-sm text-gray-600">Users worldwide</p>
              </div>
              <div className="text-left">
                <p className="text-2xl md:text-3xl font-bold text-blue-500">15k+</p>
                <p className="text-sm text-gray-600">Healthcare providers</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="GetWell Platform" 
                  className="rounded-lg shadow-2xl animate-float w-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-10 md:left-1/4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-blue-500 p-2 rounded-full">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Health monitoring</p>
                <p className="text-xs text-gray-500">Real-time tracking</p>
              </div>
            </div>
            <div className="absolute top-10 -right-6 md:right-10 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-teal-500 p-2 rounded-full">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">HIPAA Compliant</p>
                <p className="text-xs text-gray-500">Secure data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
