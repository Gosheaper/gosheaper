'use client';

import { useState } from 'react';

export default function AutomationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    automationType: '',
    projectDescription: '',
    expectedResults: '',
    deadlineBudget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://automation.gosheaper.cloud/webhook/automation-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('✅ Your request has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          automationType: '',
          projectDescription: '',
          expectedResults: '',
          deadlineBudget: ''
        });
      } else {
        alert('❌ Error sending your request.');
      }
    } catch (error) {
      console.error(error);
      alert('⚠️ An error occurred. Please try again.');
    }
  };

  const automationTypes = [
    'Marketing Automation',
    'Sales Process Automation',
    'Customer Support Automation',
    'HR & Recruitment Automation',
    'E-commerce Automation',
    'IT Infrastructure Automation',
    'Supply Chain Automation',
    'Financial Operations Automation',
    'Custom Business Process'
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Automate Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your operations? Get a custom automation plan tailored to your business needs.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Free consultation</h3>
              <p className="text-sm text-gray-600">No cost, no obligation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">48h response time</h3>
              <p className="text-sm text-gray-600">Quick turnaround guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Custom solution</h3>
              <p className="text-sm text-gray-600">Tailored to your needs</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name/Company */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name / Company Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Enter your name or company name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="your.email@company.com"
              />
            </div>

            {/* Type of Automation */}
            <div>
              <label htmlFor="automationType" className="block text-sm font-medium text-gray-700 mb-2">
                Type of Automation *
              </label>
              <select
                id="automationType"
                name="automationType"
                required
                value={formData.automationType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select automation type</option>
                {automationTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                required
                rows={4}
                value={formData.projectDescription}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="Describe your current process and what you'd like to automate..."
              />
            </div>

            {/* Expected Results */}
            <div>
              <label htmlFor="expectedResults" className="block text-sm font-medium text-gray-700 mb-2">
                Expected Results *
              </label>
              <textarea
                id="expectedResults"
                name="expectedResults"
                required
                rows={3}
                value={formData.expectedResults}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="What outcomes do you expect? (e.g., save 20 hours/week, reduce costs by 30%, improve accuracy...)"
              />
            </div>

            {/* Deadline & Budget */}
            <div>
              <label htmlFor="deadlineBudget" className="block text-sm font-medium text-gray-700 mb-2">
                Deadline & Budget *
              </label>
              <textarea
                id="deadlineBudget"
                name="deadlineBudget"
                required
                rows={3}
                value={formData.deadlineBudget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="When do you need this implemented? What's your budget range?"
              />
            </div>

            {/* Security Note */}
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2a3 3 0 11-6 0V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              🔒 Your information is secure and will never be shared
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Get My Free Automation Plan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}