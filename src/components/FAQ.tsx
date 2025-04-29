
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "What is GetWell?",
      answer: "GetWell is a comprehensive healthcare management platform designed to help healthcare providers streamline operations, improve patient engagement, and enhance overall health outcomes through digital tools and analytics."
    },
    {
      question: "How secure is my data on GetWell?",
      answer: "GetWell is fully HIPAA compliant and employs enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and strict access controls to ensure your data remains protected."
    },
    {
      question: "Can GetWell integrate with our existing systems?",
      answer: "Yes, GetWell is designed to seamlessly integrate with popular EHR/EMR systems, billing software, and other healthcare tools through our comprehensive API. Our team can help facilitate custom integrations for Enterprise clients."
    },
    {
      question: "Do you offer a trial period?",
      answer: "Yes, we offer a 14-day free trial for all our plans with no credit card required. This allows you to explore the platform and determine if it meets your practice's needs before making a commitment."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Our support varies by plan. Starter plans include email support during business hours. Professional plans add phone support and faster response times. Enterprise plans include 24/7 dedicated support and a personal account manager."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Absolutely! You can upgrade your plan at any time, with the new rate prorated for the remainder of your billing cycle. Downgrades will take effect at the start of your next billing cycle."
    },
  ];

  return (
    <div id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase font-bold tracking-wider text-blue-500 mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h3>
          <p className="text-xl text-gray-600">
            Find answers to common questions about the GetWell platform.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for?</p>
          <Button className="bg-blue-500 hover:bg-blue-600">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
