
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      description: 'Perfect for small practices',
      features: [
        'Up to 500 patient records',
        'Basic health monitoring',
        'Appointment scheduling',
        'Secure messaging',
        'Email support',
        'Regular updates',
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      description: 'Ideal for growing practices',
      features: [
        'Up to 2,000 patient records',
        'Advanced health monitoring',
        'Custom appointment workflows',
        'Video consultations',
        'Analytics dashboard',
        'Priority email & phone support',
        'Regular updates',
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For healthcare networks',
      features: [
        'Unlimited patient records',
        'Complete health monitoring suite',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom feature development',
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase font-bold tracking-wider text-blue-500 mb-3">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h3>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your practice. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Toggle - Monthly/Annual */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg flex">
            <button className="px-4 py-2 rounded-md bg-white text-gray-800 font-medium shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-md text-gray-600 font-medium">
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border ${plan.popular ? 'border-blue-500' : 'border-gray-200'} overflow-hidden transition-all hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="bg-blue-500 py-2 text-center">
                  <span className="text-white text-sm font-medium">Most Popular</span>
                </div>
              )}
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-500"> /month</span>}
                </div>
                <Button 
                  className={`w-full mb-8 ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`} 
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-2">Have questions about our pricing?</p>
          <a href="#faq" className="text-blue-500 font-medium">Check our FAQ section</a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
