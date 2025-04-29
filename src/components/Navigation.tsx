
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                GetWell
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-500 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-500 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-500 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-500 transition-colors">FAQ</a>
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-medium">Log In</Button>
            <Button className="font-medium bg-blue-500 hover:bg-blue-600">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <a href="#features" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>Features</a>
              <a href="#testimonials" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>Testimonials</a>
              <a href="#pricing" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>Pricing</a>
              <a href="#faq" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>FAQ</a>
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" className="flex-1">Log In</Button>
                <Button className="flex-1 bg-blue-500 hover:bg-blue-600">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
