'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "General Questions",
    question: "What is Gosheaper?",
    answer: "Gosheaper is an AI-powered automation platform that helps businesses automate various tasks and processes to save time, cut costs, and accelerate growth. We provide a range of automation solutions, from marketing and content creation to data processing and AI-powered customer support."
  },
  {
    category: "General Questions",
    question: "Who is Gosheaper for?",
    answer: "Gosheaper is designed for any business looking to leverage AI and automation to improve efficiency, innovate, and scale its operations. We cater to various needs, including marketing, e-commerce, and data analytics, and can tailor solutions for specific industries."
  },
  {
    category: "Our Services",
    question: "What services do you offer?",
    answer: "We offer a wide range of automation services categorized into: Marketing Automation (email campaigns, lead nurturing, audience segmentation), Content Creation (automatic video posting, script generation, voice-overs), E-commerce Automation (order management, stock control, customer service), Analytics & Reporting (real-time dashboards, KPI tracking), Data Processing (data cleaning, CRM sync, ETL processes), and AI Agents & Chatbots (24/7 multilingual support)."
  },
  {
    category: "Our Services",
    question: "Do you offer specialized automation services?",
    answer: "While our primary listed services cover common business needs, we recognize the potential for automation in other areas. We are open to exploring specialized automation services for HR, IT, supply chain, and finance based on market research and client needs."
  },
  {
    category: "Our Services",
    question: "Can you provide examples of successful automation?",
    answer: "Yes! We have successfully automated: Automated TikTok Video Creation (AI-powered system handling scriptwriting, voice-over, video montage, and publication), Full Marketing Pipeline Automation (complete solution with lead scoring, nurturing sequences, CRM sync, and analytics), and E-commerce AI (comprehensive system automating order processing, inventory management, shipping logistics, and customer support)."
  },
  {
    category: "Getting Started",
    question: "How does the automation process work?",
    answer: "We've simplified the process into three steps: 1) Initial Inquiry & Consultation - fill out our contact form and we'll consult to understand your needs, 2) Deployment & Integration - our team develops and integrates the custom solution into your workflows, 3) Growth & Support - ongoing support and optimization to ensure solutions scale with your business."
  },
  {
    category: "Getting Started",
    question: "How do I get a quote?",
    answer: "You can get a free, no-obligation quote by filling out the contact form on our homepage. Please provide details about: the type of automation needed, your expected results, and your timeline/budget. This helps us give you an accurate estimate."
  },
  {
    category: "Technical & Security",
    question: "Is my data secure?",
    answer: "Absolutely. Security is a top priority. Our platform includes: SSL Certificate (HTTPS) with all data encrypted in transit, industry-grade security standards following best practices for data protection, and GDPR compliance ensuring your data is protected according to international standards."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our automation platform and services
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-2">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                <div className={`transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you get started
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}